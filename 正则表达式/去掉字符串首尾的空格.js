/**
 * 方法一:通过函数
 * @param {*} str 
 * @returns 去掉了首尾空格的字符串
 */
function LTrim(str) {
    var i;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != " ")
            break;
    }
    str = str.substring(i, str.length);
    return str;
}

function LTrim(str) {
    var i;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != " ")
            break;
    }
    str = str.substring(i, str.length);
    return str;
}
function Trim(str) {
    return LTrim(RTrim(str));

}
/**
 * 方法二:通过正则表达式
 * @returns 
 */
String.prototype.Trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

String.prototype.LTrim = function () {
    return this.replace(/(^\s*)/g, "");
}

String.prototype.RTrim = function () {
    return this.replace(/(\s*$)/g, "");
}

/**
 * 正则表达式: 一句话来实现
 */
var str = "              he      llo                ";
str = str.replace(/\s/g, ""); //hello