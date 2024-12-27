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

# 2. 后端重写国际化

## 2.1 自定义Locale解析
我们希望按照自己的标准来解析Locale区域信息，自定义一个类:
```java
	public class MyLocaleResolverConfig implements LocaleResolver {  
    private static final String PATH_PARAMETER = "lang";  
    private static final String DEFULT_PATH_PARAMETER = "Accept-Language";  
  
    @Override  
    public Locale resolveLocale(HttpServletRequest request) {  
        String lang = request.getHeader(PATH_PARAMETER);  
        if (StringUtils.isBlank(lang)){  
             lang = request.getParameter(PATH_PARAMETER);  
        }  
        Locale locale = Locale.CHINA;  
        if (!StringUtils.isEmpty(lang)) {  
            String[] split = lang.split("_");  
            if (split.length > 1){  
                locale = new Locale(split[0], split[1]);  
            }else {  
                locale = new Locale(split[0]);  
            }  
        }else{  
            lang = request.getHeader(DEFULT_PATH_PARAMETER);  
            //没有设置参数的使用浏览器传递参数  示例：Accept-Language: zh-CN,zh;q=0.9,en;q=0.8  
            if(!StringUtils.isEmpty(lang)){  
                String[] langStrs = lang.split(";");  
                if(langStrs.length > 0){  
                    //浏览器传过来的首选语言  
                    String firstLang = langStrs[0].split(",")[0];  
                    String[] split = firstLang.split("-");  
                    //防止国外用户浏览器选择了除中文英文之外的语言没有对应的语言包报错，不为中文的情况下全部使用英文  
                    if(!StringUtils.equals("zh", split[0])){  
                        locale = Locale.ENGLISH;  
                    }  
  
                }  
            }  
  
        }  
        return locale;  
    }  
  
    @Override  
    public void setLocale(HttpServletRequest request, HttpServletResponse response, Locale locale) {  
  
    }}
```

继承LocaleResolver基类，重写resolveLocale方法，setLocale可以不管。

- 初始化Locale.CHINA，使用中国区域
- 先判断lang，再判断Accept-Language，取到区域信息例如：en_US(先判断参数，无再取浏览器传入)

再将重写后的MyLocaleResolverConfig注册到@Bean中，告诉SpringBoot我们使用自己的配置：
```java
	@Bean  
	public LocaleResolver localeResolver() {  
	    return new MyLocaleResolverConfig();  
	}
```

## 2.2 封装一个i18n类
封装一个类，通过MessageSource来获取到国际化数据文件.properties中的键值
```java
@Component  
public class I18nUtil {  
    private static final Logger log = LoggerFactory.getLogger(I18nUtil.class);  
  
    @Autowired  
    private MessageSource messageSource;  
  
    private static MessageSource staticMessageSource;  
  
    @PostConstruct  
    public void init() {  
        I18nUtil.staticMessageSource = messageSource;  
    }  
  
    /**  
     * 通过code 返回对应的提示信息  
     * @param code  
     * @return  
     */  
    public static String getMessage(String code) {  
        return getMessage(code, null);  
    }  
  
    /**  
     * 返回带参数的提示信息  
     * @param code  
     * @param args  
     * @return  
     */  
    public static String getMessage(String code, Object[] args) {  
        return getMessage(code, args, "");  
    }  
  
  
    /**  
     * 获取单个国际化翻译值  
     */  
    public static String getMessage(String code, Object[] args, String defaultMessage) {  
        String content;  
        try {  
            content = staticMessageSource.getMessage(code, args, LocaleContextHolder.getLocale());  
        } catch (Exception e) {  
            log.error("获取提示消息失败： ->",e);  
            content = defaultMessage;  
        }  
        return content;  
    }  
}
```

- 还是使用MessageSource来获取数据信息
- 提供有参和无参的获取方法

**使用方法:** 导入i18n类，调用getMessage即可
```java
I18nUtil.getMessage("BadRecordController.shopOrder.noData") // 无参数

I18nUtil.getMessage("SolderPasteManagerService.standardWarmTime.exceedLimit", new String[]{solderPaste.getModified_date(), String.format("%.2f", useDate), String.valueOf(bzhwdate_max)}) //有参数
```

对应的国际化信息命名：
```js
BadRecordController.shopOrder.noData=无法获取工单信息

SolderPasteManagerService.standardWarmTime.exceedLimit=操作失败:该物料回温开始时间为{0},已经回温{1}小时,必须在{2}小时前才允许绑定<超出规定使用时间>
```

# 3. Vue国际化

首先引入Vue-i18n，声明i18n的组件，注入到Vue实例中
![img1](https://github.com/Rachel1771/picx-images-hosting/raw/master/20241227/Snipaste_2024-12-27_14-53-25.32i17me2wg.webp)

```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {Locale} from 'vant'
import vantEN from 'vant/lib/locale/lang/en-US'
import vantCN from 'vant/lib/locale/lang/zh-CN'
import vxeCN from 'vxe-table/lib/locale/lang/zh-CN'
import vxeEN from 'vxe-table/lib/locale/lang/en-US'
Vue.use(VueI18n)

const i18n = new VueI18n({
  // locale: 'en', // 语言标识，通过切换locale的值来实现语言切换 this.$i18n.locale = "zh"
  locale: localStorage.getItem("lang") == "en" ? 'en' : "zh", //初始化语言
  messages:{
    'zh': {
      ...vxeCN,
      ...require('./zh')
    },
    'en':{
      ...vxeEN,
      ...require('./en')
    },
    'vi':{
      ...vxeEN,
      ...require('./vi')
    }
  }
});
```

## 3.1 注入到Vue实例中(main.js文件中)
```js
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  render: h => h(App)
})
```
## 3.2 国际化数据按照Json格式编写：
```json
"SolderPaste":{
    "lableprintTitle": "锡膏标贴打印",
    "item":"物料编码",
    "batch":"批次",
    "supplier":"供应商",
    "cycle":"生产周期",
    "count":"数量",
    "printerTemplate":"打印模板",
    "printer":"打印机",
    "enterinventory":"锡膏入库",
    "technologyType":"工艺",
    "sfc":"条码",
    "weight":"标准重量",
    "keyCode":"唯一码",
    "operator":"操作人",
    "scanCount": "已扫描数量"
  }
```

## 3.3 使用方式：
```js
languagePath:'SolderPaste.', //在data中声明

:title="$t(languagePath+'item')" //以这种方式获取
```

切换语言：
```js
// 更新vant组件库本身的语言变化
onChange(val){
    localeStorage.setItem('lang',val);
    this.$i18n.local = val
}
```
## 3.4 vant组件国际化：
```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入vant 国际化
import {Locale} from 'vant'
import enUS from 'vant/lib/locale/lang/en-US'
import zhCN from 'vant/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
const i18n = new VueI18n({
    // locale: 'en', // 语言标识，通过切换locale的值来实现语言切换 this.$i18n.locale = "zh"
    locale: localStorage.getItem("lang") == "en" ? 'en' : "zh", //初始化语言
    messages:{
      'zh': require('./zh'),
      'en': require('./en')
    }
});
 // 更新vant组件库本身的语言变化
 function vantLocales (lang) {
     console.log(lang)
    if (lang === 'en') {
      Locale.use(lang, enUS)
    } else if (lang === 'zh') {
      Locale.use(lang, zhCN)
    }
  }
  vantLocales(i18n.locale)//初始化语言
  export {i18n, vantLocales}

 // Vant的切换语言
 onChange(val){
        localStorage.setItem('lang',val) 
        this.$i18n.locale = val 
        this.$vantLocales(val) //切换 vant 语言包
      },
```
# 4.JQuery国际化
## 4.1 引入jquery.js和jquery.i18n.properties.js
```js
<script src="../js/jquery.min.js?v=2.1.4"></script>
<script type="text/javascript" src="../js/base.js"></script>
<script src="../js/plugins/jquery-i18n/jquery.i18n.properties.js"></script>
<script type="module" src="../js/common/i18n.config.js"></script>
```
## 4.2 按照后端的样式声明properties文件，并且自定义i18n.config.js
```js
import '../base.js'
// getCookie() 和 getRootPath() 须引入 base.js
let localeLang = getCookie("localeLang") || "zh"
// console.log(localeLang);
$.i18n.properties({  
    name:'language', //资源文件名称
    path:getRootPath() + "/js/common/lang",  //资源文件路径
    mode:'map',  // 用 map 方式使用资源文件中的值
    language:localeLang, 
    callback:function(){  
        // 加载成功后处理显示内容
        $("[data-i18n-text]").each(function(){
            $(this).html($.i18n.prop($(this).data("i18n-text")));
        });  
        $("[data-i18n-placeholder]").each(function(){
            $(this).attr("placeholder",($.i18n.prop($(this).data("i18n-placeholder"))));
        });  
        $("[data-i18n-value]").each(function(){
            $(this).val($.i18n.prop($(this).data("i18n-value")));
        }); 
        $("[data-i18n-title]").each(function(){
            $(this).attr("title",($.i18n.prop($(this).data("i18n-title"))));
        });  
    }
}); 
```
这里就是根据getRootPath()和资源路径拼接获取到国际化信息，回调函数获取值，所以使用的时候，直接使用data-i18n-text就可以获取,例如：
```html
 <label data-i18n-text="micro_feed_and_turnPull.shopOrder">线体</label>
```