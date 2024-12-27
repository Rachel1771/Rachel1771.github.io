# 1.Linux中的安装和启动
## 1.1 安装和解压
- 在Redis官网中下载Redis7版本压缩包后，使用XFTP软件将本地的Redis压缩包上传到服务器中的/opt目录下，一般安装包都放在/root/opt下，同时进行解压(tar -zxvf redis-7.0.0.tar.gz)
- 进入redis-7.0.0目录下，执行make && make install命令
- 默认安装路径在/root/usr/local/bin下，ll列举redis-7.0.0中的文件，有两个为redis-cli和redis-server这两个分别是客户端和服务器启动命令。
- 需要对redis.conf进行修改，但是不会直接修改源文件，需要新建一个myredis文件夹存放我们专门修改的配置文件，将redis.conf拷贝到/myredis中，同时进行配置
## 1.2配置
- 默认daemonize no 改为daemonize yes
- 默认protected-mode  yes改为protected-mode no
- 默认bind 127.0.0.1改为 直接注释掉(默认bind 127.0.0.1只能本机访问)或改成本机IP地址，否则影响远程IP连接
- 添加redis密码改为 requirepass 你自己设置的密码
- 记得重启才会有效

## 1.3 服务启动
- cd 进入/myredis目录下
- redis-server /myredis/redis.conf
- redis-cli
- 即可进入
- 也可以redis-cli -a *password*进入

## 1.4关闭
- 单实例关闭：redis-cli -a *password* shutdown
- 多实例关闭：指定端口关闭：redis-cli -p 6379 shutdown

# 2.十大数据类型
![一张图解释](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/1.5fknomi3mp.webp)

## 2.1字符串String
>string是redis最基本的类型，一个key对应一个value。string类型是二进制安全的，意思是redis的string可以包含任何数据，比如jpg图片或者序列化的对象 。string类型是Redis最基本的数据类型，一个redis中字符串value最多可以是512M

### 2.1.1常用指令
![指令](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/2.54xtvh2vhe.webp)

### 2.1.2分布式锁
- EX：Key在多少秒之后过期
- PX：Key在多少毫秒后过期
- NX：当Key不存在的时候，才创建Key，等效于setnx
- XX：当Key存在的时候，覆盖Key

### 2.1.3数值增减
**只有是数字才能进行加减**
- INCR key：递增
- INCRBY key increment：增加指定的整数
- DECR key：递减数值
- DECRBY key decrement：减少指定的整数

## 2.2 列表

>List（列表），Redis列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边），它的底层实际是个双端链表，最多可以包含 2^32 - 1 个元素 (4294967295, 每个列表超过40亿个元素)

### 2.2.1常用指令
![指令](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/3.8vmzgprqoz.webp)

一个双端链表的结构，容量是2的32次方减1个元素，大概40多亿，主要功能有push/pop等，一般用在栈、队列、消息队列等场景。left、right都可以插入添加；如果键不存在，创建新的链表；如果键已存在，新增内容；如果值全移除，对应的键也就消失了。
它的底层实际是个**双向链表，对两端的操作性能很高，通过索引下标的操作中间的节点性能会较差。**
![图](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/4.26ljryum04.webp)

## 2.3哈希
>Redis hash 是一个 string 类型的 field（字段） 和 value（值） 的映射表，hash 特别适合用于存储对象。Redis 中每个 hash 可以存储 2^32 - 1 键值对（40多亿）

### 2.3.1常用指令
![图](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/5.6m3yx87085.webp)

KV模式不变，但是V是一个键值对，Map<String,Map<Object,Object>>

## 2.4集合
>Redis 的 Set 是 String 类型的无序集合。集合成员是唯一的，这就意味着集合中不能出现重复的数据，集合对象的编码可以是 intset 或者 hashtable。Redis 中Set集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。集合中最大的成员数为 2^32 - 1 (4294967295, 每个集合可存储40多亿个成员)

### 2.4.1常用指令
![dsad](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/6.9gwn30m6zq.webp)

## 2.5有序集合
>Redis zset 和 set 一样也是string类型元素的集合,且不允许重复的成员。不同的是每个元素都会关联一个double类型的分数，redis正是通过分数来为集合中的成员进行从小到大的排序。zset的成员是唯一的,但分数(score)却可以重复。zset集合是通过哈希表实现的，所以添加，删除，查找的复杂度都是 O(1)。 集合中最大的成员数为 $2^{32} - 1$ 

### 2.5.1跟Set的区别
在Set的基础上，每个Value的值前加一个Score分数值，之前Set是K1,V1,Zset会变成K1,V1,Score1

### 2.5.2常用指令
![dasdas](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/7.9gwn30m6zr.webp)

## 2.6地理空间信息
>Redis GEO 主要用于存储地理位置信息，并对存储的信息进行操作，包括添加地理位置的坐标。获取地理位置的坐标。计算两个位置之间的距离。根据用户给定的经纬度坐标来获取指定范围内的地理位置集合

### 2.6.1简介
移动互联网时代LBS应用越来越多，交友软件中附近的小姐姐、外卖软件中附近的美食店铺、高德地图附近的核酸检查点等等，那这种附近各种形形色色的XXX地址位置选择是如何实现的？

地球上的地理位置是使用二维的经纬度表示，经度范围 (-180, 180]，纬度范围 (-90, 90]，只要我们确定一个点的经纬度就可以名取得他在地球的位置。例如滴滴打车，最直观的操作就是实时记录更新各个车的位置，然后当我们要找车时，在数据库中查找距离我们(坐标x0,y0)附近r公里范围内部的车辆

使用如下SQL即可：select taxi from position where x0-r < x < x0 + r and y0-r < y < y0+r、

但是会有如下问题：
1. 查询性能问题，如果并发高，数据量大这种查询是要搞垮数据库的
2. 这个查询的是一个矩形访问，而不是以我为中心r公里为半径的圆形访问。
3. 精准度的问题，我们知道地球不是平面坐标系，而是一个圆球，这种矩形计算在长距离计算时会有很大误差、

### 2.6.2指令
- GEOADD：多个经度、维度、位置名称添加到Key中
- GEOPOS：从键里面返回所有给定位置元素的位置
- GEODIST：返回两个给定位置之间的距离
- GEORADIUS：以给定经纬度为中心，返回与中心距离不超过给定最大距离的所有位置元素
- GEORAIUSBYMEMBER，跟上条类似
- GEOHASH：返回一个或者多个位置元素的GeoHash

## 2.7HyperLogLog

HyperLogLog 是用来做基数统计的算法，HyperLogLog 的优点是，在输入元素的数量或者体积非常非常大时，计算基数所需的空间总是固定且是很小的。

在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 2^64 个不同元素的基 数。这和计算基数时，元素越多耗费内存就越多的集合形成鲜明对比。

但是，因为 HyperLogLog 只会根据输入元素来计算基数，而不会储存输入元素本身，所以 HyperLogLog 不能像集合那样，返回输入的各个元素。

## 2.8流

Redis Stream 是 Redis 5.0 版本新增加的数据结构。

Redis Stream 主要用于消息队列（MQ，Message Queue），Redis 本身是有一个 Redis 发布订阅 (pub/sub) 来实现消息队列的功能，但它有个缺点就是消息无法持久化，如果出现网络断开、Redis 宕机等，消息就会被丢弃。 

简单来说发布订阅 (pub/sub) 可以分发消息，但无法记录历史消息。

而 Redis Stream 提供了消息的持久化和主备复制功能，可以让任何客户端访问任何时刻的数据，并且能记住每一个客户端的访问位置，还能保证消息不丢失。

### 2.8.1是什么
一句话总结就是Redis版本的MQ消息中间件+阻塞队列。

实现消息队列，支持消息的持久化，支持自动生成全局唯一 ID，支持ACK确认消息模式，支持消费组模式，让消息队列更加稳定和可靠。

![dsadas](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/8.8z6lefktev.webp)

**看起来就是一个消息链表，将所有的消息都串起来，每个消息都有一个唯一的ID和对应的内容** 

|   |   |   |
|---|---|---|
|1|Message Content|消息内容|
|2|Consumer group|消费组，通过XGROUP CREATE 命令创建，同一个消费组可以有多个消费者|
|3|Last_delivered_id|游标，每个消费组会有个游标 last_delivered_id，任意一个消费者读取了消息都会使游标 last_delivered_id 往前移动。|
|4|Consumer|消费者，消费组中的消费者|
|5|Pending_ids|消费者会有一个状态变量，用于记录被当前消费已读取但未ack的消息Id，如果客户端没有ack，这个变量里面的消息ID会越来越多，一旦某个消息被ack它就开始减少。这个pending_ids变量在Redis官方被称之为 PEL(Pending Entries List)，记录了当前已经被客户端读取的消息，但是还没有 ack (Acknowledge character：确认字符），它用来确保客户端至少消费了消息一次，而不会在网络传输的中途丢|
### 2.8.2相关指令

**队列相关指令**
![fasfdgfdgrd](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/9.5tr3fhqei0.webp)

**消费组相关指令**
![gfhh](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/10.92q7c5dw4p.webp)

*具体实例参见脑图*
