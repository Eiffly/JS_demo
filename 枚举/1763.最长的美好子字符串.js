/**
 * @param {string} s
 * @return {string}
 */
// var longestNiceSubstring = function (s) {
//     let ans = "";
//     // 最长的美好字符串
//     // Map记录相应的字母的出现的次数(这个时候是不区分大小写的)

//     // 记录出现的最早的那个

//     return ans;
// };

var longestNiceSubstring = function (s) {
    const n = s.length;
    let maxPos = 0;
    let maxLen = 0;
    for (let i = 0; i < n; i++) {
        let low = 0;
        let up = 0;
        for (let j = i; j < n; j++) {
            if (s[j] >= 'a' && s[j] <= 'z') {
                low |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt());
            } else {
                up |= 1 << (s[j].charCodeAt() - 'A'.charCodeAt());
            }
            if (low === up && j - i + 1 > maxLen) {
                maxPos = i;
                maxLen = j - i + 1;
            }
        }
    }
    return s.slice(maxPos, maxPos + maxLen);
};
console.log(longestNiceSubstring("YazaAay"));
console.log(longestNiceSubstring("Bb"));
console.log(longestNiceSubstring("c"));
console.log(longestNiceSubstring("dDzeE"));
