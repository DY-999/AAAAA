# 在虚拟机中安装Ubuntu，详细教程



### 前言

之前写过一篇文章介绍虚拟机的安装。

> [1、最新版超详细VMware虚拟机下载安装教程 附秘钥](https://www.jianshu.com/p/e67b07e65241)

今天就接着来记录下如何在虚拟机中安装Linux系统。

关注微信公众号：`PythonWork`，不定期分享it干货，更有500g学习资源免费领，包括但不限于：Python、Linux、数据库等.

### 1、下载Ubuntu镜像文件

打开网址：[http://www.ubuntu.com](http://www.ubuntu.com/)，点击Download，如下图，即可下载。文件大小1.8G。

![img](https://upload-images.jianshu.io/upload_images/9242372-d466235e9307287d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



镜像下载过程中，我们可以接着进行下一步。

### 2、ubuntu虚拟机的建立

1.启动VMware，选择“创建新的虚拟机”。



![img](https://upload-images.jianshu.io/upload_images/9242372-13f646b656cbd391.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

2、打开“新建虚拟机向导”对话框，选中“自定义（高级）（C)”，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-059b1483d649e4e9.png?imageMogr2/auto-orient/strip|imageView2/2/w/499/format/webp)

3、点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-a514193308987edc.png?imageMogr2/auto-orient/strip|imageView2/2/w/499/format/webp)

4、选则“稍后安装操作系统”，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-bd435087e9f0eb77.png?imageMogr2/auto-orient/strip|imageView2/2/w/499/format/webp)

5、选中”Linux”系统，并在下拉列表中选择“Ubuntu 64位”，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-ded7239125d52379.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

6、设置安装位置，并点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-7c49de9780e96096.png?imageMogr2/auto-orient/strip|imageView2/2/w/496/format/webp)

7、设置处理器数量和核数，根据个人电脑实际情况配置，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-ddc9b937e87bc0b6.png?imageMogr2/auto-orient/strip|imageView2/2/w/498/format/webp)

8、设置使用内存，根据实际情况设置，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-f232124a824fa163.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

9、设置网络方式，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-d831216eb17ec5e4.png?imageMogr2/auto-orient/strip|imageView2/2/w/496/format/webp)

10、设置控制器类型，使用默认方式，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-e18ca0c76512075e.png?imageMogr2/auto-orient/strip|imageView2/2/w/498/format/webp)

11、设置虚拟磁盘类型，使用默认方式，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-d9307e5853abe595.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

12、选择“创建新虚拟磁盘”，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-3f8e4ce6141e849c.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

image.png

13、设置磁盘容量，并选中虚拟磁盘存储方式，然后点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-a61d8d63c8cd7aad.png?imageMogr2/auto-orient/strip|imageView2/2/w/499/format/webp)

14、设置文件名称，并点击“下一步”。



![img](https://upload-images.jianshu.io/upload_images/9242372-69d192d458436190.png?imageMogr2/auto-orient/strip|imageView2/2/w/497/format/webp)

15、点击“完成”按钮，完成虚拟机的初步设置。



![img](https://upload-images.jianshu.io/upload_images/9242372-fe9005500b56c9d2.png?imageMogr2/auto-orient/strip|imageView2/2/w/496/format/webp)

### 3、安装Ubuntu系统

1、在VMware窗口中点击“编辑虚拟机设置”按钮，打开“虚拟机设置”对话框。



![img](https://upload-images.jianshu.io/upload_images/9242372-5d17d7133d178057.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)

2、点击”CD\DVD(SATA)”项，然后在右侧窗口中选中“使用映像文件”并选中下载好的映像文件，最后点击“确定”按钮。



![img](https://upload-images.jianshu.io/upload_images/9242372-02a8cae8795a94d8.png?imageMogr2/auto-orient/strip|imageView2/2/w/723/format/webp)

3、回到VMware主窗口，点击“开启此虚拟机”按钮，进入系统安装界面。



![img](https://upload-images.jianshu.io/upload_images/9242372-cd9cbf65169e33d7.png?imageMogr2/auto-orient/strip|imageView2/2/w/1164/format/webp)

4、等待系统启动，进入“欢迎界面”，选中“English”，并点击“install Ubuntu”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-64c38988e44ec3e2.png?imageMogr2/auto-orient/strip|imageView2/2/w/804/format/webp)

5、点击“continue”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-69f00a6cc9e73b51.png?imageMogr2/auto-orient/strip|imageView2/2/w/807/format/webp)

6、选择”Normal installation”选项，并取消“Download updates while installing ubuntu”选项，然后点击“countinue”按钮；

![img](https://upload-images.jianshu.io/upload_images/9242372-ff5a8563ace9b22d.png?imageMogr2/auto-orient/strip|imageView2/2/w/816/format/webp)

7、选中“Erase disk and install Ubuntu”选项，然后点击“Install Now”按钮；

![img](https://upload-images.jianshu.io/upload_images/9242372-fb08eb8afbd4676c.png?imageMogr2/auto-orient/strip|imageView2/2/w/811/format/webp)

8、在弹出的对话框中点击“continue”按钮；

9、设置地理位置，然后点击“continue”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-de6d481c566cfd55.png?imageMogr2/auto-orient/strip|imageView2/2/w/794/format/webp)

10、设置用户名和密码，然后点击“continue”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-7bfcd1dfb8ceba57.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp)

11、进入系统安装界面，请耐心等待；



![img](https://upload-images.jianshu.io/upload_images/9242372-f54b7e86b94de1a5.png?imageMogr2/auto-orient/strip|imageView2/2/w/796/format/webp)

12、待安装完成，在弹出的对话框中，点击“Restart Now”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-f7a6873447f50add.png?imageMogr2/auto-orient/strip|imageView2/2/w/791/format/webp)

13、提示移除安装媒介，然后重启；



![img](https://upload-images.jianshu.io/upload_images/9242372-5a7a2a4f1f4efeda.png?imageMogr2/auto-orient/strip|imageView2/2/w/763/format/webp)

14、点击工具栏上的红框标记的下拉框，在弹出菜单中选择“关闭计算机”；



![img](https://upload-images.jianshu.io/upload_images/9242372-0dce559f457e9027.png?imageMogr2/auto-orient/strip|imageView2/2/w/809/format/webp)

15、在弹出窗口中，点击“关机”按钮；

![img](https://upload-images.jianshu.io/upload_images/9242372-579d7fe0e69be277.png?imageMogr2/auto-orient/strip|imageView2/2/w/379/format/webp)

16、回到VMware主窗口，点击“编辑虚拟机设置”按钮，打开“虚拟机设置”对话框。按照下图进行设置，然后点击“确定”按钮；



![img](https://upload-images.jianshu.io/upload_images/9242372-7032ea0052621761.png?imageMogr2/auto-orient/strip|imageView2/2/w/719/format/webp)

17.在VMware主窗口中，点击“开启此虚拟机”按钮，进入系统。到目前为止，Ubuntu系统已安装完成。