# 2-Docker安装MySql

:::tips

:dancer: 本次在服务器中尝试使用Docker安装Mysql，记录遇到的问题及操作步骤

感谢[Linux服务器开发](https://linuxcpp.0voice.com/?id=188547)

:::

## 1.拉取镜像

```shell 
docker pull mysql:5.7
docker pull ` 服务器镜像 `/mysql:5.7
```

直接执行`docker pull mysql:5.7` 会遇到问题：

```shell
[root@huabao-mes ~]# docker pull mysql:5.7
Error response from daemon: Get https://registry-1.docker.io/v2/: net/http: request canceled while waiting for connection (Client.Timeout exceeded while awaiting headers)
```

刚开始以为是镜像源的问题，配置了文件：**`/etc/docker/daemon.json`**中的镜像：

```shell
{
    "registry-mirrors": [
    "https://0dj0t5fb.mirror.aliyuncs.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://6kx4zyno.mirror.aliyuncs.com",
    "https://registry.docker-cn.com"
    ]
}
```

依然没有效果`Error response from daemon: Get https://registry-1.docker.io/v2/: x509: certificate signed by unknown authority`

考虑是**Docker 客户端无法验证 Docker Hub 的证书，通常是由于系统缺少可信的根证书或系统时间不正确导致的**？

暂时无法解决上述问题，修改配置**`/etc/docker/daemon.json`**：

![image-20250411135159220](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250411135159220.png)

```shell
{
    "registry-mirrors": ["https://b9kmpyno.mirror.aliyuncs.com"],
    "insecure-registries":["服务器镜像"],
    "log-driver":"json-file",
    "log-opts": {"max-size":"100m", "max-file":"20"}
}
```

新增insecure-registries后使用`docker pull ` 服务器镜像 `/mysql:5.7`指令成功拉取。

这是因为：`insecure-registries`是Docker配置文件中的一个选项，用于指定允许使用不安全的HTTP连接访问的镜像仓库。默认情况下，Docker只允许使用HTTPS协议（安全连接）来拉取和推送镜像。

::: warning

:waning_crescent_moon: 请注意，使用不安全的HTTP连接可能存在安全风险，请确保你信任和控制所访问的私有镜像仓库。另外，在实际生产环境中，建议尽量采用HTTPS协议或其他更安全的通信方式来保护镜像传输过程中的数据安全性。

**服务器镜像为内部服务器提供的镜像**

:::

## 2.映射目录

在 Docker 中运行 MySQL 时，映射本地目录到容器内，可以实现 **配置持久化** 和 **数据持久化**。

两个目录：

- /data/docker/mysql/conf
- /data/docker/mysql/data

在conf目录下新建 my.cnf 设置数据库字符编码：

![image-20250411135107795](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250411135107795.png)

```shell
[client] 
default_character_set=utf8 
[mysqld] 
collation_server = utf8_general_ci 
character_set_server = utf8
sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION'
```

## 3.Docker启动Mysql

进入目录：`cd /data/docker/mysql`

运行命令：

```shell
docker run -d -p 3306:3306  --restart=always  --privileged=true  -v $PWD/conf:/etc/mysql/conf.d -v $PWD/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=密码 --name topband-mysql 服务器镜像/mysql:5.7 --character-set-server=utf8mb4  --collation-server=utf8mb4_general_ci
```

解释说明：

```shell
docker run -d \                  # 后台运行容器（detached 模式）
  -p 3306:3306 \                 # 端口映射（主机3306 → 容器3306）
  --restart=always \             # 容器退出时自动重启
  --privileged=true \            # 赋予容器特权模式（访问主机设备）
  -v $PWD/conf:/etc/mysql/conf.d \  # 挂载主机conf目录到容器MySQL配置目录
  -v $PWD/data:/var/lib/mysql \  # 挂载主机data目录到容器数据存储目录
  -e MYSQL_ROOT_PASSWORD=密码 \ # 设置MySQL root用户密码
  --name topband-mysql \         # 指定容器名称
  服务器镜像/mysql:5.7 \ # 使用的镜像（私有仓库的MySQL 5.7）
  --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci  # MySQL启动参数
```

查看容器`docker ps -a`，重启MySql`docker restart topband-mysql`；

进入容器`docker exec -it topband-mysql /bin/bash；`

登陆数据库`mysql -uroot -p密码`；

查看下配置`show variables like 'character%'`

![image-20250411140425515](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250411140425515.png)

退出MySql`exit`;