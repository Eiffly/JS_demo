/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //如果这个数是999 最后应该变成1000
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] != 9) {
            digits[i]++;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    // ES的写法
    const result = [1, ...digits]
    return result;
};