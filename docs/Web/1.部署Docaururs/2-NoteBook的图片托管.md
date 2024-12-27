# 2-NoteBook的图片托管

:::tips
图片托管，是将md笔记中嵌入的本地图片，托管到服务器中，当在浏览html页面的时候，链接到服务器中的图片地址，进行展示，笔记使用的是PicX工具进行托管。感谢https://picx-docs.xpoet.cn/
:::

- 无需创建仓库
- 一次安装，永久使用
- 无需git操作，本地上传即可得到规则的服务器端图片链接

## 2.1 配置PicX
安装PicX后进行**GitHub OAuth**授权登录，也可以手写Token，个人建议授权登录

![img1](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_12-53-25.64dx8q4x4s.webp)

可以选择PicX能够查看的Github仓库，在授权登录后，会初始化好一个PicX的仓库，也就是我们本地上传到Github中进行托管的仓库了。

进入图床配置页面，可以理解成管理存图片文件夹的地方。

![img2](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_12-55-47.2oblgmy5yu.webp)

可以选择日期目录(推荐选择)，这样可以更好的管理图片文件夹。


## 2.2 图片上传和获取

配置好图床后，选择好要上传的目录，进入上传图片页面，就可以进行图片上传，本地上传一次，就会在Git仓库中进行push，本地也可以得到一个图片链接。

![img3](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_12-58-55.3rbariy02j.webp)

![img4](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_12-59-32.86tpwsb6r9.webp)

同时，在远程仓库中也能看到对应的图片数据：

![img5](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_13-01-54.7zqi1cs4r8.webp)

