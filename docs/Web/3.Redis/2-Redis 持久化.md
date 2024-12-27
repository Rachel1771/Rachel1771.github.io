# 1.持久化
## 1.1 什么是持久化
依据个人理解就是，当服务器突然发生问题的时候，正在处理的数据和已经存储好的数据不会被损坏，当服务器启动的时候，通过持久化工具进行数据恢复，避免了数据的丢失和系统的开销。Redis中由两种持久化：RDB和AOF：
![一张图解释](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/11.m5672y96.webp)

**RDB**：类似快照技术，将当前的数据快照存留成rdb文件

**AOF**：将数据操作指令打入队列中

# 2.RDB

>指定时间间隔内，执行数据集的时间点快照

实现类似照片记录效果的方式，就是把某一时刻的数据和状态以文件的形式写到磁盘上，也就是快照。这样一来即使故障宕机，快照文件也不会丢失，数据的可靠性也就得到了保证。这个快照文件就称为RDB文件(dump.rdb)，其中，RDB就是Redis DataBase的缩写。Redis的数据都是在内存中，RDB保存备份的是后，执行的是全量快照，把内存的数据记录到磁盘中去。

## 2.1 配置文件和操作
![dsad](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/12.4g4kbgfch7.webp)

### 2.1.1配置
**Redis7以前的配置情况**：
![fasf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/13.51e7xr9srw.webp)

**Redis7的配置**
![fasf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/14.67xj6cypda.webp)

## 2.2操作
### 2.2.1自动触发

- 修改redis.conf配置中的save《seconds》《changes》项目
- 修改dump文件保存路径
- 修改dump文件名称
- 触发备份
- 恢复

**修改redis.conf配置**
![fasf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/15.eskx2b94f.webp)

**修改文件路径**
![dasfgf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/16.6f0r1skusw.webp)


**修改文件名称**：修改为xxxxx.rdb即可，我修改为*dbfiename* dump6379.rdb

**恢复**：将备份文件移动到redis的安装目录并启动服务即可，其中如果备份成功还使用了flushdb清空redis，也会产生dump.rdb文件的，但是这个文件是空的，没有什么意义。

### 2.2.2手动触发

分为两种：save和bgsave，其中默认使用bgsave。

**save**：在程序执行构成会阻塞当前的redis服务器，直到持久化工作完成，也就是过程不可被其他命令终端，线上禁止使用

**bgsave**：Redis在后台异步进行快照，不阻塞快照同时还可以响应客户端的请求，触发方式会fork一个子进程，由该进程进行复制持久化过程。


# 3.AOF

## 3.1 工作流程 
>以日志的形式来记录每个写操作，将Redis执行过的所有写指令记录下来(读操作不记录)，只许追加文件但不可以改写文件，redis启动之初会读取该文件重新构建数据，换言之，redi重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作

默认不开启，一旦开启就是使用aof，命令为：appendonly yes。其保存的是appendonly.aof文件。工作流程如下：
![dgfhggfh](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/17.8ojrla5l9s.webp)

  
|   |   |
|---|---|
|1|Client作为命令的来源，会有多个源头以及源源不断的请求命令。|
|2|在这些命令到达Redis Server 以后并不是直接写入AOF文件，会将其这些命令先放入AOF缓存中进行保存。这里的AOF缓冲区实际上是内存中的一片区域，存在的目的是当这些命令达到一定量以后再写入磁盘，避免频繁的磁盘IO操作。|
|3|AOF缓冲会根据AOF缓冲区**_同步文件的三种写回策略_**将命令写入磁盘上的AOF文件。|
|4|随着写入AOF内容的增加为避免文件膨胀，会根据规则进行命令的合并(又称**_AOF重写)_**，从而起到AOF文件压缩的目的。|
|5|当Redis Server 服务器重启的时候会从AOF文件载入数据。|
## 3.2 三种写回机制

- Always：同步写回，每个写命令执行完立刻同步写到磁盘
- everysec：每秒写回
- No：操作系统决定何时xiehui

![ggfh](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/18.1sf413mb5d.webp)

## 3.3操作
### 3.3.1配置
开启AOF：
![gdgdf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/19.175gesruuq.webp)

配置appendfsync为自己要的时间，一般就是everysec

配置保存路径与RDB差不多：![fsdf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/20.6wqsqdm8dv.webp)

**aof文件有三种**：![gdgf](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/21.4xum01gq2c.webp)

 
 在redis7对应配置好:
 ![ggg](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/22.6t76snt5o5.webp)

### 3.3.2AOF的重写机制
启动AOF文件的内容压缩，只保留可以恢复数据的最小指令集

**重写原理**:
1：在重写开始前，redis会创建一个“重写子进程”，这个子进程会读取现有的AOF文件，并将其包含的指令进行分析压缩并写入到一个临时文件中。

2：与此同时，主进程会将新接收到的写指令一边累积到内存缓冲区中，一边继续写入到原有的AOF文件中，这样做是保证原有的AOF文件的可用性，避免在重写过程中出现意外。

3：当“重写子进程”完成重写工作后，它会给父进程发一个信号，父进程收到信号后就会将内存中缓存的写指令追加到新AOF文件中

4：当追加结束后，redis就会用新AOF文件来代替旧AOF文件，之后再有新的写指令，就都会追加到新的AOF文件中

5：重写aof文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的aof文件，这点和快照有点类似

# 4.两者比较
在同时开启RDB和AOF时，重启时只会加在AOF不会加在RDB。

RDB能够在指定时间间隔内对数据进行快照。

AOF对服务器写的操作进行记录，当服务器重启的时候会重新执行这些命令来恢复数据，以Reids协议追加保存每次写的操作到文件末尾。

推荐使用RDB和AOF混合方式

1 开启混合方式设置

设置aof-use-rdb-preamble的值为 yes   yes表示开启，设置为no表示禁用

2 RDB+AOF的混合方式---------> 结论：RDB镜像做全量持久化，AOF做增量持久化

先使用RDB进行快照存储，然后使用AOF持久化记录所有的写操作，当重写策略满足或手动触发重写的时候，将最新的数据存储为新的RDB记录。这样的话，重启服务的时候会从RDB和AOF两部分恢复数据，既保证了数据完整性，又提高了恢复数据的性能。简单来说：混合持久化方式产生的文件一部分是RDB格式，一部分是AOF格式。**----》AOF包括了RDB头部+AOF混写**