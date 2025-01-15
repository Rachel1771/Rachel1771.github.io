# 10-MES开发笔记

## 1.MES系统

**制造执行系统（Manufacturing Execution System，简称MES）** 是一种针对制造业设计的集成型软件系统，其目标在于提高整个生产过程的执行效率、协调各个生产阶段、实时监控生产活动并提供详尽的生产数据。MES系统在现代制造环境中充当关键角色，帮助企业实现更高水平的生产效能，更有效地满足市场需求。

MES系统作为一个整合性的解决方案，涵盖了从订单接收、生产计划、生产执行到产品交付等多个生产阶段，主要负责**生产什么、如何生产、生产了什么**等问题。其核心目标是通过协调和优化这些生产活动，确保企业能够以最有效的方式生产高质量的产品。

![image-20250115170359071](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115170359071.png)

:::tip

所用的MES系统非常老旧，前后端不分离的老系统，使用jsp开发模式，基本都是在VNC中进行简单的jsp编写或者更改数据库sql以达到目的

- jsp开发
- sql动态渲染

:::

## 2.开发模式

:::info

目前遇到两种常用的手段：

1. 编写jsp，手动利用Ejb实现假的前后端分离
2. 使用rep_code控制一些动态逻辑

:::

### 2.1.Java Server Pages

一种过时的技术，简单来说就是将html和java代码嵌在一起，可以边写前端边写Java来实现交互。

常用模式：

1. 编写前端的jsp代码，定义好前端界面
2. 监听事件触发function和ajax调用
3. ajax传参中，传入业务的method，接口中根据method判断执行什么逻辑(一个接口多个需求)
4. 编写Ejb，也就是Java接口代码
5. 通过method判断走什么业务逻辑

```jsp
$.ajax({
    type:"post", 
    url:G.PATH+"xxx.jsp",
    data:debindData,
    async:false,
   success:function(result){ 
		var o = JSON.parse(result);
        if(o,status == "Y"){
            $("#div_mess").css("color","green");
            $("#div_mess").html(o.message);
			$("#sfc").val("");
			$("#sfc").focus();
		}else{
			$("#ext_sfc").val("");
			$("#sfc").val("");
			$("#ext_sfc").focus();
			$("#div_mess").css("color","red");								$("#div_mess").html(o.message);
	}},
	error:function(XMLHttpRequest, textStatus, ex){  
		alert(XMLHttpRequest.responseText);
	}
});
```

```java
<%
	SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // 设置日期格式
	String newdate = df.format(new Date()); // new Date()为获取当前系统时间
	String method = request.getParameter("method");
	String site = request.getParameter("site");
	String ext_sfc = request.getParameter("ext_sfc");
	String sfc = request.getParameter("sfc");
	String activityId = request.getParameter("activity_id");
	CommonInterface common = null;
	JSONObject o = new JSONObject();
	ReportConfigurationInterface repEjb = (ReportConfigurationInterface)ServiceLocator.getEJB("extbase/ReportConfigurationBean");
	try {
		common = (CommonInterface) ServiceLocator
				.getEJB("tb/extcommon");
		if (method.equals("check")) {
			........
		}
		else if(method.equals("debind")){
			.........
		}
		else if(method.equals("debindAll")){
			
			o.put("status", "Y");
			o.put("message", "箱码"+packSfc+"全部移除成功");
		}
		
		out.println(o.toString());
	} catch (Exception e) {
		o.put("status", "N");
		o.put("message", e.getMessage());
		out.println(o.toString());
	}
%>
```

java通过repEjb来获取到公共的一个执行sql的接口，封装好了执行sql的方法，通过repEjb执行sql，method判断执行哪部分业务，JSONObject o 用来返回执行结果和信息，方便前端代码回调(无法打断点，只能通过这种方式来调试)。

### 2.2.REP_CODE

:::info

上述的开发场景相当反人类，每次都上去VNC该代码，还要重命名(服务器同名有缓存)加部署才能看到结果，过程繁琐。为了避免每次都去服务器该代码，一些可以配置的规则，采用SQL动态配置成了一个不错的选择。这里的REP_CODE就是这种模式，通过配置REP_CODE来指定执行SQL以及界面渲染(这个我不会)。

:::

**activityid：** MES系统的菜单配置称之为作业，每一个界面-->作业，对应一个唯一的activityid，这个ID会在请求时候拼接到url后面，在MES系统设计中这是一个默认传参。下面的配置根据这个ID做文章。

首先在作业维护中新加规则：

![image-20250115172817375](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115172817375.png)

该操作会在表activity_option中生成一条规则记录，按照Key-Value存在：

```java
<EXEC_UNIT_OPTION：key,SETTING：value>
```

把唯一设计的REP_CODE存在SETTING中。

REP_CODE表中通过REP_CODE获取到RS_SQL，即可动态配置SQL并且执行，此处需与业务对接好传入以及传出的格式。

## 3.作业配置

```html
1.写好前后端的jsp代码
2.如果不是初版，改名后丢到服务器对应路径下
```

**作业维护配置：**

![image-20250115173444230](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115173444230.png)

- 作业输入框：未来的activity_id
- 全打勾
- 类/程序输入框，服务器中jsp文件的路径
- 选择jsp

**作业组：**

![image-20250115173631588](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115173631588.png)

- 作业组中加到菜单中
- 也就是该作业的上上级菜单

**用户组维护：**

![image-20250115173748345](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115173748345.png)

![image-20250115173815978](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250115173815978.png)

- 选择管理员用户组
- 权限中找到刚刚加入的作业打勾