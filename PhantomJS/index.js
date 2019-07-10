"use strict"
/**
 * 
 */
var util = require('./util/index');
util.open('index', 'http://wenshu.court.gov.cn/Index', function(page) {
    phantom.exit();
});