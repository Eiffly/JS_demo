
/**
 * @param {number} num
 * @return {string}  注意最后返回的是字符串数据类型
 */
var convertToBase7 = function (n) {
    let flag = n < 0  //先去判断数据的类型
    if (flag) n = -n
    let str = ""
    //用do-while的结构是因为有0的情况
    do {
        str += (n % 7)
        n = Math.floor(n / 7)
    } while (n !== 0)
    str = str.split("").reverse().join("")
    return flag ? "-" + str : str;
};

console.log(convertToBase7(0));
console.log(convertToBase7(100));
console.log(convertToBase7(-7));
