"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,m=u["".concat(l,".").concat(d)]||u[d]||k[d]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c="1-Docker\u5165\u95e8",i={unversionedId:"Web/Docker/Docker\u5165\u95e8",id:"Web/Docker/Docker\u5165\u95e8",title:"1-Docker\u5165\u95e8",description:"1.\u5bb9\u5668&\u955c\u50cf&\u4ed3\u5e93",source:"@site/docs/Web/4.Docker/1-Docker\u5165\u95e8.md",sourceDirName:"Web/4.Docker",slug:"/Web/Docker/Docker\u5165\u95e8",permalink:"/docs/Web/Docker/Docker\u5165\u95e8",draft:!1,editUrl:"https://github.com/Rachel1771/Rachel1771.github.io/docs/Web/4.Docker/1-Docker\u5165\u95e8.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"1.\u6301\u4e45\u5316",permalink:"/docs/Web/Redis/Redis \u6301\u4e45\u5316"},next:{title:"1-SpringBoot\u7684\u56fd\u9645\u5316",permalink:"/docs/Web/JavaStudy/Web\u56fd\u9645\u5316"}},l={},p=[{value:"1.\u5bb9\u5668&amp;\u955c\u50cf&amp;\u4ed3\u5e93",id:"1\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93",level:2},{value:"1.1 \u955c\u50cf",id:"11-\u955c\u50cf",level:3},{value:"1.2 \u5bb9\u5668",id:"12-\u5bb9\u5668",level:3},{value:"1.3 \u4ed3\u5e93",id:"13-\u4ed3\u5e93",level:3},{value:"2.\u5e38\u7528\u6307\u4ee4",id:"2\u5e38\u7528\u6307\u4ee4",level:2}],s={toc:p},u="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"1-docker\u5165\u95e8"},"1-Docker\u5165\u95e8"),(0,o.kt)("h2",{id:"1\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93"},"1.\u5bb9\u5668&\u955c\u50cf&\u4ed3\u5e93"),(0,o.kt)("h3",{id:"11-\u955c\u50cf"},"1.1 \u955c\u50cf"),(0,o.kt)("p",null,"\u955c\u50cf\u5c31\u50cf\u662f\u4e00\u4e2a\u76ee\u6807,\u53ef\u4ee5\u901a\u8fc7\u8fd9\u4e2a\u76ee\u6807\u6784\u5efa\u5f88\u591a\u5bb9\u5668,\u5bb9\u5668\u63d0\u4f9b\u670d\u52a1.\u955c\u50cf\u662f\u4e00\u79cd\u8f7b\u91cf\u7ea7,\u53ef\u4ee5\u6267\u884c\u7684\u8f6f\u4ef6\u5305,\u7528\u6765\u6253\u5305\u8f6f\u4ef6\u8fd0\u884c\u73af\u5883\u548c\u57fa\u4e8e\u8fd0\u884c\u73af\u5883\u5f00\u53d1\u7684\u8f6f\u4ef6\uff0c\u4ed6\u5305\u542b\u8fd0\u884c\u67d0\u4e2a\u8f6f\u4ef6\u6240\u9700\u7684\u6240\u6709\u5185\u5bb9\n\u5305\u62ec",(0,o.kt)("strong",{parentName:"p"},"\u4ee3\u7801\u3001\u8fd0\u884c\u65f6\u5e93\u3001\u73af\u5883\u53d8\u91cf\u548c\u914d\u7f6e\u6587\u4ef6"),"\u3002"),(0,o.kt)("p",null,"\u64cd\u4f5c\u7cfb\u7edf\u5206\u4e3a",(0,o.kt)("strong",{parentName:"p"},"\u5185\u6838"),"\u8ddf",(0,o.kt)("strong",{parentName:"p"},"\u7528\u6237\u7a7a\u95f4"),",Linux\u542f\u52a8\u5185\u6838\u540e\u5c31\u4f1a\u6302\u5728root\u6587\u4ef6\u7cfb\u7edf\u63d0\u4f9b\u7528\u6237\u7a7a\u95f4\u652f\u6301.\u955c\u50cf\u5c31\u76f8\u5f53\u4e8e\u662f\u4e00\u4e2a\u6587\u4ef6\u7cfb\u7edf."),(0,o.kt)("h3",{id:"12-\u5bb9\u5668"},"1.2 \u5bb9\u5668"),(0,o.kt)("p",null,"\u5bb9\u5668\u548c\u955c\u50cf\u7684\u5173\u7cfb\u5c31\u7c7b\u4f3c\u5b9e\u4f8b\u8ddf\u7c7b\u4e00\u6837,\u901a\u8fc7\u955c\u50cf\u6784\u5efa\u5bb9\u5668.\u5bb9\u5668\u7684\u5b9e\u8d28\u662f\u8fdb\u7a0b\uff0c\u4f46\u4e0e\u76f4\u63a5\u5728\u5bbf\u4e3b\u6267\u884c\u7684\u8fdb\u7a0b\u4e0d\u540c\uff0c\u5bb9\u5668\u8fdb\u7a0b\u8fd0\u884c\u4e8e\u5c5e\u4e8e\u81ea\u5df1\u7684\u72ec\u7acb\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Linux_namespaces"},"\u547d\u540d\u7a7a\u95f4"),"\u3002\u56e0\u6b64\u5bb9\u5668\u53ef\u4ee5\u62e5\u6709\u81ea\u5df1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u6587\u4ef6\u7cfb\u7edf\u3001\u81ea\u5df1\u7684\u7f51\u7edc\u914d\u7f6e\u3001\u81ea\u5df1\u7684\u8fdb\u7a0b\u7a7a\u95f4\uff0c\u751a\u81f3\u81ea\u5df1\u7684\u7528\u6237 ID \u7a7a\u95f4\u3002"),(0,o.kt)("p",null,"\u5bb9\u5668\u5185\u7684\u8fdb\u7a0b\u662f\u8fd0\u884c\u5728\u4e00\u4e2a\u9694\u79bb\u7684\u73af\u5883\u91cc\uff0c\u4f7f\u7528\u8d77\u6765\uff0c\u5c31\u597d\u50cf\u662f\u5728\u4e00\u4e2a\u72ec\u7acb\u4e8e\u5bbf\u4e3b\u7684\u7cfb\u7edf\u4e0b\u64cd\u4f5c\u4e00\u6837\u3002\u8fd9\u79cd\u7279\u6027\u4f7f\u5f97\u5bb9\u5668\u5c01\u88c5\u7684\u5e94\u7528\u6bd4\u76f4\u63a5\u5728\u5bbf\u4e3b\u8fd0\u884c\u66f4\u52a0\u5b89\u5168\u3002\u4e5f\u56e0\u4e3a\u8fd9\u79cd\u9694\u79bb\u7684\u7279\u6027\uff0c\u5f88\u591a\u4eba\u521d\u5b66 Docker \u65f6\u5e38\u5e38\u4f1a\u6df7\u6dc6\u5bb9\u5668\u548c\u865a\u62df\u673a\u3002"),(0,o.kt)("h3",{id:"13-\u4ed3\u5e93"},"1.3 \u4ed3\u5e93"),(0,o.kt)("p",null,"\u955c\u50cf\u6784\u5efa\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u5728\u5f53\u524d\u5bbf\u4e3b\u673a\u4e0a\u8fd0\u884c\uff0c\u4f46\u662f\uff0c\u5982\u679c\u9700\u8981\u5728\u5176\u5b83\u670d\u52a1\u5668\u4e0a\u4f7f\u7528\u8fd9\u4e2a\u955c\u50cf\uff0c\u6211\u4eec\u5c31\u9700\u8981\u4e00\u4e2a\u96c6\u4e2d\u7684\u5b58\u50a8\u3001\u5206\u53d1\u955c\u50cf\u7684\u670d\u52a1\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://yeasy.gitbook.io/docker_practice/repository/registry"},"Docker Registry")," \u5c31\u662f\u8fd9\u6837\u7684\u670d\u52a1\u3002"),(0,o.kt)("p",null,"Docker Registry \u516c\u5f00\u670d\u52a1\u662f\u5f00\u653e\u7ed9\u7528\u6237\u4f7f\u7528\u3001\u5141\u8bb8\u7528\u6237\u7ba1\u7406\u955c\u50cf\u7684 Registry \u670d\u52a1\u3002\u4e00\u822c\u8fd9\u7c7b\u516c\u5f00\u670d\u52a1\u5141\u8bb8\u7528\u6237\u514d\u8d39\u4e0a\u4f20\u3001\u4e0b\u8f7d\u516c\u5f00\u7684\u955c\u50cf\uff0c\u5e76\u53ef\u80fd\u63d0\u4f9b\u6536\u8d39\u670d\u52a1\u4f9b\u7528\u6237\u7ba1\u7406\u79c1\u6709\u955c\u50cf\u3002"),(0,o.kt)("h2",{id:"2\u5e38\u7528\u6307\u4ee4"},"2.\u5e38\u7528\u6307\u4ee4"),(0,o.kt)("p",null,"\u76ee\u524d\u7684\u5b66\u4e60\u53ea\u9700\u8981\u80fd\u591f\u8fdb\u884c\u4e00\u4e9b\u7b80\u5355\u7684Docker\u64cd\u4f5c\u5373\u53ef"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps -a   //\u67e5\u8be2\u5f53\u524d\u8fd0\u884c\u7684docker\n\ndocker run [\u955c\u50cfID] //\u8fd0\u884c\u67d0\u4e2a\u955c\u50cf\n\ndocker images ls //\u5217\u51fa\u955c\u50cf\n\ndocker stop [\u955c\u50cfID]  //\u505c\u6b62\u5bb9\u5668\n\ndocker kill [\u955c\u50cfID] //\u6740\u6b7b\u5bb9\u5668\n\ndocker exec -it [\u5bb9\u5668ID] /bin/bash  //\u8fdb\u5165\u5bb9\u5668\u7684shell\u73af\u5883\n\nls //\u67e5\u770b\u5bb9\u5668\u5185\u7684\u60c5\u51b5\n\ncd /xxxx/xxxx //\u8fdb\u5165\u5bb9\u5668\u7684\u67d0\u4e2a\u6587\u4ef6\n\ncat [\u6587\u4ef6]  //\u67e5\u770b\u4ee3\u7801\u6587\u4ef6\n\n")))}k.isMDXComponent=!0}}]);