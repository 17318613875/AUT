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
0   |安装Node   |必备不赘述
1   |安装phantom|npm i phantom --save 并将phantom.exe 放置在PATH列表中某个目录里;
2   |安装cheerio|npm i cheerio --save
3   |open   |open(url, callback) {void}<br/>open(url, method, callback) {void}<br/>open(url, method, data, callback) {void}<br/>open(url, settings, callback) {void}<br/>通过url加载页面，当加载完成便调用callback/page.onLoadFinished，伴随status === 'success'/'fail'
4   |settings   |page.settings.userAgent :javascriptEnabled定义是否在页面中执行脚本（默认为true）;<br/>loadImages定义是否加载内联图像（默认为true）;<br/>localToRemoteUrlAccessEnabled定义本地资源（例如来自文件）是否可以访问远程URL（默认为false）;<br/>userAgent 定义网页请求资源时发送给服务器的用户代理;<br/>userName 设置用于HTTP身份验证的用户名;<br/>password 设置用于HTTP身份验证的密码;<br/>XSSAuditingEnabled定义是否应监视加载请求以进行跨站点脚本尝试（默认为false）;<br/>webSecurityEnabled定义是否应启用Web安全性（默认为true）;<br/>resourceTimeout（以毫秒为单位）定义超时，在此超时之后，任何请求的资源将停止尝试并继续执行页面的其他部分。onResourceTimeout将在超时时调用回调;
5   |render |page.render(filename [, {format, quality}]);将网页呈现为图像缓冲区并将其保存为指定的filename
6   |sendEvent  |page.sendEvent(mouseEventType[, mouseX, mouseY, button='left']): 将事件发送到网页,mouseup、doubleclick等;<br>page.sendEvent(keyboardEventType, keyOrKeys, [null, null, modifier])
7   |uploadFile |uploadFile(selector, filename);用于自动上传文件--selector 'input[name=image]'
8   |evaluate   |page.evaluate(Function);在网页的上下文中eval给定的函数
9   |evaluateAsync  |page.evaluateAsync(Function);在网页的上下文中异步eval给定的函数
10  |injectJs   |page.includeJs(Url, callback);将指定文件中的外部脚本代码注入页面
11  |includeJs  |page.includeJs(Url, callback)加载url页面上指定（通常是远程位置）的外部脚本，并在完成时执行callback
12  |plainText  |page.plainText;将网页（主框架）的内容存储为纯文本
13  |frameContent   |page.frameName;获取当前活动标签页的HTML/XML中的网页骨架
14  |framePlainText |page.framePlainText;获取当前活动标签页的纯文本内容
15  |onResourceReceived |page.onResourceReceived = Function(response);收到页面请求的资源时，将调用此回调
16  |onResourceRequested    |page.onResourceRequested = Function(requestData, networkReques);当页面请求资源时，将调用此回调

注意: <a href="https://phantomjs.org/api/webpage/">phantomjs API</a>
