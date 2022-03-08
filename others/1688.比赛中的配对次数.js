/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    // 特殊情况处理
    if (n === 1) {
        return 0;
    }

    let count = 0;
    let remain = n;
    while (remain !== 1) {
        count += Math.floor(remain / 2);
        remain = remain - Math.floor(remain / 2);
    }
    return count;
};

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
