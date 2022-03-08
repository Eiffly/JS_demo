/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
    // 首先判断数据的长度是不是相等的
    if (original.length !== m * n) {
        return [];
    }
    // 然后补充相应的内容
    const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let index = 0; index < m * n; index += n) {
        // splice是替换的函数 0表示起始位 n表示替换的个数 会改变原来的数组
        // slice是切片函数 不会改变原来的数组
        ans[Math.floor(i / n)].splice(0, n, ...original.slice(i, i + n));
    }
    return ans;
};