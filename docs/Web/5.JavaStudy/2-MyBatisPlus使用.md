# 1-MyBatisPlus
:::tip
官方文档：https://baomidou.com/introduce/
:::

[MyBatis-Plus](https://github.com/baomidou/mybatis-plus) 是一个 [MyBatis](https://www.mybatis.org/mybatis-3/) 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。具有如下特性：

- **无侵入**：只做增强不做改变，引入它不会对现有工程产生影响，如丝般顺滑
- **损耗小**：启动即会自动注入基本 CURD，性能基本无损耗，直接面向对象操作
- **强大的 CRUD 操作**：内置通用 Mapper、通用 Service，仅仅通过少量配置即可实现单表大部分 CRUD 操作，更有强大的条件构造器，满足各类使用需求
- **支持 Lambda 形式调用**：通过 Lambda 表达式，方便的编写各类查询条件，无需再担心字段写错
- **支持主键自动生成**：支持多达 4 种主键策略（内含分布式唯一 ID 生成器 - Sequence），可自由配置，完美解决主键问题
- **支持ActiveRecord模式**：支持 ActiveRecord 形式调用，实体类只需继承 Model 类即可进行强大的 CRUD 操作
- **支持自定义全局通用操作**：支持全局通用方法注入（ Write once, use anywhere ）
- **内置代码生成器**：采用代码或者 Maven 插件可快速生成 Mapper 、 Model 、 Service 、 Controller 层代码，支持模板引擎，更有超多自定义配置等您来使用
- **内置分页插件**：基于 MyBatis 物理分页，开发者无需关心具体操作，配置好插件之后，写分页等同于普通 List 查询
- **分页插件支持多种数据库**：支持 MySQL、MariaDB、Oracle、DB2、H2、HSQL、SQLite、Postgre、SQLServer 等多种数据库
- **内置性能分析插件**：可输出 SQL 语句以及其执行时间，建议开发测试时启用该功能，能快速揪出慢查询
- **内置全局拦截插件**：提供全表 delete 、 update 操作智能分析阻断，也可自定义拦截规则，预防误操作

框架结构：
![image.png](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/20241231092111654.png)


原有的MyBatis，需要编写接口和mapper实现，手撸SQL实现数据库操作，在MyBatis-plus上，由于集成很多功能类，只需创建mapper接口文件，做好映射，就可以调用很多底层的CRUD方法，能够满足大多数功能场景。

# 2.使用方法

关于MyBatis-plus的详细配置参考官方文档：[配置](https://baomidou.com/getting-started/config/)

## 2.1 构建实体映射

首先需要创建数据库映射的实体类，加上@Entity和@TableName的注解，集成好需要的基类，一般业务中常用的是BaseEntity基类，提供了包括ID，创建时间创建人，修改时间修改人等功能字段。

创建mapper接口和mapper.xml文件，此处需要注意，其在java和resource目录下的路径必须一致，mapper接口就是抽象成与数据库交互的接口，通俗理解可以认为就是JPA中的Dao。mapper.xml文件就是用于实现复杂SQL交互，以及对数据格式封装的文件，我们如果有复杂SQL，是可以写在xml文件中，并且自定义返回格式。
![e3d795e31ca7bc5c26551479c57bf70.png](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/e3d795e31ca7bc5c26551479c57bf70.png)

对于业务场景，需要创建Service层来抽象业务逻辑，以及ServiceImpl来实现业务，MyBatis-plus提供的持久层接口，使用了Iservice接口，它封装了常见的 CRUD 操作，包括插入、删除、查询和分页等。通过继承 IService 接口，可以快速实现对数据库的基本操作，同时保持代码的简洁性和可维护性。

IService 接口中的方法命名遵循了一定的规范，如 get 用于查询单行，remove 用于删除，list 用于查询集合，page 用于分页查询，这样可以避免与 Mapper 层的方法混淆。提供了包括save，saveOrUpdate等等增删改查的功能，[详细文档](https://baomidou.com/guides/data-interface/)

## 2.2 BaseMapper和Iservice
:::tip
[参考博客1](https://blog.csdn.net/weixin_42516475/article/details/130115388)
[参考博客2](https://zhuanlan.zhihu.com/p/672246605)
:::
阅读官方提供的代码，可以发现其mapper继承BaseMapper，Service继承Iservice，这两个都提供了便捷的CRUD操作，那么他们有什么区别？我们又该如何进行使用呢？

**BaseMapper接口**

**[BaseMapper](https://link.zhihu.com/?target=https%3A//baomidou.com/pages/49cc81/%23mapper-crud-%25E6%258E%25A5%25E5%258F%25A3)** 接口是 MyBatis-Plus 提供的通用 Mapper 接口，它继承自 mybatis-plus 的 Mapper 接口，并扩展了一些常用的数据库操作方法。

说明:  
- 通用 CRUD 封装 `BaseMapper` 接口，为 `Mybatis-Plus` 启动时自动解析实体表关系映射转换为 `Mybatis` 内部对象注入容器  
- 泛型 `T` 为任意实体对象  
- 参数 `Serializable` 为任意类型主键 `Mybatis-Plus` 不推荐使用复合主键约定每一张表都有自己的唯一 `id` 主键  
- 对象 `Wrapper` 为 `条件构造器`

该接口的主要作用是定义 DAO 层的数据库操作方法，例如数据的增删改查等。开发者可以通过继承 BaseMapper 接口，并指定对应的实体类，即可直接使用这些通用方法，无需手动编写 SQL 语句，从而减少了代码量和重复劳动。简而言之，DAO接口的替代品，可以替换JPA中的DAO接口，无需写代码，也能进行CRUD。
```java
@Mapper
public interface UserMapper extends BaseMapper<User> {
    //...
}
```

![image.png](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/20241231095509146.png)


**IService 接口**

**[IService](https://link.zhihu.com/?target=https%3A//github.com/baomidou/mybatis-plus/blob/3.0/mybatis-plus-extension/src/main/java/com/baomidou/mybatisplus/extension/service/IService.java)** 接口是 MyBatis-Plus 提供的通用 Service 接口。

说明：  
- 通用 **[Service CRUD](https://link.zhihu.com/?target=https%3A//baomidou.com/pages/49cc81/%23service-crud-%25E6%258E%25A5%25E5%258F%25A3)** 封装 IService 接口，进一步封装 CRUD 采用 `get 查询单行` `remove 删除` `list 查询集合` `page 分页` 前缀命名方式区分 `Mapper` 层避免混淆  
- 泛型 `T` 为任意实体对象  
- 建议如果存在自定义通用 Service 方法的可能，请创建自己的 `IBaseService` 继承 `Mybatis-Plus` 提供的基类  
- 对象 `Wrapper` 为 `条件构造器`

开发者可以通过继承 IService 接口，并指定对应的实体类，即可直接使用这些通用方法，无需手动编写业务逻辑代码，使得代码更加简洁和易于维护。也就是说，集成到Service层中的接口，当我们实现Impl的时候，可以直接调用CRUD，减少了在impl中书写傻瓜，简易，复杂SQL场景。

```java
//Service定义
public interface UserService extends IService<User> {
    // 定义常用的业务逻辑方法
    // ...
}
```
```java
// impl实现
public class ServiceImpl<M extends BaseMapper<T>, T> implements IService<T> {
    //...
}
```
- M：Mapper 接口类型
- T：对应实体类的类型

![image.png](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/20241231095521853.png)


**使用场景区别**

1. 简单的数据库操作可以继承 BaseMapper 并添加新的数据库操作；
2. 简单的业务逻辑可以只使用 IService，IService 是对 BaseMapper 的扩展但仍需调用 Mapper；
3. BaseMapper 和 IService 主要区别： IService 提供批量处理操作（IService 和 BaseMapper 需一起使用），BaseMapper 则没有；

**实际使用过程**

1. 创建实体类继承基类
2. 创建mapper接口，mapper.xml文件
3. Service接口继承Iservice，实现Impl
4. mapper和Service都编写，在Service中引入mapper，使用谁的CRUD，根据场景和自己的心情来选吧

# 3.条件构造器
:::tip
[参考博客](https://blog.csdn.net/bird_tp/article/details/105587582)
:::

queryWrapper是mybatis plus中实现查询的对象封装操作类，他的层级关系如下：
![image.png](https://raw.githubusercontent.com/Rachel1771/Rachel-NoteBook-Img/main/rachel-notebook/20241231100136536.png)

- Wrapper ： 条件构造抽象类，最顶端父类，抽象类中提供4个方法西面贴源码展示
- AbstractWrapper ： 用于查询条件封装，生成 sql 的 where 条件
- AbstractLambdaWrapper ： Lambda 语法使用 Wrapper统一处理解析 lambda 获取 column。
- LambdaQueryWrapper ：看名称也能明白就是用于Lambda语法使用的查询Wrapper
- LambdaUpdateWrapper ： Lambda 更新封装Wrapper
- QueryWrapper ： Entity 对象封装操作类，不是用lambda语法
- UpdateWrapper ： Update 条件封装，用于Entity对象更新操作

:::info
**条件判断**：Wrapper 方法通常接受一个 `boolean` 类型的参数，用于决定是否将该条件加入到最终的 SQL 中。例如：
```java
queryWrapper.like(StringUtils.isNotBlank(name), Entity::getName, name)
            .eq(age != null && age >= 0, Entity::getAge, age);
```
**默认行为**：如果某个方法没有显式提供 `boolean` 类型的参数，则默认为 `true`，即条件总是会被加入到 SQL 中。

**泛型参数**：Wrapper 类是泛型类，其中 `Param` 通常指的是 Wrapper 的子类实例，如 QueryWrapper、UpdateWrapper 等。

**字段引用**：在 LambdaWrapper 中，`R` 代表的是一个函数，用于引用实体类的属性，例如 `Entity::getId`。而在普通 Wrapper 中，`R` 代表的是数据库字段名。

**字段名注意事项**：当 `R` 具体类型为 `String` 时，表示的是数据库字段名，而不是实体类数据字段名。如果字段名是数据库关键字，需要使用转义符包裹。

**集合参数**：如果方法的参数是 `Map` 或 `List`，当它们为空时，对应的 SQL 条件不会被加入到最终的 SQL 中。

**学习资源**：对于不熟悉的函数式编程概念，可以参考[学习资源](https://www.jianshu.com/p/613a6118e2e0)进行学习。
:::

:::danger
**RPC 调用中的 Wrapper**：不支持也不赞成在 RPC 调用中传输 Wrapper 对象。Wrapper 对象通常包含大量信息，不适合作为传输对象。正确的做法是定义一个 DTO（数据传输对象）进行传输，然后在被调用方根据 DTO 执行相应的操作。

**维护性**：避免在 Controller 层使用 Map 接收值，这种做法虽然开发时方便，但会给后续的维护带来困难。

**问题反馈**：不接受任何关于 RPC 传输 Wrapper 报错相关的 issue 或 pr。

**安全性**： `QueryWrapper` `UpdateWrapper` 字段部分，如有允许 `前端传入 SQL 片段` 这可能会导致 `SQL 注入风险` 需要校验，更多查看 [预防安全漏洞](https://baomidou.com/reference/about-cve/)。
:::

:::warning
QueryWrapper(LambdaQueryWrapper) 和 UpdateWrapper(LambdaUpdateWrapper) 的父类  
用于生成 sql 的 where 条件, entity 属性也用于生成 sql 的 where 条件  
注意：entity 生成的 where 条件与 使用各个 api 生成的 where 条件**没有任何关联行为**
:::

业务中常用LambdaWrapper，使用条件表达式获取参数，一方面代码优美，同时可以一定程度上避免SQL注入。工作场景用的eq比较多，详细的条件参考[官方文档](https://baomidou.com/guides/wrapper/)

