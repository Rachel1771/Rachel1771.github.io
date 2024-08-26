# 2-部署Docsaururs
# 两种方式部署
## 一、GitHubPages
推荐采用这种方式进行部署，较为方便，采用GitHub提供的托管工具Githubpages进行静态页面部署。

GitHub Pages 是由 GitHub 提供的静态网站托管服务。它允许用户直接从他们的 GitHub 存储库托管他们的网站。GitHub Pages 支持多种静态网站生成器，并提供免费的 HTTPS 加密、自定义域和通过 Git 的版本控制。用户还可以使用 Jekyll，一个流行的静态网站生成器，在 GitHub Pages 上构建他们的网站。另外，GitHub Pages 还内置了持续集成和部署支持，使得每次您将更改推送到存储库时都可以轻松更新您的网站。

但是有一个弊端就是，单纯的Githubpages部署，每次添加新的笔记都得重新推送上远程仓库。
### 1.远程创建仓库
首先就是在远程建立一个仓库，仓库名为username.github.io，其中设置为你个人的用户名。

### 2.本地连接
打开本地写好的项目终端进行远程连接仓库。
``` shell
git init
git remote add origin "你的仓库地址"
git add .
git commit -m"提交信息"
git push -u origin main
```

上述就是将你的代码远程上传到远程仓库了
### 3.打包部署
本地首先要进行配置，将你的Docsaururs配置文件进行修改，将config配置中的代码段修改
```js
url: 'https://username.github.io',

baseUrl: '/',
```

改为自己的仓库地址所对应的那个名称就好，这也是部署后的访问地址。

执行
```shell
npm  run build
git checkout -b gh-pages
xcopy /E/Y build .
rmdir /S /Q build
git add .
git commit -m "Deploy Docusaurus to GitHub Pages" 
git push origin gh-pages
```

上述代码就是将你的build后的代码上传到gh-pages分支上，接下来你只需要在仓库的setting->
pages->Branch设置为gh-pages分支来作为你的pages读取静态文件的地址即可。
部署成功后，即可通过上述配置文件中的https://username.github.io访问到你的网站。

## 二、GitHubAction+云服务器部署
### 1.云服务
自行购买云服务器和域名，然后对域名进行解析，同时在服务器中下载Nginx并且进行配置。
在Nginx配置文件Nginx.conf中对你的域名和端口进行配置。例如
```js
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

events {
    worker_connections 1024;
}

http {

    server {
        listen 端口号 default_server;
        listen [::]:端口号 default_server;

        root /usr/workspace/RachelNooteBook/usr/workspace/RachelNooteBook/web;
        index index.html;

        server_name 域名 www.域名;

        location / {
            proxy_pass http://服务器IP;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }

    include /etc/nginx/mime.types;
    default_type application/octet-stream;

    log_format main '$remote_addr - $remote_user [$time_local] "$request" '
                    '$status $body_bytes_sent "$http_referer" '
                    '"$http_user_agent" "$http_x_forwarded_for"';

    access_log /var/log/nginx/access.log main;

}
```

通过上述配置好你的Nginx。
### 2.项目配置Action自动化脚本
在项目根目录下创建文件夹.github/workflows，并且在里面创建nodejs.yml文件，进行自动化部署的配置。
```js
name: FTP Deploy

  

on:

  push:

    branches: [ main ]

  

jobs:

  deploy:

    runs-on: ubuntu-latest

  

    steps:

      - uses: actions/checkout@v2

  

      - name: Use Node.js 16.x

        uses: actions/setup-node@v2

        with:

          node-version: '16.x'

  

      - name: Install FTP client

        run: sudo apt-get update && sudo apt-get install -y lftp

  

      - name: Build

        run: npm install && npm run build

  

      - name: FTP Deploy

        uses: SamKirkland/FTP-Deploy-Action@4.0.0

        with:

          server: 域名

          username: ${{ secrets.FTP_USER }} //用户名

          password: ${{ secrets.FTP_PWD }}  //密码

          server-dir: FTP路径

          local-dir: build/
```

其中的secrets.FTP_USER要在github设置中进行配置，添加action的变量，然后设置好你的FTP的用户名和密码即可。同时要在FTP服务器上创建好对应的路径，确保能够让你的文件打包后能够上传部署到FTP服务器上。

接下来创建一个简单的.git-ftp-include文件
加入代码：
``` js
!build/
```

这个是默认让其读取build目录下的静态文件。

通过这样配置，推送到远程后，就会自动化的使用action进行部署到你的服务器中，然后通过你的域名就可以正常访问。