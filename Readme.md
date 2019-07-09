# AUT 自动化测试

## Selenium webdriver

Selenium测试直接运行在浏览器中，通过操控指令，就像真正的用户在操作一样。
通过配套对应浏览器driver,常用于测试兼容性以及系统功能。

### 主要功能包括

1. 测试与浏览器的兼容性: 测试你的应用程序看是否能够很好得工作在不同浏览器和操作系统之上；
2. 测试系统功能: 创建回归测试检验软件功能和用户需求

### 组件

1. Selenium IDE： 一个Firefox插件，可以录制用户的基本操作，生成测试用例。随后可以运行这些测试用例在浏览器里回放，可将测试用例转换为其他语言的自动化脚本。
2. Selenium Remote Control (RC): 支持多种平台(Windows，Linux，Solaris)和多种浏览器(IE，Firefox，Opera，Safari)，可以用多种语言(Java，Ruby，Python，Perl，PHP，C#)编写测试用例。
3. Selenium Grid: 允许Selenium-RC 针对规模庞大的测试案例集或者需要在不同环境中运行的测试案例集进行扩展

### Selenium 使用

编号    |项目    |操作  
--------|--------|----------
1   |安装Node   |必备不赘述
2   |安装selenium|cnpm install selenium-webdriver --save
3   |安装浏览器驱动|cnpm install chromedriver geckodriver iedriver --save<br/>安装驱动后运行脚本提示驱动不正常之类的问题时可自行下载驱动放到与脚本相同的目录下试试
4   |初始化 |let webdriver = require('selenium-webdriver');<br/>const By = webdriver.By;<br/>let driver = new webdriver.Builder()<br/>   .forBrowser('ie')<br/>  .build();<br/>driver.get(Url);
5   |元素定位   |let element = driver.**findElement**(By.id('ID'));// By id/name/className/tagName/linkText/partialLinkText/xpath("//input")
6   |设置元素值 |element.sendKeys("values 中文");
7   |获取文本值 |element.getText();
8   |option选择 |let select = driver.findElement(By.tagName("select"));<br/>select.deselectAll();<br/>select.selectByVisibleText("Edam")
9   |单机按钮   |element.click();// element.submit();
10  |**拖拽**   |const actions = webdriver.actions;<br/>element = driver.findElement(By.name("source"));<br/>target = driver.findElement(By.name("target"));<br/>(new actions(driver)).dragAndDrop(element, target).perform();
11  |元素等待   |let until = webdriver.until;<br/>driver.wait(until.elementLocated(By.id('id'), 10000));
12  |程序睡眠   |driver.sleep(500);//毫秒
13  |执行Js并返回|driver.executeScript(/* Js Code return */).then((obj) => {})
14  |网页最大化 |driver.manage().window().maximize();
15  |网页截屏   |driver.takeScreenshot().then((base64) => {});
16  |推出程序   |driver.quit();

## PhantomJs

是一个基于 WebKit 的无GUI界面，但得到的对 DOM / JS 的完整支持的环境
是一个纯后台的，完整功能的浏览器，可以用来爬虫抓取，功能测试

### PhantomJs 使用

编号    |项目    |操作  
--------|--------|----------
1   |安装Node   |必备不赘述
1   |安装phantom|npm i phantom --save
2   |安装cheerio|npm i cheerio --save
