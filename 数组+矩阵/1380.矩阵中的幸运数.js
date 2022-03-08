/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const m = matrix.length;
    const n = matrix[0].length
    let minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER)
    let maxCol = new Array(n).fill(0)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            minRow[i] = Math.min(matrix[i][j], minRow[i])
            maxCol[j] = Math.max(matrix[i][j], maxCol[j])
        }
    };
  
    return [...new Set(minRow)].filter(item => new Set(maxCol).has(item))
};

console.log(luckyNumbers([[3, 7, 8], [9, 11, 13], [15, 16, 17]]))
console.log(luckyNumbers([[1, 10, 4, 2], [9, 3, 8, 7], [15, 16, 17, 12]]))
console.log(luckyNumbers([[7, 8], [1, 2]]))