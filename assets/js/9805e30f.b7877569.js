"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[810],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),o=m(a),d=l,c=o["".concat(p,".").concat(d)]||o[d]||k[d]||r;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[o]="string"==typeof e?e:l,i[1]=s;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9342:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const r={},i="1.Linux\u4e2d\u7684\u5b89\u88c5\u548c\u542f\u52a8",s={unversionedId:"Web/Redis/Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e",id:"Web/Redis/Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e",title:"1.Linux\u4e2d\u7684\u5b89\u88c5\u548c\u542f\u52a8",description:"1.1 \u5b89\u88c5\u548c\u89e3\u538b",source:"@site/docs/Web/3.Redis/1-Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e.md",sourceDirName:"Web/3.Redis",slug:"/Web/Redis/Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e",permalink:"/docs/Web/Redis/Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e",draft:!1,editUrl:"https://github.com/Rachel1771/Rachel1771.github.io/docs/Web/3.Redis/1-Redis\u5b89\u88c5&&\u5341\u5927\u6570\u636e.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1-\u63a5\u53e3\u6587\u6863",permalink:"/docs/Web/\u8f6f\u4ef6\u5de5\u7a0b\u8bfe\u8bbe/\u63a5\u53e3\u6587\u6863"},next:{title:"1.\u6301\u4e45\u5316",permalink:"/docs/Web/Redis/Redis \u6301\u4e45\u5316"}},p={},m=[{value:"1.1 \u5b89\u88c5\u548c\u89e3\u538b",id:"11-\u5b89\u88c5\u548c\u89e3\u538b",level:2},{value:"1.2\u914d\u7f6e",id:"12\u914d\u7f6e",level:2},{value:"1.3 \u670d\u52a1\u542f\u52a8",id:"13-\u670d\u52a1\u542f\u52a8",level:2},{value:"1.4\u5173\u95ed",id:"14\u5173\u95ed",level:2},{value:"2.1\u5b57\u7b26\u4e32String",id:"21\u5b57\u7b26\u4e32string",level:2},{value:"2.1.1\u5e38\u7528\u6307\u4ee4",id:"211\u5e38\u7528\u6307\u4ee4",level:3},{value:"2.1.2\u5206\u5e03\u5f0f\u9501",id:"212\u5206\u5e03\u5f0f\u9501",level:3},{value:"2.1.3\u6570\u503c\u589e\u51cf",id:"213\u6570\u503c\u589e\u51cf",level:3},{value:"2.2 \u5217\u8868",id:"22-\u5217\u8868",level:2},{value:"2.2.1\u5e38\u7528\u6307\u4ee4",id:"221\u5e38\u7528\u6307\u4ee4",level:3},{value:"2.3\u54c8\u5e0c",id:"23\u54c8\u5e0c",level:2},{value:"2.3.1\u5e38\u7528\u6307\u4ee4",id:"231\u5e38\u7528\u6307\u4ee4",level:3},{value:"2.4\u96c6\u5408",id:"24\u96c6\u5408",level:2},{value:"2.4.1\u5e38\u7528\u6307\u4ee4",id:"241\u5e38\u7528\u6307\u4ee4",level:3},{value:"2.5\u6709\u5e8f\u96c6\u5408",id:"25\u6709\u5e8f\u96c6\u5408",level:2},{value:"2.5.1\u8ddfSet\u7684\u533a\u522b",id:"251\u8ddfset\u7684\u533a\u522b",level:3},{value:"2.5.2\u5e38\u7528\u6307\u4ee4",id:"252\u5e38\u7528\u6307\u4ee4",level:3},{value:"2.6\u5730\u7406\u7a7a\u95f4\u4fe1\u606f",id:"26\u5730\u7406\u7a7a\u95f4\u4fe1\u606f",level:2},{value:"2.6.1\u7b80\u4ecb",id:"261\u7b80\u4ecb",level:3},{value:"2.6.2\u6307\u4ee4",id:"262\u6307\u4ee4",level:3},{value:"2.7HyperLogLog",id:"27hyperloglog",level:2},{value:"2.8\u6d41",id:"28\u6d41",level:2},{value:"2.8.1\u662f\u4ec0\u4e48",id:"281\u662f\u4ec0\u4e48",level:3},{value:"2.8.2\u76f8\u5173\u6307\u4ee4",id:"282\u76f8\u5173\u6307\u4ee4",level:3}],u={toc:m},o="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(o,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"1linux\u4e2d\u7684\u5b89\u88c5\u548c\u542f\u52a8"},"1.Linux\u4e2d\u7684\u5b89\u88c5\u548c\u542f\u52a8"),(0,l.kt)("h2",{id:"11-\u5b89\u88c5\u548c\u89e3\u538b"},"1.1 \u5b89\u88c5\u548c\u89e3\u538b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728Redis\u5b98\u7f51\u4e2d\u4e0b\u8f7dRedis7\u7248\u672c\u538b\u7f29\u5305\u540e\uff0c\u4f7f\u7528XFTP\u8f6f\u4ef6\u5c06\u672c\u5730\u7684Redis\u538b\u7f29\u5305\u4e0a\u4f20\u5230\u670d\u52a1\u5668\u4e2d\u7684/opt\u76ee\u5f55\u4e0b\uff0c\u4e00\u822c\u5b89\u88c5\u5305\u90fd\u653e\u5728/root/opt\u4e0b\uff0c\u540c\u65f6\u8fdb\u884c\u89e3\u538b(tar -zxvf redis-7.0.0.tar.gz)"),(0,l.kt)("li",{parentName:"ul"},"\u8fdb\u5165redis-7.0.0\u76ee\u5f55\u4e0b\uff0c\u6267\u884cmake && make install\u547d\u4ee4"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5b89\u88c5\u8def\u5f84\u5728/root/usr/local/bin\u4e0b\uff0cll\u5217\u4e3eredis-7.0.0\u4e2d\u7684\u6587\u4ef6\uff0c\u6709\u4e24\u4e2a\u4e3aredis-cli\u548credis-server\u8fd9\u4e24\u4e2a\u5206\u522b\u662f\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u542f\u52a8\u547d\u4ee4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u5bf9redis.conf\u8fdb\u884c\u4fee\u6539\uff0c\u4f46\u662f\u4e0d\u4f1a\u76f4\u63a5\u4fee\u6539\u6e90\u6587\u4ef6\uff0c\u9700\u8981\u65b0\u5efa\u4e00\u4e2amyredis\u6587\u4ef6\u5939\u5b58\u653e\u6211\u4eec\u4e13\u95e8\u4fee\u6539\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u5c06redis.conf\u62f7\u8d1d\u5230/myredis\u4e2d\uff0c\u540c\u65f6\u8fdb\u884c\u914d\u7f6e")),(0,l.kt)("h2",{id:"12\u914d\u7f6e"},"1.2\u914d\u7f6e"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4daemonize no \u6539\u4e3adaemonize yes"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4protected-mode\xa0 yes\u6539\u4e3aprotected-mode no"),(0,l.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4bind 127.0.0.1\u6539\u4e3a\xa0\u76f4\u63a5\u6ce8\u91ca\u6389(\u9ed8\u8ba4bind 127.0.0.1\u53ea\u80fd\u672c\u673a\u8bbf\u95ee)\u6216\u6539\u6210\u672c\u673aIP\u5730\u5740\uff0c\u5426\u5219\u5f71\u54cd\u8fdc\u7a0bIP\u8fde\u63a5"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0redis\u5bc6\u7801\u6539\u4e3a requirepass \u4f60\u81ea\u5df1\u8bbe\u7f6e\u7684\u5bc6\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f97\u91cd\u542f\u624d\u4f1a\u6709\u6548")),(0,l.kt)("h2",{id:"13-\u670d\u52a1\u542f\u52a8"},"1.3 \u670d\u52a1\u542f\u52a8"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cd \u8fdb\u5165/myredis\u76ee\u5f55\u4e0b"),(0,l.kt)("li",{parentName:"ul"},"redis-server /myredis/redis.conf"),(0,l.kt)("li",{parentName:"ul"},"redis-cli"),(0,l.kt)("li",{parentName:"ul"},"\u5373\u53ef\u8fdb\u5165"),(0,l.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5redis-cli -a ",(0,l.kt)("em",{parentName:"li"},"password"),"\u8fdb\u5165")),(0,l.kt)("h2",{id:"14\u5173\u95ed"},"1.4\u5173\u95ed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5355\u5b9e\u4f8b\u5173\u95ed\uff1aredis-cli -a ",(0,l.kt)("em",{parentName:"li"},"password")," shutdown"),(0,l.kt)("li",{parentName:"ul"},"\u591a\u5b9e\u4f8b\u5173\u95ed\uff1a\u6307\u5b9a\u7aef\u53e3\u5173\u95ed\uff1aredis-cli -p 6379 shutdown")),(0,l.kt)("h1",{id:"2\u5341\u5927\u6570\u636e\u7c7b\u578b"},"2.\u5341\u5927\u6570\u636e\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/1.5fknomi3mp.webp",alt:"\u4e00\u5f20\u56fe\u89e3\u91ca"})),(0,l.kt)("h2",{id:"21\u5b57\u7b26\u4e32string"},"2.1\u5b57\u7b26\u4e32String"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"string\u662fredis\u6700\u57fa\u672c\u7684\u7c7b\u578b\uff0c\u4e00\u4e2akey\u5bf9\u5e94\u4e00\u4e2avalue\u3002string\u7c7b\u578b\u662f\u4e8c\u8fdb\u5236\u5b89\u5168\u7684\uff0c\u610f\u601d\u662fredis\u7684string\u53ef\u4ee5\u5305\u542b\u4efb\u4f55\u6570\u636e\uff0c\u6bd4\u5982jpg\u56fe\u7247\u6216\u8005\u5e8f\u5217\u5316\u7684\u5bf9\u8c61 \u3002string\u7c7b\u578b\u662fRedis\u6700\u57fa\u672c\u7684\u6570\u636e\u7c7b\u578b\uff0c\u4e00\u4e2aredis\u4e2d\u5b57\u7b26\u4e32value\u6700\u591a\u53ef\u4ee5\u662f512M")),(0,l.kt)("h3",{id:"211\u5e38\u7528\u6307\u4ee4"},"2.1.1\u5e38\u7528\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/2.54xtvh2vhe.webp",alt:"\u6307\u4ee4"})),(0,l.kt)("h3",{id:"212\u5206\u5e03\u5f0f\u9501"},"2.1.2\u5206\u5e03\u5f0f\u9501"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"EX\uff1aKey\u5728\u591a\u5c11\u79d2\u4e4b\u540e\u8fc7\u671f"),(0,l.kt)("li",{parentName:"ul"},"PX\uff1aKey\u5728\u591a\u5c11\u6beb\u79d2\u540e\u8fc7\u671f"),(0,l.kt)("li",{parentName:"ul"},"NX\uff1a\u5f53Key\u4e0d\u5b58\u5728\u7684\u65f6\u5019\uff0c\u624d\u521b\u5efaKey\uff0c\u7b49\u6548\u4e8esetnx"),(0,l.kt)("li",{parentName:"ul"},"XX\uff1a\u5f53Key\u5b58\u5728\u7684\u65f6\u5019\uff0c\u8986\u76d6Key")),(0,l.kt)("h3",{id:"213\u6570\u503c\u589e\u51cf"},"2.1.3\u6570\u503c\u589e\u51cf"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u53ea\u6709\u662f\u6570\u5b57\u624d\u80fd\u8fdb\u884c\u52a0\u51cf")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"INCR key\uff1a\u9012\u589e"),(0,l.kt)("li",{parentName:"ul"},"INCRBY key increment\uff1a\u589e\u52a0\u6307\u5b9a\u7684\u6574\u6570"),(0,l.kt)("li",{parentName:"ul"},"DECR key\uff1a\u9012\u51cf\u6570\u503c"),(0,l.kt)("li",{parentName:"ul"},"DECRBY key decrement\uff1a\u51cf\u5c11\u6307\u5b9a\u7684\u6574\u6570")),(0,l.kt)("h2",{id:"22-\u5217\u8868"},"2.2 \u5217\u8868"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List\uff08\u5217\u8868\uff09\uff0cRedis\u5217\u8868\u662f\u7b80\u5355\u7684\u5b57\u7b26\u4e32\u5217\u8868\uff0c\u6309\u7167\u63d2\u5165\u987a\u5e8f\u6392\u5e8f\u3002\u4f60\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u5143\u7d20\u5230\u5217\u8868\u7684\u5934\u90e8\uff08\u5de6\u8fb9\uff09\u6216\u8005\u5c3e\u90e8\uff08\u53f3\u8fb9\uff09\uff0c\u5b83\u7684\u5e95\u5c42\u5b9e\u9645\u662f\u4e2a\u53cc\u7aef\u94fe\u8868\uff0c\u6700\u591a\u53ef\u4ee5\u5305\u542b 2^32 - 1 \u4e2a\u5143\u7d20 (4294967295, \u6bcf\u4e2a\u5217\u8868\u8d85\u8fc740\u4ebf\u4e2a\u5143\u7d20)")),(0,l.kt)("h3",{id:"221\u5e38\u7528\u6307\u4ee4"},"2.2.1\u5e38\u7528\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/3.8vmzgprqoz.webp",alt:"\u6307\u4ee4"})),(0,l.kt)("p",null,"\u4e00\u4e2a\u53cc\u7aef\u94fe\u8868\u7684\u7ed3\u6784\uff0c\u5bb9\u91cf\u662f2\u768432\u6b21\u65b9\u51cf1\u4e2a\u5143\u7d20\uff0c\u5927\u698240\u591a\u4ebf\uff0c\u4e3b\u8981\u529f\u80fd\u6709push/pop\u7b49\uff0c\u4e00\u822c\u7528\u5728\u6808\u3001\u961f\u5217\u3001\u6d88\u606f\u961f\u5217\u7b49\u573a\u666f\u3002left\u3001right\u90fd\u53ef\u4ee5\u63d2\u5165\u6dfb\u52a0\uff1b\u5982\u679c\u952e\u4e0d\u5b58\u5728\uff0c\u521b\u5efa\u65b0\u7684\u94fe\u8868\uff1b\u5982\u679c\u952e\u5df2\u5b58\u5728\uff0c\u65b0\u589e\u5185\u5bb9\uff1b\u5982\u679c\u503c\u5168\u79fb\u9664\uff0c\u5bf9\u5e94\u7684\u952e\u4e5f\u5c31\u6d88\u5931\u4e86\u3002\n\u5b83\u7684\u5e95\u5c42\u5b9e\u9645\u662f\u4e2a",(0,l.kt)("strong",{parentName:"p"},"\u53cc\u5411\u94fe\u8868\uff0c\u5bf9\u4e24\u7aef\u7684\u64cd\u4f5c\u6027\u80fd\u5f88\u9ad8\uff0c\u901a\u8fc7\u7d22\u5f15\u4e0b\u6807\u7684\u64cd\u4f5c\u4e2d\u95f4\u7684\u8282\u70b9\u6027\u80fd\u4f1a\u8f83\u5dee\u3002"),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/4.26ljryum04.webp",alt:"\u56fe"})),(0,l.kt)("h2",{id:"23\u54c8\u5e0c"},"2.3\u54c8\u5e0c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis hash \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684 field\uff08\u5b57\u6bb5\uff09 \u548c value\uff08\u503c\uff09 \u7684\u6620\u5c04\u8868\uff0chash \u7279\u522b\u9002\u5408\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u3002Redis \u4e2d\u6bcf\u4e2a hash \u53ef\u4ee5\u5b58\u50a8 2^32 - 1 \u952e\u503c\u5bf9\uff0840\u591a\u4ebf\uff09")),(0,l.kt)("h3",{id:"231\u5e38\u7528\u6307\u4ee4"},"2.3.1\u5e38\u7528\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/5.6m3yx87085.webp",alt:"\u56fe"})),(0,l.kt)("p",null,"KV\u6a21\u5f0f\u4e0d\u53d8\uff0c\u4f46\u662fV\u662f\u4e00\u4e2a\u952e\u503c\u5bf9\uff0cMap<String,Map<Object,Object>>"),(0,l.kt)("h2",{id:"24\u96c6\u5408"},"2.4\u96c6\u5408"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis \u7684 Set \u662f String \u7c7b\u578b\u7684\u65e0\u5e8f\u96c6\u5408\u3002\u96c6\u5408\u6210\u5458\u662f\u552f\u4e00\u7684\uff0c\u8fd9\u5c31\u610f\u5473\u7740\u96c6\u5408\u4e2d\u4e0d\u80fd\u51fa\u73b0\u91cd\u590d\u7684\u6570\u636e\uff0c\u96c6\u5408\u5bf9\u8c61\u7684\u7f16\u7801\u53ef\u4ee5\u662f intset \u6216\u8005 hashtable\u3002Redis \u4e2dSet\u96c6\u5408\u662f\u901a\u8fc7\u54c8\u5e0c\u8868\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u67e5\u627e\u7684\u590d\u6742\u5ea6\u90fd\u662f O(1)\u3002\u96c6\u5408\u4e2d\u6700\u5927\u7684\u6210\u5458\u6570\u4e3a 2^32 - 1 (4294967295, \u6bcf\u4e2a\u96c6\u5408\u53ef\u5b58\u50a840\u591a\u4ebf\u4e2a\u6210\u5458)")),(0,l.kt)("h3",{id:"241\u5e38\u7528\u6307\u4ee4"},"2.4.1\u5e38\u7528\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/6.9gwn30m6zq.webp",alt:"dsad"})),(0,l.kt)("h2",{id:"25\u6709\u5e8f\u96c6\u5408"},"2.5\u6709\u5e8f\u96c6\u5408"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis zset \u548c set \u4e00\u6837\u4e5f\u662fstring\u7c7b\u578b\u5143\u7d20\u7684\u96c6\u5408,\u4e14\u4e0d\u5141\u8bb8\u91cd\u590d\u7684\u6210\u5458\u3002\u4e0d\u540c\u7684\u662f\u6bcf\u4e2a\u5143\u7d20\u90fd\u4f1a\u5173\u8054\u4e00\u4e2adouble\u7c7b\u578b\u7684\u5206\u6570\uff0credis\u6b63\u662f\u901a\u8fc7\u5206\u6570\u6765\u4e3a\u96c6\u5408\u4e2d\u7684\u6210\u5458\u8fdb\u884c\u4ece\u5c0f\u5230\u5927\u7684\u6392\u5e8f\u3002zset\u7684\u6210\u5458\u662f\u552f\u4e00\u7684,\u4f46\u5206\u6570(score)\u5374\u53ef\u4ee5\u91cd\u590d\u3002zset\u96c6\u5408\u662f\u901a\u8fc7\u54c8\u5e0c\u8868\u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6dfb\u52a0\uff0c\u5220\u9664\uff0c\u67e5\u627e\u7684\u590d\u6742\u5ea6\u90fd\u662f O(1)\u3002 \u96c6\u5408\u4e2d\u6700\u5927\u7684\u6210\u5458\u6570\u4e3a ",(0,l.kt)("span",{parentName:"p",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("msup",{parentName:"mrow"},(0,l.kt)("mn",{parentName:"msup"},"2"),(0,l.kt)("mn",{parentName:"msup"},"32")),(0,l.kt)("mo",{parentName:"mrow"},"\u2212"),(0,l.kt)("mn",{parentName:"mrow"},"1")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{32} - 1")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8974em",verticalAlign:"-0.0833em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},(0,l.kt)("span",{parentName:"span",className:"mord"},"2"),(0,l.kt)("span",{parentName:"span",className:"msupsub"},(0,l.kt)("span",{parentName:"span",className:"vlist-t"},(0,l.kt)("span",{parentName:"span",className:"vlist-r"},(0,l.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,l.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,l.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,l.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},(0,l.kt)("span",{parentName:"span",className:"mord mtight"},"32"))))))))),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,l.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,l.kt)("span",{parentName:"span",className:"mord"},"1")))))," ")),(0,l.kt)("h3",{id:"251\u8ddfset\u7684\u533a\u522b"},"2.5.1\u8ddfSet\u7684\u533a\u522b"),(0,l.kt)("p",null,"\u5728Set\u7684\u57fa\u7840\u4e0a\uff0c\u6bcf\u4e2aValue\u7684\u503c\u524d\u52a0\u4e00\u4e2aScore\u5206\u6570\u503c\uff0c\u4e4b\u524dSet\u662fK1,V1,Zset\u4f1a\u53d8\u6210K1,V1,Score1"),(0,l.kt)("h3",{id:"252\u5e38\u7528\u6307\u4ee4"},"2.5.2\u5e38\u7528\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/7.9gwn30m6zr.webp",alt:"dasdas"})),(0,l.kt)("h2",{id:"26\u5730\u7406\u7a7a\u95f4\u4fe1\u606f"},"2.6\u5730\u7406\u7a7a\u95f4\u4fe1\u606f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Redis GEO \u4e3b\u8981\u7528\u4e8e\u5b58\u50a8\u5730\u7406\u4f4d\u7f6e\u4fe1\u606f\uff0c\u5e76\u5bf9\u5b58\u50a8\u7684\u4fe1\u606f\u8fdb\u884c\u64cd\u4f5c\uff0c\u5305\u62ec\u6dfb\u52a0\u5730\u7406\u4f4d\u7f6e\u7684\u5750\u6807\u3002\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e\u7684\u5750\u6807\u3002\u8ba1\u7b97\u4e24\u4e2a\u4f4d\u7f6e\u4e4b\u95f4\u7684\u8ddd\u79bb\u3002\u6839\u636e\u7528\u6237\u7ed9\u5b9a\u7684\u7ecf\u7eac\u5ea6\u5750\u6807\u6765\u83b7\u53d6\u6307\u5b9a\u8303\u56f4\u5185\u7684\u5730\u7406\u4f4d\u7f6e\u96c6\u5408")),(0,l.kt)("h3",{id:"261\u7b80\u4ecb"},"2.6.1\u7b80\u4ecb"),(0,l.kt)("p",null,"\u79fb\u52a8\u4e92\u8054\u7f51\u65f6\u4ee3LBS\u5e94\u7528\u8d8a\u6765\u8d8a\u591a\uff0c\u4ea4\u53cb\u8f6f\u4ef6\u4e2d\u9644\u8fd1\u7684\u5c0f\u59d0\u59d0\u3001\u5916\u5356\u8f6f\u4ef6\u4e2d\u9644\u8fd1\u7684\u7f8e\u98df\u5e97\u94fa\u3001\u9ad8\u5fb7\u5730\u56fe\u9644\u8fd1\u7684\u6838\u9178\u68c0\u67e5\u70b9\u7b49\u7b49\uff0c\u90a3\u8fd9\u79cd\u9644\u8fd1\u5404\u79cd\u5f62\u5f62\u8272\u8272\u7684XXX\u5730\u5740\u4f4d\u7f6e\u9009\u62e9\u662f\u5982\u4f55\u5b9e\u73b0\u7684\uff1f"),(0,l.kt)("p",null,"\u5730\u7403\u4e0a\u7684\u5730\u7406\u4f4d\u7f6e\u662f\u4f7f\u7528\u4e8c\u7ef4\u7684\u7ecf\u7eac\u5ea6\u8868\u793a\uff0c\u7ecf\u5ea6\u8303\u56f4 (-180, 180]\uff0c\u7eac\u5ea6\u8303\u56f4 (-90, 90]\uff0c\u53ea\u8981\u6211\u4eec\u786e\u5b9a\u4e00\u4e2a\u70b9\u7684\u7ecf\u7eac\u5ea6\u5c31\u53ef\u4ee5\u540d\u53d6\u5f97\u4ed6\u5728\u5730\u7403\u7684\u4f4d\u7f6e\u3002\u4f8b\u5982\u6ef4\u6ef4\u6253\u8f66\uff0c\u6700\u76f4\u89c2\u7684\u64cd\u4f5c\u5c31\u662f\u5b9e\u65f6\u8bb0\u5f55\u66f4\u65b0\u5404\u4e2a\u8f66\u7684\u4f4d\u7f6e\uff0c\u7136\u540e\u5f53\u6211\u4eec\u8981\u627e\u8f66\u65f6\uff0c\u5728\u6570\u636e\u5e93\u4e2d\u67e5\u627e\u8ddd\u79bb\u6211\u4eec(\u5750\u6807x0,y0)\u9644\u8fd1r\u516c\u91cc\u8303\u56f4\u5185\u90e8\u7684\u8f66\u8f86"),(0,l.kt)("p",null,"\u4f7f\u7528\u5982\u4e0bSQL\u5373\u53ef\uff1aselect taxi from position where x0-r < x < x0 + r and y0-r < y < y0+r\u3001"),(0,l.kt)("p",null,"\u4f46\u662f\u4f1a\u6709\u5982\u4e0b\u95ee\u9898\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u67e5\u8be2\u6027\u80fd\u95ee\u9898\uff0c\u5982\u679c\u5e76\u53d1\u9ad8\uff0c\u6570\u636e\u91cf\u5927\u8fd9\u79cd\u67e5\u8be2\u662f\u8981\u641e\u57ae\u6570\u636e\u5e93\u7684"),(0,l.kt)("li",{parentName:"ol"},"\u8fd9\u4e2a\u67e5\u8be2\u7684\u662f\u4e00\u4e2a\u77e9\u5f62\u8bbf\u95ee\uff0c\u800c\u4e0d\u662f\u4ee5\u6211\u4e3a\u4e2d\u5fc3r\u516c\u91cc\u4e3a\u534a\u5f84\u7684\u5706\u5f62\u8bbf\u95ee\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u7cbe\u51c6\u5ea6\u7684\u95ee\u9898\uff0c\u6211\u4eec\u77e5\u9053\u5730\u7403\u4e0d\u662f\u5e73\u9762\u5750\u6807\u7cfb\uff0c\u800c\u662f\u4e00\u4e2a\u5706\u7403\uff0c\u8fd9\u79cd\u77e9\u5f62\u8ba1\u7b97\u5728\u957f\u8ddd\u79bb\u8ba1\u7b97\u65f6\u4f1a\u6709\u5f88\u5927\u8bef\u5dee\u3001")),(0,l.kt)("h3",{id:"262\u6307\u4ee4"},"2.6.2\u6307\u4ee4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GEOADD\uff1a\u591a\u4e2a\u7ecf\u5ea6\u3001\u7ef4\u5ea6\u3001\u4f4d\u7f6e\u540d\u79f0\u6dfb\u52a0\u5230Key\u4e2d"),(0,l.kt)("li",{parentName:"ul"},"GEOPOS\uff1a\u4ece\u952e\u91cc\u9762\u8fd4\u56de\u6240\u6709\u7ed9\u5b9a\u4f4d\u7f6e\u5143\u7d20\u7684\u4f4d\u7f6e"),(0,l.kt)("li",{parentName:"ul"},"GEODIST\uff1a\u8fd4\u56de\u4e24\u4e2a\u7ed9\u5b9a\u4f4d\u7f6e\u4e4b\u95f4\u7684\u8ddd\u79bb"),(0,l.kt)("li",{parentName:"ul"},"GEORADIUS\uff1a\u4ee5\u7ed9\u5b9a\u7ecf\u7eac\u5ea6\u4e3a\u4e2d\u5fc3\uff0c\u8fd4\u56de\u4e0e\u4e2d\u5fc3\u8ddd\u79bb\u4e0d\u8d85\u8fc7\u7ed9\u5b9a\u6700\u5927\u8ddd\u79bb\u7684\u6240\u6709\u4f4d\u7f6e\u5143\u7d20"),(0,l.kt)("li",{parentName:"ul"},"GEORAIUSBYMEMBER\uff0c\u8ddf\u4e0a\u6761\u7c7b\u4f3c"),(0,l.kt)("li",{parentName:"ul"},"GEOHASH\uff1a\u8fd4\u56de\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u4f4d\u7f6e\u5143\u7d20\u7684GeoHash")),(0,l.kt)("h2",{id:"27hyperloglog"},"2.7HyperLogLog"),(0,l.kt)("p",null,"HyperLogLog \u662f\u7528\u6765\u505a\u57fa\u6570\u7edf\u8ba1\u7684\u7b97\u6cd5\uff0cHyperLogLog \u7684\u4f18\u70b9\u662f\uff0c\u5728\u8f93\u5165\u5143\u7d20\u7684\u6570\u91cf\u6216\u8005\u4f53\u79ef\u975e\u5e38\u975e\u5e38\u5927\u65f6\uff0c\u8ba1\u7b97\u57fa\u6570\u6240\u9700\u7684\u7a7a\u95f4\u603b\u662f\u56fa\u5b9a\u4e14\u662f\u5f88\u5c0f\u7684\u3002"),(0,l.kt)("p",null,"\u5728 Redis \u91cc\u9762\uff0c\u6bcf\u4e2a HyperLogLog \u952e\u53ea\u9700\u8981\u82b1\u8d39 12 KB \u5185\u5b58\uff0c\u5c31\u53ef\u4ee5\u8ba1\u7b97\u63a5\u8fd1 2^64 \u4e2a\u4e0d\u540c\u5143\u7d20\u7684\u57fa \u6570\u3002\u8fd9\u548c\u8ba1\u7b97\u57fa\u6570\u65f6\uff0c\u5143\u7d20\u8d8a\u591a\u8017\u8d39\u5185\u5b58\u5c31\u8d8a\u591a\u7684\u96c6\u5408\u5f62\u6210\u9c9c\u660e\u5bf9\u6bd4\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u56e0\u4e3a HyperLogLog \u53ea\u4f1a\u6839\u636e\u8f93\u5165\u5143\u7d20\u6765\u8ba1\u7b97\u57fa\u6570\uff0c\u800c\u4e0d\u4f1a\u50a8\u5b58\u8f93\u5165\u5143\u7d20\u672c\u8eab\uff0c\u6240\u4ee5 HyperLogLog \u4e0d\u80fd\u50cf\u96c6\u5408\u90a3\u6837\uff0c\u8fd4\u56de\u8f93\u5165\u7684\u5404\u4e2a\u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"28\u6d41"},"2.8\u6d41"),(0,l.kt)("p",null,"Redis Stream \u662f Redis 5.0 \u7248\u672c\u65b0\u589e\u52a0\u7684\u6570\u636e\u7ed3\u6784\u3002"),(0,l.kt)("p",null,"Redis Stream \u4e3b\u8981\u7528\u4e8e\u6d88\u606f\u961f\u5217\uff08MQ\uff0cMessage Queue\uff09\uff0cRedis \u672c\u8eab\u662f\u6709\u4e00\u4e2a Redis \u53d1\u5e03\u8ba2\u9605 (pub/sub) \u6765\u5b9e\u73b0\u6d88\u606f\u961f\u5217\u7684\u529f\u80fd\uff0c\u4f46\u5b83\u6709\u4e2a\u7f3a\u70b9\u5c31\u662f\u6d88\u606f\u65e0\u6cd5\u6301\u4e45\u5316\uff0c\u5982\u679c\u51fa\u73b0\u7f51\u7edc\u65ad\u5f00\u3001Redis \u5b95\u673a\u7b49\uff0c\u6d88\u606f\u5c31\u4f1a\u88ab\u4e22\u5f03\u3002 "),(0,l.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\u53d1\u5e03\u8ba2\u9605 (pub/sub) \u53ef\u4ee5\u5206\u53d1\u6d88\u606f\uff0c\u4f46\u65e0\u6cd5\u8bb0\u5f55\u5386\u53f2\u6d88\u606f\u3002"),(0,l.kt)("p",null,"\u800c Redis Stream \u63d0\u4f9b\u4e86\u6d88\u606f\u7684\u6301\u4e45\u5316\u548c\u4e3b\u5907\u590d\u5236\u529f\u80fd\uff0c\u53ef\u4ee5\u8ba9\u4efb\u4f55\u5ba2\u6237\u7aef\u8bbf\u95ee\u4efb\u4f55\u65f6\u523b\u7684\u6570\u636e\uff0c\u5e76\u4e14\u80fd\u8bb0\u4f4f\u6bcf\u4e00\u4e2a\u5ba2\u6237\u7aef\u7684\u8bbf\u95ee\u4f4d\u7f6e\uff0c\u8fd8\u80fd\u4fdd\u8bc1\u6d88\u606f\u4e0d\u4e22\u5931\u3002"),(0,l.kt)("h3",{id:"281\u662f\u4ec0\u4e48"},"2.8.1\u662f\u4ec0\u4e48"),(0,l.kt)("p",null,"\u4e00\u53e5\u8bdd\u603b\u7ed3\u5c31\u662fRedis\u7248\u672c\u7684MQ\u6d88\u606f\u4e2d\u95f4\u4ef6+\u963b\u585e\u961f\u5217\u3002"),(0,l.kt)("p",null,"\u5b9e\u73b0\u6d88\u606f\u961f\u5217\uff0c\u652f\u6301\u6d88\u606f\u7684\u6301\u4e45\u5316\uff0c\u652f\u6301\u81ea\u52a8\u751f\u6210\u5168\u5c40\u552f\u4e00 ID\uff0c\u652f\u6301ACK\u786e\u8ba4\u6d88\u606f\u6a21\u5f0f\uff0c\u652f\u6301\u6d88\u8d39\u7ec4\u6a21\u5f0f\uff0c\u8ba9\u6d88\u606f\u961f\u5217\u66f4\u52a0\u7a33\u5b9a\u548c\u53ef\u9760\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/8.8z6lefktev.webp",alt:"dsadas"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u770b\u8d77\u6765\u5c31\u662f\u4e00\u4e2a\u6d88\u606f\u94fe\u8868\uff0c\u5c06\u6240\u6709\u7684\u6d88\u606f\u90fd\u4e32\u8d77\u6765\uff0c\u6bcf\u4e2a\u6d88\u606f\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684ID\u548c\u5bf9\u5e94\u7684\u5185\u5bb9")," "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Message Content"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer group"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u7ec4\uff0c\u901a\u8fc7XGROUP CREATE \u547d\u4ee4\u521b\u5efa\uff0c\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u53ef\u4ee5\u6709\u591a\u4e2a\u6d88\u8d39\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Last_delivered_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6e38\u6807\uff0c\u6bcf\u4e2a\u6d88\u8d39\u7ec4\u4f1a\u6709\u4e2a\u6e38\u6807 last_delivered_id\uff0c\u4efb\u610f\u4e00\u4e2a\u6d88\u8d39\u8005\u8bfb\u53d6\u4e86\u6d88\u606f\u90fd\u4f1a\u4f7f\u6e38\u6807 last_delivered_id \u5f80\u524d\u79fb\u52a8\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\uff0c\u6d88\u8d39\u7ec4\u4e2d\u7684\u6d88\u8d39\u8005")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Pending_ids"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u4f1a\u6709\u4e00\u4e2a\u72b6\u6001\u53d8\u91cf\uff0c\u7528\u4e8e\u8bb0\u5f55\u88ab\u5f53\u524d\u6d88\u8d39\u5df2\u8bfb\u53d6\u4f46\u672aack\u7684\u6d88\u606fId\uff0c\u5982\u679c\u5ba2\u6237\u7aef\u6ca1\u6709ack\uff0c\u8fd9\u4e2a\u53d8\u91cf\u91cc\u9762\u7684\u6d88\u606fID\u4f1a\u8d8a\u6765\u8d8a\u591a\uff0c\u4e00\u65e6\u67d0\u4e2a\u6d88\u606f\u88aback\u5b83\u5c31\u5f00\u59cb\u51cf\u5c11\u3002\u8fd9\u4e2apending_ids\u53d8\u91cf\u5728Redis\u5b98\u65b9\u88ab\u79f0\u4e4b\u4e3a PEL(Pending Entries List)\uff0c\u8bb0\u5f55\u4e86\u5f53\u524d\u5df2\u7ecf\u88ab\u5ba2\u6237\u7aef\u8bfb\u53d6\u7684\u6d88\u606f\uff0c\u4f46\u662f\u8fd8\u6ca1\u6709 ack (Acknowledge character\uff1a\u786e\u8ba4\u5b57\u7b26\uff09\uff0c\u5b83\u7528\u6765\u786e\u4fdd\u5ba2\u6237\u7aef\u81f3\u5c11\u6d88\u8d39\u4e86\u6d88\u606f\u4e00\u6b21\uff0c\u800c\u4e0d\u4f1a\u5728\u7f51\u7edc\u4f20\u8f93\u7684\u4e2d\u9014\u4e22")))),(0,l.kt)("h3",{id:"282\u76f8\u5173\u6307\u4ee4"},"2.8.2\u76f8\u5173\u6307\u4ee4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u961f\u5217\u76f8\u5173\u6307\u4ee4"),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/9.5tr3fhqei0.webp",alt:"fasfdgfdgrd"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u7ec4\u76f8\u5173\u6307\u4ee4"),"\n",(0,l.kt)("img",{parentName:"p",src:"https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/10.92q7c5dw4p.webp",alt:"gfhh"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"\u5177\u4f53\u5b9e\u4f8b\u53c2\u89c1\u8111\u56fe")))}k.isMDXComponent=!0}}]);