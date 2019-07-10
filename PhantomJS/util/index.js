
/**
 * Open 打开指定网址
 * @param {String} url
 * @param {Function} next
 * @since ES5
 */
const page = require('webpage').create();
const open = function (name, url, callback) {
    page.open(url, function (status) {
        console.log(' ---------------- >< ---------------- ');
        console.log('Status: ' + status + ' ===> ' + name);
        if (status === "success") {
            page.render('./screen print/' + name + '.png');
            callback ? callback(page).call(this) : phantom.exit();
        }else{
            phantom.exit();
        }
    });
};

require('./error');
module.exports = {
    open: open
}