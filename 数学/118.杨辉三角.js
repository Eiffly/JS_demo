/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = new Array(numRows).fill(0).map(x => [])
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                res[i].push(1)
            } else {
                res[i].push(res[i - 1][j - 1] + res[i - 1][j])
            }
        }
    }
    return res
};

console.log(generate(5));
console.log(generate(1));
console.log(generate(4));