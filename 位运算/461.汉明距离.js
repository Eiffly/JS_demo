/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let s = x ^ y
    let ans = 0
    while (s) {
        ans += s & 1
        s = s >> 1
    }
    return ans
};
console.log(hammingDistance(1, 4));
console.log(hammingDistance(1, 3));