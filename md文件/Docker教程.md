# Docker教程



### 文章目录

- - [Docker快速入门教程](https://blog.csdn.net/hellozpc/article/details/86100099#Docker_0)

  - - [1.教程大纲](https://blog.csdn.net/hellozpc/article/details/86100099#1_15)

    - - [1、了解Docker](https://blog.csdn.net/hellozpc/article/details/86100099#1Docker_16)
      - [2、安装Docker](https://blog.csdn.net/hellozpc/article/details/86100099#2Docker_17)
      - [3、学习Docker的三大组件:镜像、容器、仓库](https://blog.csdn.net/hellozpc/article/details/86100099#3Docker_18)
      - [4、学习Docker的数据管理](https://blog.csdn.net/hellozpc/article/details/86100099#4Docker_19)
      - [5、学习如何构建镜像](https://blog.csdn.net/hellozpc/article/details/86100099#5_20)
      - [6、使用Docker部署微服务項目](https://blog.csdn.net/hellozpc/article/details/86100099#6Docker_21)

    - [2.了解docker](https://blog.csdn.net/hellozpc/article/details/86100099#2docker_22)

    - - [2.1.思考](https://blog.csdn.net/hellozpc/article/details/86100099#21_23)
      - [2.2.Docker简介](https://blog.csdn.net/hellozpc/article/details/86100099#22Docker_39)
      - [2.3.虚拟化和docker的对比](https://blog.csdn.net/hellozpc/article/details/86100099#23docker_44)
      - [2.4.为什么要使用docker？](https://blog.csdn.net/hellozpc/article/details/86100099#24docker_51)
      - [2.5.架构](https://blog.csdn.net/hellozpc/article/details/86100099#25_53)

    - [3.安装docker](https://blog.csdn.net/hellozpc/article/details/86100099#3docker_76)

    - - [3.1.centos7](https://blog.csdn.net/hellozpc/article/details/86100099#31centos7_80)
      - [3.2.Ubuntu 16](https://blog.csdn.net/hellozpc/article/details/86100099#32Ubuntu_16_133)

    - [4.镜像](https://blog.csdn.net/hellozpc/article/details/86100099#4_135)

    - - [4.1.介绍](https://blog.csdn.net/hellozpc/article/details/86100099#41_136)
      - [4.2.获取镜像](https://blog.csdn.net/hellozpc/article/details/86100099#42_138)
      - [4.3.镜像加速](https://blog.csdn.net/hellozpc/article/details/86100099#43_160)
      - [4.4.查询本地镜像](https://blog.csdn.net/hellozpc/article/details/86100099#44_219)
      - [4.5.删除镜像](https://blog.csdn.net/hellozpc/article/details/86100099#45_222)
      - [4.6.搜索镜像](https://blog.csdn.net/hellozpc/article/details/86100099#46_228)

    - [5.容器](https://blog.csdn.net/hellozpc/article/details/86100099#5_233)

    - - [5.1.介绍](https://blog.csdn.net/hellozpc/article/details/86100099#51_234)

      - [5.2.查看容器列表](https://blog.csdn.net/hellozpc/article/details/86100099#52_236)

      - [5.3.创建容器](https://blog.csdn.net/hellozpc/article/details/86100099#53_243)

      - - [5.3.1.案例](https://blog.csdn.net/hellozpc/article/details/86100099#531_339)

      - [5.4.创建并且运行容器](https://blog.csdn.net/hellozpc/article/details/86100099#54_362)

      - - [5.4.1.案例](https://blog.csdn.net/hellozpc/article/details/86100099#541_463)

      - [5.5.启动/停止容器](https://blog.csdn.net/hellozpc/article/details/86100099#55_494)

      - - [5.5.1.启动容器](https://blog.csdn.net/hellozpc/article/details/86100099#551_495)
        - [5.5.2.停止容器](https://blog.csdn.net/hellozpc/article/details/86100099#552_510)

      - [5.6.删除容器](https://blog.csdn.net/hellozpc/article/details/86100099#56_537)

      - [5.7.进入容器](https://blog.csdn.net/hellozpc/article/details/86100099#57_558)

      - [5.8.查看日志](https://blog.csdn.net/hellozpc/article/details/86100099#58_584)

    - [6.仓库](https://blog.csdn.net/hellozpc/article/details/86100099#6_590)

    - - [6.1.阿里云仓库](https://blog.csdn.net/hellozpc/article/details/86100099#61_593)
      - [6.2.案例：推送redis镜像到阿里云仓库](https://blog.csdn.net/hellozpc/article/details/86100099#62redis_607)
      - [6.3.案例：推送镜像到内网私服](https://blog.csdn.net/hellozpc/article/details/86100099#63_634)

    - [7.数据管理](https://blog.csdn.net/hellozpc/article/details/86100099#7_660)

    - - [7.1.数据卷](https://blog.csdn.net/hellozpc/article/details/86100099#71_668)
      - [7.2.案例-MySQL数据同步](https://blog.csdn.net/hellozpc/article/details/86100099#72MySQL_671)

    - [8.构建镜像](https://blog.csdn.net/hellozpc/article/details/86100099#8_710)

    - - [8.1.Dockerfile文件](https://blog.csdn.net/hellozpc/article/details/86100099#81Dockerfile_716)
      - [8.2.命令详解（13个命令）](https://blog.csdn.net/hellozpc/article/details/86100099#8213_736)
      - [8.3.实战：自己构建redis镜像](https://blog.csdn.net/hellozpc/article/details/86100099#83redis_763)

    - [9.部署微服务项目](https://blog.csdn.net/hellozpc/article/details/86100099#9_825)



### 1.教程大纲

#### 1、了解Docker

#### 2、安装Docker

#### 3、学习Docker的三大组件:镜像、容器、仓库

#### 4、学习Docker的数据管理

#### 5、学习如何构建镜像

#### 6、使用Docker部署微服务項目

### 2.了解docker

#### 2.1.思考

我们一般是如何将项目发布到Linux服务器的？
大致步骤如下：
1、在linux服务器上安装jdk
2、安装tomcat
3、将项目war包上传到tomcat的webapps下
4、修改配置文件
5、启动tomcat

这样看似没问题，其实我们想想，发一台机器还好，这几步就完成了，如果我们要将这个项目发布到N多台机器，那么我们是否需要在每个机器上都进行相同的步骤，并且要进行环境兼容性的测试。

再来看一个例子，我们现在想部署使用一个成熟的产品，这个产品是用go语言开发的，我该如何部署？go语言运行的环境怎么装？这个项目又该如何部署？

还有，一台linux机器上装了很多软件，部署了很多项目，相互之间有干扰怎么办？

如果有一项技术，可以解决以上问题或者是更多的问题，是不是很爽？ 那就是Docker（容器）技术。

#### 2.2.Docker简介

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203436343.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
官网：https://www.docker.com/

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203443150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 2.3.虚拟化和docker的对比

虚拟化：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203447509.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

docker：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203451990.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
docker的优势在于可以直接使用主机(也叫宿主机)操作系统的资源进行虚拟化。

#### 2.4.为什么要使用docker？

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011320350836.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 2.5.架构

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203517528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

- Docker daemon（Docker进程）
  Docker进程是部署在linux操作系统上，负责支撑Docker Container（docker容器）的运行以及本地Image（镜像）的管理。
- Docker client
  用户不直接操作Docker daemon，用户通过Docker client访问Docker，Docker client提供pull、run等操作命令。
- Docker Image
  Docker 镜像就是一个只读的模板。
  例如：一个镜像可以包含一个完整的 ubuntu 操作系统环境，里面仅安装了 Apache 或用户需要的其它应用程序。
  镜像可以用来创建 Docker 容器。
  Docker 提供了一个很简单的机制来创建镜像或者更新现有的镜像，用户甚至可以直接从其他人那里下载一个已经做好的镜像来直接使用。
- Docker Container
  Docker 利用容器来运行应用。容器(Container)是从镜像(Image)创建的运行实例(好比java对象是由java类实例化而来)。它可以被启动、开始、停止、删除。每个容器都是相互隔离的、保证安全的平台。可以把容器看做是一个简易版的 Linux 环境（包括root用户权限、进程空间、用户空间和网络空间等）和运行在其中的应用程序。
- Docker Registry
  仓库分为公开仓库（Public）和私有仓库（Private）两种形式
  最大的公开仓库是 [Docker Hub](https://hub.docker.com/)，存放了数量庞大的镜像供用户下载。
  用户也可以在本地局域网内创建一个私有仓库(类似maven私服)。
  当用户创建了自己的镜像之后就可以使用 push 命令将它上传到公有或者私有仓库，这样下次在另外一台机器上使用这个镜像时候，只需要从仓库上 pull 下来就可以了。

### 3.安装docker

我们可以在Centos或者Ubuntu下安装docker，要注意的是，centos6对docker支持的不好，使用docker建议升级到centos7。

docker官方建议使用Ubuntu系统，兼容性更好一些。所以，本教程使用`centOS7`(内核3.10及以上)系统来学习docker。

#### 3.1.centos7

安装：
1）通过 uname -r 命令查看你当前的内核版本（3.10及以上）：
[root@localhost ~]# uname -r
3.10.0-957.1.3.el7.x86_64

2）直接通过yum安装即可：
（如果缺少依赖的话先使用yum -y update联网更新系统）

yum install -y docker

```
[root@localhost ~]# yum install -y docker
已加载插件：fastestmirror
Loading mirror speeds from cached hostfile
 * base: mirrors.nju.edu.cn
 * extras: mirrors.nju.edu.cn
 * updates: mirrors.nju.edu.cn
正在解决依赖关系
依赖关系解决

=============================================================================================================================================================
 Package                                               架构                  版本                                               源                      大小
=============================================================================================================================================================
正在安装:
 docker                                                x86_64                2:1.13.1-88.git07f3374.el7.centos                  extras                  17 M
为依赖而安装:

完毕！


12345678910111213141516171819
```

3）验证安装是否成功
docker version
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203755737.png)

有client和server两部分表示docker安装/启动都成功了。上图仅表示安装成功！
启动docker：systemctl start docker
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203800227.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
安装启动都成功！
还可以加入开机启动：systemctl enable docker

卸载：
卸载之前先停止docker: systemctl stop docker
1）检查安装过的包
[root@localhost ~]# yum list installed | grep docker
containerd.io.x86_64 1.2.0-3.el7 @docker-ce-stable
docker-ce-cli.x86_64 1:18.09.0-3.el7 @docker-ce-stable
2）删除安装的软件包
[root@localhost ~]# yum -y remove containerd.io.x86_64
3）删除镜像/容器等
rm -rf /var/lib/docker

#### 3.2.Ubuntu 16

apt install docker.io -y

### 4.镜像

#### 4.1.介绍

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011320381957.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 4.2.获取镜像

获取镜像通过命令，docker pull 完成：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203823977.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

案例：获取Redis 4.0的镜像。
第一步，需要到远程的仓库进行搜索：
https://hub.docker.com/

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203829684.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203926150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
点击查看详情，查看tag：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203929841.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

找到我们想要的4.0.0，最新的tag可以用latest标识：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203933834.png)

执行命令：
docker pull redis:4.0
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203938634.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
通过docker images查看镜像：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203942116.png)

#### 4.3.镜像加速

可以发现在国内通过docker官方的仓库进行下载镜像是比较慢，这个时候就需要使用加速器了。

阿里云、163都提供了docker仓库，但是阿里云还提供了加速功能。所以，我们选用阿里云的加速。 163的仓库地址：https://c.163.com/hub#/m/home/

使用阿里云器，需要到阿里云进行注册，获取到自己专属的加速地址，当然也可以使用我的加速地址。（使用加速是无需登录的，所以可以公用）

第一步，打开阿里云网站，点击控制台：
https://www.aliyun.com/
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203947610.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

第二步，进行登录，如果没有账号就先注册个账号，登录成功后会跳转到控制台页面，找到“容器服务”：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113203958259.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
第三步，点击“镜像”：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204003341.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
就可以看到有很多的镜像了：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204010370.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
第四步，点击右上角的“容器镜像服务控制台”，进入后然后点击“镜像加速器”：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204016365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
就可以看到你的专属加速地址了。

下面是使用加速地址的方法：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204021160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
我们采用第2种方法：
执行如下linux命令

```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://ponng7pv.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
12345678
```

再获取镜像时发现快多了：

```
[root@localhost ~]# docker pull redis:4.0
Trying to pull repository docker.io/library/redis ... 
4.0: Pulling from docker.io/library/redis
177e7ef0df69: Pull complete 
66ec699db42d: Pull complete 
9af6d87fd347: Pull complete 
62d170e11208: Pull complete 
11090682e442: Pull complete 
e082801d238e: Pull complete 
Digest: sha256:a471807cc636a02d8be3959a52dd7262a83ce6351be19605ce17d5da06c42f1d
Status: Downloaded newer image for docker.io/redis:4.0
1234567891011
```

在阿里云搜索镜像：
https://cr.console.aliyun.com/cn-hangzhou/images
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204111251.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

案例：下载rabbitmq的镜像：
docker pull rabbitmq:3.6.12
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204115857.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
下载完成。

#### 4.4.查询本地镜像

使用docker images 可以看到本地的镜像列表：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204149710.png)

#### 4.5.删除镜像

删除镜像通过命令docker rmi 镜像id完成，需要注意的是，删除镜像前，要删除所有使用到该镜像的容器。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204157127.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

-f参数是强制删除，如果有正在运行的容器使用了该镜像，那么该镜像是不会真正的删除的。

#### 4.6.搜索镜像

刚刚我们是通过网页进行搜索，其实用过docker的命令也可以搜索，具体如下：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204202669.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

### 5.容器

#### 5.1.介绍

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204207874.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 5.2.查看容器列表

通过docker ps命令查看正在运行的容器列表，需要查询所有的容器需要加-a参数：

docker ps
docker ps -a
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204212332.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 5.3.创建容器

通过docker create 命令可以创建一个容器，这仅仅是创建，并没有启动容器。

用法：

```
[root@localhost ~]# docker create --help

Usage:	docker create [OPTIONS] IMAGE [COMMAND] [ARG...]

Create a new container

Options:
      --add-host value              Add a custom host-to-IP mapping (host:ip) (default [])
  -a, --attach value                Attach to STDIN, STDOUT or STDERR (default [])
      --blkio-weight value          Block IO (relative weight), between 10 and 1000
      --blkio-weight-device value   Block IO weight (relative device weight) (default [])
      --cap-add value               Add Linux capabilities (default [])
      --cap-drop value              Drop Linux capabilities (default [])
      --cgroup-parent string        Optional parent cgroup for the container
      --cidfile string              Write the container ID to the file
      --cpu-percent int             CPU percent (Windows only)
      --cpu-period int              Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int               Limit CPU CFS (Completely Fair Scheduler) quota
  -c, --cpu-shares int              CPU shares (relative weight)
      --cpuset-cpus string          CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string          MEMs in which to allow execution (0-3, 0,1)
      --device value                Add a host device to the container (default [])
      --device-read-bps value       Limit read rate (bytes per second) from a device (default [])
      --device-read-iops value      Limit read rate (IO per second) from a device (default [])
      --device-write-bps value      Limit write rate (bytes per second) to a device (default [])
      --device-write-iops value     Limit write rate (IO per second) to a device (default [])
      --disable-content-trust       Skip image verification (default true)
      --dns value                   Set custom DNS servers (default [])
      --dns-opt value               Set DNS options (default [])
      --dns-search value            Set custom DNS search domains (default [])
      --entrypoint string           Overwrite the default ENTRYPOINT of the image
  -e, --env value                   Set environment variables (default [])
      --env-file value              Read in a file of environment variables (default [])
      --expose value                Expose a port or a range of ports (default [])
      --group-add value             Add additional groups to join (default [])
      --health-cmd string           Command to run to check health
      --health-interval duration    Time between running the check
      --health-retries int          Consecutive failures needed to report unhealthy
      --health-timeout duration     Maximum time to allow one check to run
      --help                        Print usage
  -h, --hostname string             Container host name
  -i, --interactive                 Keep STDIN open even if not attached 打开容器的标准输入
      --io-maxbandwidth string      Maximum IO bandwidth limit for the system drive (Windows only)
      --io-maxiops uint             Maximum IOps limit for the system drive (Windows only)
      --ip string                   Container IPv4 address (e.g. 172.30.100.104)
      --ip6 string                  Container IPv6 address (e.g. 2001:db8::33)
      --ipc string                  IPC namespace to use
      --isolation string            Container isolation technology
      --kernel-memory string        Kernel memory limit
  -l, --label value                 Set meta data on a container (default [])
      --label-file value            Read in a line delimited file of labels (default [])
      --link value                  Add link to another container (default [])
      --link-local-ip value         Container IPv4/IPv6 link-local addresses (default [])
      --log-driver string           Logging driver for the container
      --log-opt value               Log driver options (default [])
      --mac-address string          Container MAC address (e.g. 92:d0:c6:0a:29:33)
  -m, --memory string               Memory limit
      --memory-reservation string   Memory soft limit
      --memory-swap string          Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --memory-swappiness int       Tune container memory swappiness (0 to 100) (default -1)
      --name string                 Assign a name to the container  指定容器的名称
      --network string              Connect a container to a network (default "default")
      --network-alias value         Add network-scoped alias for the container (default [])
      --no-healthcheck              Disable any container-specified HEALTHCHECK
      --oom-kill-disable            Disable OOM Killer
      --oom-score-adj int           Tune host's OOM preferences (-1000 to 1000)
      --pid string                  PID namespace to use
      --pids-limit int              Tune container pids limit (set -1 for unlimited)
      --privileged                  Give extended privileges to this container
  -p, --publish value               Publish a container's port(s) to the host (default []) 
		  指定端口，如：docker create -p 16399:6379 redis:3.0，其中16399是主机端口，6379是容器对外端口，二者对应起来
  -P, --publish-all                 Publish all exposed ports to random ports 映射一个随机端口
      --read-only                   Mount the container's root filesystem as read only
      --restart string              Restart policy to apply when a container exits (default "no")
      --runtime string              Runtime to use for this container
      --security-opt value          Security Options (default [])
      --shm-size string             Size of /dev/shm, default value is 64MB
      --stop-signal string          Signal to stop a container, SIGTERM by default (default "SIGTERM")
      --storage-opt value           Storage driver options for the container (default [])
      --sysctl value                Sysctl options (default map[])
      --tmpfs value                 Mount a tmpfs directory (default [])
  -t, --tty                         Allocate a pseudo-TTY 让Docker分配一个伪端（pseudo-tt）并绑定到容器的标准输入上
      --ulimit value                Ulimit options (default [])
  -u, --user string                 Username or UID (format: <name|uid>[:<group|gid>])
      --userns string               User namespace to use
      --uts string                  UTS namespace to use
  -v, --volume value                Bind mount a volume (default [])
      --volume-driver string        Optional volume driver for the container
      --volumes-from value          Mount volumes from the specified container(s) (default [])
  -w, --workdir string              Working directory inside the container
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990
```

##### 5.3.1.案例

案例：创建Redis的容器。

docker create -p 16379:6379 --name redis redis:4.0
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204245731.png)
创建容器时如果没有本地镜像，则会自动从中央仓库下载：
[root@localhost ~]# docker create -p 16379:6379 --name redis redis:3.0
Unable to find image ‘redis:3.0’ locally
Trying to pull repository docker.io/library/redis …

查看容器列表：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204250728.png)

启动容器：
docker start 2d4d #指定容器的id，只要输入前几位(能够唯一标识某个容器)即可
docker ps 查看正在运行的容器
docker ps -a 查看所有容器
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204323977.png)

通过客户端进行测试：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204328356.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204345421.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
至此，第一个docker容器就创建并且已经启动可用了。

#### 5.4.创建并且运行容器

上面通过docker create创建了容器，然后通过docker start来启动容器，其实这种做法并不常用。

更常用的是docker run命令，这个命令的意思是创建并且启动容器。

用法：

```
[root@localhost ~]# docker run --help

Usage:	docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container  在一个新容器中运行一个命令。

Options:
      --add-host value              Add a custom host-to-IP mapping (host:ip) (default [])
  -a, --attach value                Attach to STDIN, STDOUT or STDERR (default [])
      --blkio-weight value          Block IO (relative weight), between 10 and 1000
      --blkio-weight-device value   Block IO weight (relative device weight) (default [])
      --cap-add value               Add Linux capabilities (default [])
      --cap-drop value              Drop Linux capabilities (default [])
      --cgroup-parent string        Optional parent cgroup for the container
      --cidfile string              Write the container ID to the file
      --cpu-percent int             CPU percent (Windows only)
      --cpu-period int              Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int               Limit CPU CFS (Completely Fair Scheduler) quota
  -c, --cpu-shares int              CPU shares (relative weight)
      --cpuset-cpus string          CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string          MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                      Run container in background and print container ID 让容器在后台运行
      --detach-keys string          Override the key sequence for detaching a container
      --device value                Add a host device to the container (default [])
      --device-read-bps value       Limit read rate (bytes per second) from a device (default [])
      --device-read-iops value      Limit read rate (IO per second) from a device (default [])
      --device-write-bps value      Limit write rate (bytes per second) to a device (default [])
      --device-write-iops value     Limit write rate (IO per second) to a device (default [])
      --disable-content-trust       Skip image verification (default true)
      --dns value                   Set custom DNS servers (default [])
      --dns-opt value               Set DNS options (default [])
      --dns-search value            Set custom DNS search domains (default [])
      --entrypoint string           Overwrite the default ENTRYPOINT of the image
  -e, --env value                   Set environment variables (default [])
      --env-file value              Read in a file of environment variables (default [])
      --expose value                Expose a port or a range of ports (default [])
      --group-add value             Add additional groups to join (default [])
      --health-cmd string           Command to run to check health
      --health-interval duration    Time between running the check
      --health-retries int          Consecutive failures needed to report unhealthy
      --health-timeout duration     Maximum time to allow one check to run
      --help                        Print usage
  -h, --hostname string             Container host name
  -i, --interactive                 Keep STDIN open even if not attached
      --io-maxbandwidth string      Maximum IO bandwidth limit for the system drive (Windows only)
      --io-maxiops uint             Maximum IOps limit for the system drive (Windows only)
      --ip string                   Container IPv4 address (e.g. 172.30.100.104)
      --ip6 string                  Container IPv6 address (e.g. 2001:db8::33)
      --ipc string                  IPC namespace to use
      --isolation string            Container isolation technology
      --kernel-memory string        Kernel memory limit
  -l, --label value                 Set meta data on a container (default [])
      --label-file value            Read in a line delimited file of labels (default [])
      --link value                  Add link to another container (default [])
      --link-local-ip value         Container IPv4/IPv6 link-local addresses (default [])
      --log-driver string           Logging driver for the container
      --log-opt value               Log driver options (default [])
      --mac-address string          Container MAC address (e.g. 92:d0:c6:0a:29:33)
  -m, --memory string               Memory limit
      --memory-reservation string   Memory soft limit
      --memory-swap string          Swap limit equal to memory plus swap: '-1' to enable unlimited swap
      --memory-swappiness int       Tune container memory swappiness (0 to 100) (default -1)
      --name string                 Assign a name to the container
      --network string              Connect a container to a network (default "default")
      --network-alias value         Add network-scoped alias for the container (default [])
      --no-healthcheck              Disable any container-specified HEALTHCHECK
      --oom-kill-disable            Disable OOM Killer
      --oom-score-adj int           Tune host's OOM preferences (-1000 to 1000)
      --pid string                  PID namespace to use
      --pids-limit int              Tune container pids limit (set -1 for unlimited)
      --privileged                  Give extended privileges to this container
  -p, --publish value               Publish a container's port(s) to the host (default [])
  -P, --publish-all                 Publish all exposed ports to random ports
      --read-only                   Mount the container's root filesystem as read only
      --restart string              Restart policy to apply when a container exits (default "no")
      --rm                          Automatically remove the container when it exits
      --runtime string              Runtime to use for this container
      --security-opt value          Security Options (default [])
      --shm-size string             Size of /dev/shm, default value is 64MB
      --sig-proxy                   Proxy received signals to the process (default true)
      --stop-signal string          Signal to stop a container, SIGTERM by default (default "SIGTERM")
      --storage-opt value           Storage driver options for the container (default [])
      --sysctl value                Sysctl options (default map[])
      --tmpfs value                 Mount a tmpfs directory (default [])
  -t, --tty                         Allocate a pseudo-TTY
      --ulimit value                Ulimit options (default [])
  -u, --user string                 Username or UID (format: <name|uid>[:<group|gid>])
      --userns string               User namespace to use
      --uts string                  UTS namespace to use
  -v, --volume value                Bind mount a volume (default [])
      --volume-driver string        Optional volume driver for the container
      --volumes-from value          Mount volumes from the specified container(s) (default [])
  -w, --workdir string              Working directory inside the container
123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293
```

##### 5.4.1.案例

创建并且运行一个redis容器，它的端口是16380。

docker run -p 16380:6379 --name redis2 redis:4.0
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204413856.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

发现，这个容器已经创建并且运行，但是，它并没有在后台运行，当按下 ctrl + c时，该容器将停止。

为了让容器在后台运行，需要添加参数 -d。

docker run -p 16380:6379 -d --name redis2 redis:4.0
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204420386.png)
报错，说redis2这个名字的容器已经存在，需要我们删除07d的容器或者给新容器重命名。我们重命名试试。

docker run -p 16380:6379 -d --name redis3 redis:4.0
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204427411.png)
已经创建成功。

进行测试：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204432163.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204439843.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
测试结果显示，该容器可用。

接下来，我看下当前运行的容器：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204445814.png)
可以看到，有3个redis的容器，并且名为redis2的容器已经退出，并没有运行。

那么问题来了，redis2这个容器我不想要了，怎么删除？

#### 5.5.启动/停止容器

##### 5.5.1.启动容器

```
[root@localhost ~]# docker start --help

Usage:	docker start [OPTIONS] CONTAINER [CONTAINER...]

Start one or more stopped containers

Options:
  -a, --attach               Attach STDOUT/STDERR and forward signals
      --detach-keys string   Override the key sequence for detaching a container
      --help                 Print usage
  -i, --interactive          Attach container's STDIN
1234567891011
```

用法：docker start 容器名或容器id

##### 5.5.2.停止容器

停止容器有2种方式：
1、docker stop 容器名或容器id
2、docker kill 容器名或容器id

```
[root@localhost ~]# docker stop --help

Usage:	docker stop [OPTIONS] CONTAINER [CONTAINER...]

Stop one or more running containers

Options:
      --help       Print usage
  -t, --time int   Seconds to wait for stop before killing it (default 10)

[root@localhost ~]# docker kill --help

Usage:	docker kill [OPTIONS] CONTAINER [CONTAINER...]

Kill one or more running containers

Options:
      --help            Print usage
  -s, --signal string   Signal to send to the container (default "KILL")
12345678910111213141516171819
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011320451981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 5.6.删除容器

通过命令docker rm 删除容器，删除正在运行的容器添加 -f 参数。

```
[root@localhost ~]#  docker rm --help

Usage:	docker rm [OPTIONS] CONTAINER [CONTAINER...]

Remove one or more containers

Options:
  -f, --force     Force the removal of a running container (uses SIGKILL)
      --help      Print usage
  -l, --link      Remove the specified link
  -v, --volumes   Remove the volumes associated with the container
1234567891011
```

案例：
docker rm redis2

删除名为redis2的容器。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204535586.png)

#### 5.7.进入容器

有些时候我们需要进入容器内，做一些操作，比如，修改配置文件等。

进入容器，通过命令 docker exec 完成。

```
[root@localhost ~]# docker exec --help

Usage:	docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

Run a command in a running container

  -d, --detach         Detached mode: run command in the background
  --detach-keys        Override the key sequence for detaching a container
  --help               Print usage
  -i, --interactive    Keep STDIN open even if not attached
  --privileged         Give extended privileges to the command
  -t, --tty            Allocate a pseudo-TTY
  -u, --user           Username or UID (format: <name|uid>[:<group|gid>])
12345678910111213
```

案例：进入redis容器，。

docker exec -it redis /bin/bash
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204653293.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

ctrl + d 退出容器。或者输入exit

#### 5.8.查看日志

通过命令docker logs -f 容器名或id
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204700136.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204704285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

### 6.仓库

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204708563.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 6.1.阿里云仓库

阿里云既提供了加速功能，也提供了仓库功能，也就是我们可以将自己的镜像上传到阿里云仓库。

https://cr.console.aliyun.com/#/imageList

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204712956.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
创建命名空间：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204717483.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

创建镜像：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204721744.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204726274.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011320473187.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
创建完成后就可以上传镜像到该仓库了。

#### 6.2.案例：推送redis镜像到阿里云仓库

第一步，在阿里云仓库创建myredis01镜像库：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019011320473662.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204740407.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
第二步，在docker中进行登录：
首先要设置仓库的密码(不是登录阿里云网站的密码哦)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204745275.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

执行登录操作：
sudo docker login --username=374741295@qq.com registry.cn-hangzhou.aliyuncs.com
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204754841.png)

第三步，给镜像打tag：
sudo docker tag [ImageId] registry.cn-hangzhou.aliyuncs.com/niaopeng/myredis01:[镜像版本号]
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204758555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

第四步，推送镜像到阿里云：
sudo docker push registry.cn-hangzhou.aliyuncs.com/niaopeng/myredis01:[镜像版本号]
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204802495.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

第五步，在阿里云查看：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204806536.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
接下来，将本地仓库中的redis镜像删除，从阿里云拉取镜像到本地。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204810617.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204814676.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 6.3.案例：推送镜像到内网私服

内网私服地址：http://192.168.50.33:8081/ 或 https://192.168.50.33:8443/
账户：niaopeng/ 123456
仓库地址：https://192.168.50.33:8443/repository/niaopeng/ 需要注意的是，仓库的端口是18443，而不是8443，在创建仓库时指定。

docker进行推送镜像时只能使用https协议，所以，我们需要将证书导入到系统。

上传证书到/tmp下面
cp /tmp/nexus.crt /usr/local/share/ca-certificates
sudo update-ca-certificates
service docker restart

接下来，进行测试：
\#使用docker登录到私服
docker login 192.168.50.33:18443
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204825544.png)

\#打tag
docker tag percona:5.6 192.168.50.33:18443/percona:5.6

\#推送镜像到私服
docker push 192.168.50.33:18443/percona:5.6
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204829798.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204837492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

### 7.数据管理

容器在运行项目时会产生数据，比如运行的mysql容器，那么一定会有数据的产生，那么问题来了，数据是保存在容器内部还是保存在外部？

如果将数据保存在内部，那么也就意味着我们改变了原有镜像，这种做法是不可取的，因为在后期的镜像升级将变得不可能了。
也就是说，运行的镜像，最好不要改变，如果必须改变的（比如说，修改配置文件等），在改变后记得commit提交打成一个新的镜像。

显然，数据是应该保存在容器的外部，也就是说保存在主机上。那么问题又来了，数据保存在主机上，那么容器该如何读取主机中的数据呢？

#### 7.1.数据卷

在create或者run容器时，可以通过-v参数指定主机的目录，挂载到容器中的某一个目录上，这样，容器就在这个目录读写数据了。从而实现了容器和数据的分离。

#### 7.2.案例-MySQL数据同步

运行mysql容器，将mysql的数据放到主机的/data/mysql-data中。

第一步，下载mysql的镜像：

docker pull mysql:5.7
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204843971.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

第二步，创建容器：
docker create --name mysql3308 -v /data/mysql-data:/var/lib/mysql -p 3308:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204849789.png)
解释：
–name mysql3308 指定是容器的名称
-v /data/mysql-data:/var/lib/mysql 将主机目录/data/mysql-data挂载到容器的/var/lib/mysql上
-p 3308:3306 设置端口映射，主机端口是3308，容器内部端口3306
-e MYSQL_ROOT_PASSWORD=root 设置容器参数，设置root用户的密码为root
mysql:5.7 镜像名:版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204855391.png)

第三步，启动容器：
docker start mysql3308

如果启动失败，可能是由于权限问题，解决方法：
创建容器时加上 --privileged=true

docker rm mysql3308
docker create --name mysql3308 --privileged=true -v /data/mysql-data:/var/lib/mysql -p 3308:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7
docker start mysql3308

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204900489.png)

第四步，进行测试：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204904881.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204910628.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
查看主机的/data/mysql-data:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204917904.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

### 8.构建镜像

前面我们的学习都是直接从仓库中拉取镜像，然后创建容器，最后启动容器来使用的（当然也可以直接使用run命令，会默认先下载镜像，创建容器）。

在实际开发过程中，仓库中的容器可能不能完全满足我们的需求，比如说，把我们自己的项目部署到docker容器，就不能从仓库中直接拉取镜像，就需要自己构建镜像了。

构建镜像通过编写Dockerfile配置文件完成。

#### 8.1.Dockerfile文件

Dockerfile是一个文本文件，里面编写多条命令，这些命令描述了一个镜像构建的细节。

先来看个示例：

```
#第一行必须指令基于的基础镜像
FROM ubutu

#维护者信息
MAINTAINER docker_user  zpc@niaopeng.cn

#镜像的操作指令
RUN echo "deb http://archive.ubuntu.com/ubuntu/ raring main universe" >> /etc/apt/sources.list
RUN apt-get update && apt-get install -y ngnix 
RUN echo "\ndaemon off;">>/etc/ngnix/nignix.conf

#容器启动时执行指令
CMD /usr/sbin/ngnix
12345678910111213
```

DockerFile分为四部分组成：基础镜像信、维护者信息、镜像操作指令和容器启动时执行的指令。

#### 8.2.命令详解（13个命令）

8.2.1.FROM
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204940489.png)
8.2.2.MAINTAINER
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204946422.png)
8.2.3.RUN
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113204950565.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.4.CMD
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205007501.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.5.EXPOSE
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205002981.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.6.ENV
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205016367.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.7.ADD
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205021461.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.8.COPY
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205025914.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.9.ENTRYPOINT（入口）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205030788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.10.VOLUME（挂载）
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205035327.png)
8.2.11.USER
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205039849.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.12.WORKDIR
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205044555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
8.2.13.ONBUILD
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205049347.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

#### 8.3.实战：自己构建redis镜像

编写Dockerfile如下：

```
vi Dockerfile，拷贝如下内容
构建Redis镜像
 niaopeng

#基于Centos7构建
FROM centos:7

#安装依赖
RUN yum -y install tar cpp binutils glibc glibc-kernheaders glibc-common glibc-devel gcc make gcc-c++ libstdc++-devel tcl

#创建安装目录
RUN mkdir -p /redis/data &&  cd /redis

#拷贝redis的安装包
COPY ./redis-5.0.0.tar.gz /redis

#解压
RUN cd /redis && tar -xvf redis-5.0.0.tar.gz && rm -rf redis-5.0.0.tar.gz && cd redis-5.0.0

#编译、安装
RUN cd /redis/redis-5.0.0 &&  make && make install

#复制配置文件到/redis中，并且修改redis为后台运行
RUN cp /redis/redis-5.0.0/redis.conf /redis/ && echo "daemonize yes" >> redis.conf

#设置数据挂载目录以及工作目录
VOLUME /redis/data
WORKDIR /redis/data

#容器启动后执行该命令
ENTRYPOINT ["/usr/local/bin/redis-server", "/redis/redis.conf"]

#设置对外的端口号
EXPOSE 6379
12345678910111213141516171819202122232425262728293031323334
```

构建命令：
docker build -t registry.cn-hangzhou.aliyuncs.com/niaopeng/myredis02 /tmp/build-redis-docker-image/

注意：Dockerfile和redis的安装包redis-5.0.0.tar.gz 放置在/tmp/build-redis-docker-image/下

构建完成：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205124364.png)

创建容器：
docker create -t --name myredis02 -p 26379:6379 registry.cn-hangzhou.aliyuncs.com/niaopeng/myredis02
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205130218.png)
启动容器：docker start containerid

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205134717.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
测试：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205138341.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205143159.png)

将该镜像上传到阿里云：
docker push registry.cn-hangzhou.aliyuncs.com/niaopeng/myredis02:[版本]
不传版本默认是latest

![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205147116.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205153288.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3pwY2FuZHpoag==,size_16,color_FFFFFF,t_70)

### 9.部署微服务项目

前面讲解了docker的入门知识，那么我们到底为什么要学docker呢？其实就是用来部署我们的项目的！

1、构建一个springboot应用，使用maven命令打好jar包，将jar包例如`demo-docker-0.0.1-SNAPSHOT.jar`上传linux服务器目录例如`/usr/local/dockerapp`中。

2、在jar包所在目录创建名为Dockerfile的文件。在Dockerfile中添加以下内容：

```
###指定java8环境镜像
FROM java:8
###复制文件到容器app-springboot
ADD demo-docker-0.0.1-SNAPSHOT.jar /app-springboot.jar
###声明启动端口号
EXPOSE 8080
###配置容器启动后执行的命令
ENTRYPOINT ["java","-jar","/app-springboot.jar"]
12345678
```

3、使用docker build命令构建镜像
`docker build -t docker-springboot-1.0 .`

格式： docker build -t 镜像名称:标签 Dockerfile的相对位置,点号代表当前目录，不写tag默认是latest
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190113205258543.png)

4、运行容器
`docker run -p 8080:8080 docker-springboot-1.0 .`
点号表示当前目录。run命令直接一步到位，当然也可以先create容器，再start

5、.浏览器访问接口

比如 `http://192.168.212.215:8080/index`

192.168.212.215是docker宿主机的ip（比如VMVare内的机器ip）

如果访问不了:
关闭防火墙 systemctl stop firewalld.service
重启systemctl restart docker
docker start CONTAINER_ID

这样我们就实现了用docker容器的方式部署项目，使用容器部署这种方式会使得我们物理机器的资源利用率提高很多呢！