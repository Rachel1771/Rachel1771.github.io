# 分别采用两种方式(GitHubPages和GithubAction和云服务器)
## 一、GitHubPages
推荐采用这种方式进行部署，较为方便，采用GitHub提供的托管工具Githubpages进行静态页面部署。

GitHub Pages 是由 GitHub 提供的静态网站托管服务。它允许用户直接从他们的 GitHub 存储库托管他们的网站。GitHub Pages 支持多种静态网站生成器，并提供免费的 HTTPS 加密、自定义域和通过 Git 的版本控制。用户还可以使用 Jekyll，一个流行的静态网站生成器，在 GitHub Pages 上构建他们的网站。另外，GitHub Pages 还内置了持续集成和部署支持，使得每次您将更改推送到存储库时都可以轻松更新您的网站。

但是有一个弊端就是，单纯的Githubpages部署，每次添加新的笔记都得重新推送上远程仓库。
### 1.远程创建仓库
首先就是在远程建立一个仓库，仓库名为username.github.io，其中设置为你个人的用户名。

### 2.本地连接
打开本地写好的项目终端进行远程连接仓库。
```
git init
git add .
git remote add origin "你的仓库地址"
git push -u origin main
```

上述就是将你的代码远程上传到远程仓库了
### 3.打包部署
本地首先要进行配置，将你的Docsaururs配置文件进行修改，将config配置中的代码段修改
```
url: 'https://username.github.io',

baseUrl: '/',
```

改为自己的仓库地址所对应的那个名称就好，这也是部署后的访问地址。

执行
```
npm  run build
git checkout -b gh-pages
xcopy /E/Y build .
rmdir /S /Q build
git add build
git commit -m "Deploy Docusaurus to GitHub Pages" 
git push origin gh-pages
```

上述代码就是将你的build后的代码上传到gh-pages分支上，接下来你只需要在仓库的setting->
pages->Branch设置为gh-pages分支来作为你的pages读取静态文件的地址即可。
部署成功后，即可通过上述配置文件中的https://username.github.io访问到你的网站。