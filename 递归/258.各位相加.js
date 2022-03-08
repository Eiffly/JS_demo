/**
 * @param {number} num
 * @return {number}
 */
//  有一个递归的过程思路

var addDigits = function (num) {
    let sum = 0
    // 表明数字是个位数
    if (Math.floor(num / 10) === 0) {
        return num
    } else {
        while (num !== 0) {
            num = Math.floor(num / 10)
        }
    }
    return addDigits(sum)
};
console.log(addDigits(38));
console.log(addDigits(0));