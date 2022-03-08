/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let res = ""
    let alen = a.length - 1
    let blen = b.length - 1
    let carry = 0
    while (alen >= 0 || blen >= 0) {
        const x = alen >= 0 ? a[alen] - '0' : 0
        const y = blen >= 0 ? b[blen] - '0' : 0

        const sum = x + y + carry
        res += (sum % 2)
        carry = Math.floor(sum / 2)
        alen--
        blen--
    }
    if (carry) {
        res += carry
    }
    return [...res].reverse().join("")

};
console.log(addBinary("10", "11"));
console.log(addBinary("1", "111"));