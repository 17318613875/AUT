/**
 * Phantom Error
 */
phantom.onError = function (msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function (item) {
            msgStack.push(' -> ' + item.file + ': ' + item.line + (item.function ? ' (in function "' + item.function + '")' : ''));
        });
    }
    console.error(msgStack.join('\n'));
}