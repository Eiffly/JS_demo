/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    // 双指针
    let i = 0, j = s.length - 1
    const sarr = [...s]
    // 创建相应的正则
    const reg = /^[a-zA-Z]$/
    while (i < j) {
        // 如果是i是字母且j是字母 互换
        if (reg.test(sarr[i]) && reg.test(sarr[j])) {
            [sarr[i], sarr[j]] = [sarr[j], sarr[i]]
            i++
            j--
        } else if (!reg.test(sarr[i]) && reg.test(sarr[j])) {
            i++;
        } else if (reg.test(sarr[i]) && !reg.test(sarr[j])) {
            j--;
        } else {
            i++
            j--
        }
        // 如果i不是 i移动

        // 如果j不是 j移动
    }
    return sarr.join("")
};

console.log(reverseOnlyLetters("7_28]"));