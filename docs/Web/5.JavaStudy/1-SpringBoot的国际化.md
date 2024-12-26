# 1-SpringBoot的国际化
## 1.1 i18n
国际化（internationalization）是设计和制造领域适应不同区域要求的产品的一种方式。它要求从产品中抽离所有地域语言，国家/地区和文化相关的元素。换言之，应用程序的功能和代码设计考虑在不同地区运行的需要，其代码简化了不同本地版本的生产。开发这样的程序的过程，就称为国际化。

类似大公司的国际化一般都是根据不同国家做不同网页，现在采取的处理方案还是一套Web实现国际化，internationalization从i到n中有18个字母，所以称之为i18n

## 1.2 SpringBoot国际化配置

先说下基础流程
1. 创建i18n文件夹(IDEA会自动识别)
2. i18n下存放.properties文件
3. .properties命名规则为message_zh_CN.properties(message是basename，zh_CN是locale)
4. .properties文件中按照模块命名规则：模块1.模块2.xxx
5. SpringBoot会将.properties文件作为ResourceBundle来管理(不需要了解这个是啥，知道用它就行了)

SpringBoot会根据Locale获取地域信息配置，拼接上basename就可以拿到国际化的数据，所以命名要严格。basename就是去找国际化文件的路径，下面用源码来解释。

### 1.3 MessageSourceAutoConfiguration
这是SpringBoot自动配置类，里面配置了MessageSource，SpringBoot基于这个类来获取国际化数据的。

```java
    @Bean
    @ConfigurationProperties(
        prefix = "spring.messages"
    )
    public MessageSourceProperties messageSourceProperties() {
        return new MessageSourceProperties();
    }

    @Bean
    public MessageSource messageSource(MessageSourceProperties properties) {
        ResourceBundleMessageSource messageSource = new ResourceBundleMessageSource();
        if (StringUtils.hasText(properties.getBasename())) {
            messageSource.setBasenames(StringUtils.commaDelimitedListToStringArray(StringUtils.trimAllWhitespace(properties.getBasename())));
        }

        if (properties.getEncoding() != null) {
            messageSource.setDefaultEncoding(properties.getEncoding().name());
        }

        messageSource.setFallbackToSystemLocale(properties.isFallbackToSystemLocale());
        Duration cacheDuration = properties.getCacheDuration();
        if (cacheDuration != null) {
            messageSource.setCacheMillis(cacheDuration.toMillis());
        }

        messageSource.setAlwaysUseMessageFormat(properties.isAlwaysUseMessageFormat());
        messageSource.setUseCodeAsDefaultMessage(properties.isUseCodeAsDefaultMessage());
        return messageSource;
    }
```
- 首先我们需要先了解ResourceBundleMessageSource这个类，我们导入的.properties文件就是通过这个类来读取的。SpringBoot帮我们自动装配好了，使用自动配置的MessageSource来获取即可。

- 另外再看里面的设置参数，提供了setBasenames和Encoding的设置，这个都是配置文件的参数，我们只需要在配置文件中配置即可。是让SpringBoot知道去哪里找这个文件，以及编码。

- 在@ConfigurationProperties(
        prefix = "spring.messages"
    )这里已经配置了prefix，也就是说默认读取SpringBoot的yml配置中的Spring.messages.*，我们可以修改成任何正确的路径


## 1.4 Locale
Locale是Java中用于表示区域设置的类，它由语言代码、国家/地区代码和变体代码组成。Locale类提供了一系列静态方法来获取当前系统的Locale对象，还可以通过构造函数来创建新的Locale对象。网页请求中一般都会附带上Locale信息，所以SpringBoot会自动识别Locale，然后去获取国际化数据，下面看下源码.

WebMvcAutoConfiguration的源码(SpringBoot配置的区域信息解析)
```java
        @Bean
        @ConditionalOnMissingBean(
            name = {"localeResolver"}
        )
        public LocaleResolver localeResolver() {
            if (this.webProperties.getLocaleResolver() == org.springframework.boot.autoconfigure.web.WebProperties.LocaleResolver.FIXED) {
                return new FixedLocaleResolver(this.webProperties.getLocale());
            } else if (this.mvcProperties.getLocaleResolver() == org.springframework.boot.autoconfigure.web.servlet.WebMvcProperties.LocaleResolver.FIXED) {
                return new FixedLocaleResolver(this.mvcProperties.getLocale());
            } else {
                AcceptHeaderLocaleResolver localeResolver = new AcceptHeaderLocaleResolver();
                Locale locale = this.webProperties.getLocale() != null ? this.webProperties.getLocale() : this.mvcProperties.getLocale();
                localeResolver.setDefaultLocale(locale);
                return localeResolver;
            }
        }
```
这会查看我们是否进行了配置，指定区域信息，如果没有则默认使用AcceptHeaderLocaleResolver来获取。AcceptHeaderLocaleResolver是根据请求头来获取区域信息。

```java
    public Locale resolveLocale(HttpServletRequest request) {
        Locale defaultLocale = this.getDefaultLocale();
        if (defaultLocale != null && request.getHeader("Accept-Language") == null) {
            return defaultLocale;
        } else {
            Locale requestLocale = request.getLocale();
            List<Locale> supportedLocales = this.getSupportedLocales();
            if (!supportedLocales.isEmpty() && !supportedLocales.contains(requestLocale)) {
                Locale supportedLocale = this.findSupportedLocale(request, supportedLocales);
                if (supportedLocale != null) {
                    return supportedLocale;
                } else {
                    return defaultLocale != null ? defaultLocale : requestLocale;
                }
            } else {
                return requestLocale;
            }
        }
    }
```
也就是获取网页请求中的Accept-Language参数，然后根据这个参数来获取区域信息。

搞明白上面两个之后，做下总结：SpringBoot使用Locale来获取区域信息，然后根据区域信息，利用自动配置了ResourceBundleMessageSource的MessageSource去制定路径下获取区域对应的国际化信息。我们只需要重写一下自己的LocaleResolver,提供一下读取的封装函数即可。






