

const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const actions = webdriver.actions;

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('http://wenshu.court.gov.cn/Index');

driver.findElement(By.id('gover_search_key')).sendKeys('金融');
