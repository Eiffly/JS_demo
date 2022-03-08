/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
    return a !== b ? Math.max(a.length, b.length) : -1;
};

console.log(findLUSlength("aba", "cdc"));
console.log(findLUSlength("aaa", "bbb"));
console.log(findLUSlength("aaa", "aaa"));