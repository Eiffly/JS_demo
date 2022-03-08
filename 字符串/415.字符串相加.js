/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//  注意不可以将输入的数字转换为整数形式!!!
// 最后返回的还是一个字符串格式
var addStrings = function (num1, num2) {
    let ans = [];
    let m = num1.length - 1, n = num2.length - 1, add = 0;
    while (m >= 0 || n >= 0 || add !== 0) {
        const x = m >= 0 ? num1.charAt(m) - '0' : 0
        const y = n >= 0 ? num2.charAt(n) - '0' : 0
        const result = x + y + add;
        ans.push(Math.floor(result % 10));
        add = Math.floor(result / 10);
        m--;
        n--;
    }
    return ans.reverse().join("");
};
console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));