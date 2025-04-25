# 3-Spring Data JPA

:::tips

:ghost: [中文文档](https://springdoc.cn/spring-data-jpa/)

本文简单介绍下在Java中使用JPA工具进行CRUD完成开发，不涉及底层，旨在如何使用

:::

:::info 

Spring Data JPA, part of the larger Spring Data family, makes it easy to easily implement JPA-based (Java Persistence API) repositories. It makes it easier to build Spring-powered applications that use data access technologies.

Implementing a data access layer for an application can be quite cumbersome. Too much boilerplate code has to be written to execute the simplest queries. Add things like pagination, auditing, and other often-needed options, and you end up lost.

Spring Data JPA aims to significantly improve the implementation of data access layers by reducing the effort to the amount that’s actually needed. As a developer you write your repository interfaces using any number of techniques, and Spring will wire it up for you automatically. You can even use custom finders or query by example and Spring will write the query for you!

Spring Data JPA 是 Spring Data 项目的一部分，它提供了一种简化的数据访问方式，用于与关系型数据库进行交互。它基于 Java Persistence API（JPA） 标准，并提供了一套简洁的 API 和注解，使开发人员能够通过简单的 Java 对象来表示数据库表，并通过自动生成的 SQL 语句执行常见的 CRUD 操作。Spring Data JPA 通过封装 JPA 的复杂性，简化了数据访问层的开发工作，使开发人员能够更专注于业务逻辑的实现。它还提供了丰富的查询方法的定义、分页和排序支持、事务管理等功能，使开发人员能够更方便地进行数据访问和操作。

:::

> spirng data jpa是spring提供的一套简化JPA开发的框架,按照约定好的规则进行**方法命名**去写dao层接口,就可以
> 在不写接口实现的情况下,实现对数据库的访问和操作。同时提供了很多除了CRUD之外的功能,如分页、排序、复杂查
> 询等等。

## 1.依赖导入

`<dependency>`导入jpa依赖：

```xml
<dependency>
     <groupId>org.springframework.boot</groupId>
     <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```

## 2.Spring Data repository

Spring Data repository 抽象的中心接口是 `Repository`。它把要管理的 domain 类以及 domain 类的ID类型作为泛型参数。这个接口主要是作为一个标记接口，用来捕捉工作中的类型，并帮助你发现扩展这个接口的接口。 [`CrudRepository`](https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/CrudRepository.html) 和 [`ListCrudRepository`](https://docs.spring.io/spring-data/commons/docs/current/api/org/springframework/data/repository/ListCrudRepository.html) 接口为被管理的实体类提供复杂的CRUD功能。

**`CrudRepository` 接口**

```java
public interface CrudRepository<T, ID> extends Repository<T, ID> {

  <S extends T> S save(S entity);      // 保存实体

  Optional<T> findById(ID primaryKey); // 根据ID查询
 
  Iterable<T> findAll();   // 全查询               

  long count();           // 返回实体数量    

  void delete(T entity);   // 根据实体删除            

  boolean existsById(ID primaryKey);   //根据ID判断实体是否存在

  // … more functionality omitted.
}
```

在Java中，我们常用的`Repository`就是`JpaRepository`，设计`Dao`接口继承`JpaRepository`，托管CRUD操作。

**前提：** 导入XML依赖，创建Entiy实体，创建Dao接口

```java
public class User{
    String name;
    String sex;
}
public interface UserDao extends JpaRepository<User, String>{
}
```

通过这种方式，就可以在Dao中声明Query进行数据库操作了。

**JpaRepository自带CRUD源码：**

```java
@NoRepositoryBean
public interface JpaRepository<T, ID> extends PagingAndSortingRepository<T, ID>, QueryByExampleExecutor<T> {
    List<T> findAll();

    List<T> findAll(Sort var1);

    List<T> findAllById(Iterable<ID> var1);

    <S extends T> List<S> saveAll(Iterable<S> var1);

    void flush();

    <S extends T> S saveAndFlush(S var1);

    void deleteInBatch(Iterable<T> var1);

    void deleteAllInBatch();

    T getOne(ID var1);

    <S extends T> List<S> findAll(Example<S> var1);

    <S extends T> List<S> findAll(Example<S> var1, Sort var2);
}
```

 ### 2.1 .Query创建

一些例子：
```java
List<Person> findByEmailAddressAndLastname(EmailAddress emailAddress, String lastname);

  // Enables the distinct flag for the query
  List<Person> findDistinctPeopleByLastnameOrFirstname(String lastname, String firstname);
  List<Person> findPeopleDistinctByLastnameOrFirstname(String lastname, String firstname);

  // Enabling ignoring case for an individual property
  List<Person> findByLastnameIgnoreCase(String lastname);
  // Enabling ignoring case for all suitable properties
  List<Person> findByLastnameAndFirstnameAllIgnoreCase(String lastname, String firstname);
```

解析查询方法名称分为主语和谓语。第一部分（`find…By`, `exists…By`）定义了查询的主语，第二部分形成谓语。引入句（主语）可以包含进一步的表达。在 `find`（或其他引入关键词）和 `By` 之间的任何文本都被认为是描述性的，除非使用一个限制结果的关键词，如 `Distinct` 在要创建的查询上设置一个不同的标志，注意使用驼峰命名。

- 表达式通常是属性遍历与可以串联的运算符的组合。可以用 `AND` 和 `OR` 来组合属性表达式。还可以得到对属性表达式的运算符的支持，如 `Between`, `LessThan`, `GreaterThan`, 和 `Like`。支持的运算符可能因 datastore 的不同而不同
- 方法解析器支持为单个属性（例如，`findByLastnameIgnoreCase(…)`）或支持忽略大小写的类型的所有属性（通常是字符串实例—例如，`findByLastnameAndFirstnameAllIgnoreCase`(…)）设置忽略大小写标志。
- 你可以通过在引用属性的查询方法中附加一个 `OrderBy` 子句，并提供一个排序方向（`Asc` 或 `Desc`）来应用静态排序。
- 也可以使用@Query注解来设置指定的SQL查询，注意开启`nativeQuery = true`

```java
@Query(value = "select * from User where name=:name",nativeQuery = true)
List<User> findByName(@Param("name")String name);
```

传参注意紧跟`=:`不要带空格

### 2.2.特殊参数处理

基础设施还能识别某些特定的类型，如 `Pageable` 和 `Sort`

```java
Page<User> findByLastname(String lastname, Pageable pageable);
List<User> findByLastname(String lastname, Sort sort);

Page<User> users = repository.findAll(PageRequest.of(1, 20));
```

- Sort` 和 `Pageable实际调用时不能为 `null`。如果不想应用任何排序或分页，请使用 `Sort.unsorted()` 和 `Pageable.unpaged()`

## 3.JpaSpecificationExecutor

JPA用Query的方式能够处理简单的数据库操作，稍微复杂的，也可以通过@Query注解的方式自定义SQL完成任务，但遇到一些场景，我们无法每次都针对其设置一条SQL，或者预先写好那么多SQL，这时候需要用到`JpaSpecificationExecutor`这个接口，进行动态查询了。

**接口源码：**

```java
public interface JpaSpecificationExecutor<T> {
    Optional<T> findOne(@Nullable Specification<T> var1);

    List<T> findAll(@Nullable Specification<T> var1);

    Page<T> findAll(@Nullable Specification<T> var1, Pageable var2);

    List<T> findAll(@Nullable Specification<T> var1, Sort var2);

    long count(@Nullable Specification<T> var1);
}
```

跟JpaRepository有点像，不过这里值得注意的是，接口中定义的每一个方法都有一个Specification< T >参数，这个是什么呢，因为JpaSpecificationExecutor是为了让我们获得动态查询的功能，所谓动态查询就是可以根据业务逻辑随时改变查询的条件，Specification就是代表查询的条件，我们可以动态去拼接不同的查询条件，用调用这里的方法的形式来实现我们的查询，只需要把查询条件以参数的形式(Specification)传递过来就可以了。

### 3.1.核心参数Specification

Specification是一个接口，也代表我们的查询条件，通过实现这个接口来自定义查询条件:

```java
    Specification<T> spec = new Specification<T>() {
    	@Override
    	public Predicate toPredicate(Root<T> root, CriteriaQuery<?> query, CriteriaBuilder criteriaBuilder) {
             return null;
        }
     }
```

- Root：查询的根对象（查询的任何属性都可以从根对象中获取）
- CriteriaQuery：顶层查询对象，自定义查询方式（暂时不做了解）
- CriteriaBuilder：查询的构造器，封装了很多的查询条件

### 3.2.使用

首先需要在Dao中继承JpaSpecificationExecutor。然后即可在ServiceImpl中使用其继续努力呢动态条件查询，类似MyBatis-plus的作用。附上一个代码：

```java
Specification<SfcReplace> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();
            if(StringUtils.isNotBlank(param.getSite())) {
                predicates.add(cb.equal(root.get("site"), param.getSite()));
            }
            if(StringUtils.isNotBlank(param.getShopOrder())) {
                predicates.add(cb.equal(root.get("shopOrder"), param.getShopOrder()));
            }
            if(StringUtils.isNotBlank(param.getOldSfc())) {
                predicates.add(cb.equal(root.get("oldSfc"), param.getOldSfc()));
            }
            if(StringUtils.isNotBlank(param.getNewSfc())) {
                predicates.add(cb.equal(root.get("newSfc"), param.getNewSfc()));
            }
            if(StringUtils.isNotBlank(param.getOperator())) {
                predicates.add(cb.equal(root.get("operator"), param.getOperator()));
            }
            if(StringUtils.isNotBlank(param.getLastTime())){
                String[] split = param.getLastTime().split(" - ");
                try{
                    String startTIme = split[0];
                    String endTIme = split[1];
                    predicates.add(cb.greaterThanOrEqualTo(root.get("operatedTime"), startTIme));
                    predicates.add(cb.lessThanOrEqualTo(root.get("operatedTime"), endTIme));
                }catch (Exception e){
                    throw new RuntimeException("日期格式转换失败");
                }
            }
            if(StringUtils.isBlank(param.getLastTime())){
                LocalDateTime now = LocalDateTime.now();
                LocalDateTime threeMonthsAgo = now.minusMonths(3);
                Date defaultStartTime = Date.from(threeMonthsAgo.atZone(ZoneId.systemDefault()).toInstant());
                Date defaultEndTime = new Date();
                predicates.add(cb.between(root.get("operatedTime"), dateFormat.format(defaultStartTime), dateFormat.format(defaultEndTime)));
            }
            return cb.and(predicates.toArray(new Predicate[0]));
        };
```

上述是一个多条件查询的示例

## 4.其他

在研究JpaSpecificationExecutor如何进行连表查询的时候，偶然学到了另一个API：`Criteria API`，使用其也可以构建动态查询，同时可以连表。

**初始声明：**

```java
CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Tuple> cq = cb.createTupleQuery();
        // 主表
        Root<SolderCabinetOperationRecord> logRoot = cq.from(SolderCabinetOperationRecord.class);
        // 关联用户表
        Root<SysUser> userRoot = cq.from(SysUser.class);
```

可以看到，使用Root<T>声明了两张表，用于关联字段。

```java
List<Predicate> predicates = new ArrayList<>();
predicates.add(cb.equal(logRoot.get("operationPerson"), userRoot.get("thirdUid")));
```

**查询：**

```java
cq.multiselect(logRoot.alias("log"), userRoot.get("userName").alias("userName")).where(predicates.toArray(new Predicate[0]));
        List<Tuple> tuples = entityManager.createQuery(cq).getResultList();
```

- alias是命名为别名，类似as一样

- 返回主表 `SolderCabinetOperationRecord` 的完整实体，并赋予别名 `"log"`（后续可通过 `Tuple.get("log")` 获取）
- `userRoot.get("userName").alias("userName")`
  只返回关联表 `SysUser` 的 `userName` 字段，并赋予别名 `"userName"`（通过 `Tuple.get("userName")` 获取）

- .where就是添加条件
- JPA用Turple封装结果，类似Map结构，可以转换成自己想要的结果类型\







