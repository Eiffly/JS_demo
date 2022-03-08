/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
    let arr = []
    let count = 0
    for (let i = 0; i <= n; i++) {
        count = 0
        let s = i
        while (s) {
            count += s & 1
            s = s >> 1
        }
        arr.push(count)
    }
    return arr
};
console.log(countBits(0));
console.log(countBits(5));
