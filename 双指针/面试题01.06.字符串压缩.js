/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (s) {
    let i = 0, j = 0, len = s.length
    let res = ""
    while (i < len) {
        while (j < len && s[i] === s[j]) {
            j++
        }
        res += s[i] + (j - i);
        i = j
    }
    return res.length > s.length ? s : res
};

console.log(compressString("aabcccccaaa"));
console.log(compressString("abbccd"));
