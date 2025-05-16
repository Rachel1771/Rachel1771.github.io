# 4-AOP切面编程

:::tip

:taco:[参考博客1](https://blog.csdn.net/weixin_44279264/article/details/119734699?ops_request_misc=%257B%2522request%255Fid%2522%253A%252226406c39dfe3c0b5b52d7dc45352eed0%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=26406c39dfe3c0b5b52d7dc45352eed0&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~baidu_landing_v2~default-2-119734699-null-null.142^v102^pc_search_result_base8&utm_term=AOP%E5%88%87%E9%9D%A2%E5%9B%BE%E8%A7%A3&spm=1018.2226.3001.4187)

:tangerine:[参考博客2](https://blog.csdn.net/m0_73837751/article/details/142341367?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522128d930703527c555867fdfba87dcded%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=128d930703527c555867fdfba87dcded&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduend~default-2-142341367-null-null.142^v102^pc_search_result_base8&utm_term=AOP%E5%88%87%E9%9D%A2&spm=1018.2226.3001.4187)

:::

## 1. 什么是Spring的AOP]?

>AOP又叫面向切面编程,是对传统的面向对象编程的一个补充,主要的操作对象就是切面,可以简单的理解它是**贯穿于方法之中,在方法执行前、执行时、执行后、返回值后、异常后要执行的操作**。
>相当于将我们原本一条线执行的程序在中间切开加入一些其他操作。
>
>等同于我们原来的程序按一条直线执行，然后我们在这个直线的开头，中间，或者结尾，用另外的线给它接上去，构建新的关系，不会影响原来的执行，如下是切面变成的图解：

![image-20250516152035212](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/image-20250516152035212.png)

---

可以看到的是，在方法执行的时候，从中间抽出来，执行一段新的逻辑(往往是日志)，不影响原来的执行情况。说白了就是我们想监控一个方法的执行情况，用切面就对了，切面最大的作用，就是打日志。

日志记录、事务管理、性能监控等功能通常**分散在多个类中**，导致代码重复、难以维护。这些功能模块也被叫做横切关注点，而 AOP 允许我们将这些关注点**集中到一个地方（切面）**，就相当于包装在一起，并自动织入到相关的业务逻辑中，使得代码更加简洁、可维护。

## 2.AOP核心

### 2.1.横切关注点
 所谓“横切关注点”，就是那些跟核心业务逻辑没直接关系，但又贯穿多个模块的功能。（将这些功能被称作横切关注点）。

常见的横切关注点有如下这些：

- 日志记录：可以自动在每个方法调用前后记录日志，节省手动添加日志的工作
- 事务管理：可以在数据库操作时，自动开启、提交或回滚事务。
- 性能监控：可以在方法执行前后记录时间，监控方法的执行性能。

### 2.2.切面 

切面是横切关注点的模块化实现。它可以包含多个“**通知”（Advice）**和**“切入点”（Pointcut）**，定义了在哪里以及如何实现横切逻辑。

### 2.3.通知
通知定义了切面的具体行为，也就是在何时、何地、以何种方式对目标方法进行增强。根据增强发生的时机，通知分为：

- 前置通知（Before Advice）：在方法调用前执行。
- 后置通知（After Advice）：在方法调用后执行。
- 返回通知（After Returning Advice）：在方法成功返回后执行。
- 异常通知（After Throwing Advice）：在方法抛出异常后执行。
- 环绕通知（Around Advice）：在方法执行的前后都执行，可以完全控制方法的执行过程。

### 2.4.切入点 
在 Spring AOP 中，切入点（Pointcut）是用来定义你想要拦截哪些方法。 

切入点决定了拦截点，即哪些方法会被增强（例如，哪些方法会被日志记录或事务管理等功能拦截）。
配合“通知”（Advice）一起工作，通知决定了在方法执行前、执行后或抛出异常时执行什么逻辑。

### 2.5.连接点

 连接点就是你业务逻辑层中可以插入横切关注点的位置（简单来说就是业务逻辑层中的方法），因为横切关注点的这些功能是需要在你调用业务逻辑层的方法伴随着进行。程序执行当中的一个方法调用、一个异常抛出都可以作为连接点。

###  2.6.织入

织入是将切面与目标对象（业务代码）结合的过程。在 Spring AOP 中，织入通常发生在运行时，通过动态代理来完成。代理对象在调用目标方法之前，会先执行切面中定义的通知逻辑（如记录日志），然后再执行实际的业务逻辑 。

## 3.AOP编程

### 3.1.定义注解

- 我们需要定注解，作用就是标记出来哪里需要进行切开，哪里需要走切面的逻辑，使用注解，可以在方法，或者其他类型上标记，在SpringBoot执行的时候，扫描到这个注解，再结合定义的切面类，即可切面编程。

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Log {
    String remark() default "";
}
```

- 例如定义Log注解
- `String remark() default ""`是用来注解提供解释
- 定义在方法执行上切面

## 3.2.定义切面类

- 注解有了，告诉了SpringBoot哪里要进行切面了，那就是要定义切面逻辑了
- 定义切面类，书写切面逻辑

- 类上标记两个注解`@Aspect`,`@Component`，告诉SpringBoot这是切面类，创建组件

#### 3.2.1.定义切面入口

```java
@Pointcut(value = "@annotation(com.topband.mom.annotation.Log)")
    public void saveLogPointCut(){

    }
```

告诉容器，标记了@Log注解的，就进入切面

#### 3.2.2.切面逻辑

```java
@Around("saveLogPointCut()")
    public Object saveLog(ProceedingJoinPoint pjp) throws Throwable{
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // 起始时间
        String startTimeStr = df.format(new Date());
        String paramsJson = "{}";
        String resultMessage = ""; // 日志信息
        String status = "成功"; // 默认成功
        ------------
    }
```

- 定义一些日志记录时间，解析参数

```java
// 获取接口(方法)的参数
        Object[] args = pjp.getArgs();
        if(args != null && args.length > 0){
            for (Object arg : args) {
                if (arg instanceof CheckAndPass) {
                    paramsJson = JSON.toJSONString(arg);
                    break;
                }
            }
        }
```

- `pjp.getArgs()`拿到接口参数，转成实体类，解析Json存储参数，方便观察数据

```java
		Object methodResult = null;
        String code = "";
        try {
            // 执行接口(方法)
            methodResult = pjp.proceed();
            // 接口返回接口判断 -1 则取状态"失败"
            if(methodResult instanceof OperationResult){
                OperationResult result = (OperationResult) methodResult;
                resultMessage = result.getMessage();
                code = result.getCode();
                if(code.equals("-1")){
                    status = "失败";
                }
            }
            else if(methodResult != null){
                resultMessage = String.valueOf(methodResult);
            }
            else{
                resultMessage = "无返回值";
            }
        }catch (Throwable e){
            status = "失败"; // 明确标记为失败
            Throwable cause = e;
            while (cause.getCause() != null) {
                cause = cause.getCause();
            }
            resultMessage = cause.getMessage() != null ? cause.getMessage() : e.toString(); // 获取根异常或当前异常信息
            logger.error("方法 {} 执行异常: {}", pjp.getSignature().getName(), resultMessage, e);
            throw e;
        }finally {
            // 编辑参数 保存日志的逻辑
        }
```

- `pjp.proceed()`执行方法，记录日志

```java
@Aspect
@Component
public class Aspect {

    private static final Logger logger = LoggerFactory.getLogger(CheckPassAspect.class);

    @Resource
    private CheckAndPassLogDao checkAndPassLogDao;

    /**
     * 切面入口  标记注解Log进入
     */
    @Pointcut(value = "@annotation(com.topband.mom.annotation.Log)")
    public void saveLogPointCut(){

    }

    /**
     * 切面记录接口执行日志
     * @param pjp
     * @return
     * @throws Throwable
     */
    @Around("saveLogPointCut()")
    public Object saveLog(ProceedingJoinPoint pjp) throws Throwable{
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); // 起始时间
        String startTimeStr = df.format(new Date());
        String paramsJson = "{}";
        String resultMessage = ""; // 日志信息
        String status = "成功"; // 默认成功

        // 获取接口(方法)的参数
        Object[] args = pjp.getArgs();
        if(args != null && args.length > 0){
            for (Object arg : args) {
                if (arg instanceof CheckAndPass) {
                    paramsJson = JSON.toJSONString(arg);
                    break;
                }
            }
        }

        Object methodResult = null;
        String code = "";
        try {
            // 执行接口(方法)
            methodResult = pjp.proceed();
            // 接口返回接口判断 -1 则取状态"失败"
            if(methodResult instanceof OperationResult){
                OperationResult result = (OperationResult) methodResult;
                resultMessage = result.getMessage();
                code = result.getCode();
                if(code.equals("-1")){
                    status = "失败";
                }
            }
            else if(methodResult != null){
                resultMessage = String.valueOf(methodResult);
            }
            else{
                resultMessage = "无返回值";
            }
        }catch (Throwable e){
            status = "失败"; // 明确标记为失败
            Throwable cause = e;
            while (cause.getCause() != null) {
                cause = cause.getCause();
            }
            resultMessage = cause.getMessage() != null ? cause.getMessage() : e.toString(); // 获取根异常或当前异常信息
            logger.error("方法 {} 执行异常: {}", pjp.getSignature().getName(), resultMessage, e);
            throw e;
        }finally {
            // 编辑参数 保存日志逻辑
        }

        return methodResult;
    }
}
```

- 完整代码如上
- `@Around`环绕方法执行