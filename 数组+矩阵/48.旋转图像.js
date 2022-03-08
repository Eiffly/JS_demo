/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const len = matrix.length
    // 水平方向颠倒
    for (let j = 0; j < len; j++) {
        for (let i = 0; i < Math.floor(len / 2); i++) {
            [matrix[i][j], matrix[len - i - 1][j]] = [matrix[len - i - 1][j], matrix[i][j]]
        }
    }
    // 对角线颠倒
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) { //注意这里的索引是i
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]

        }
    }
    return matrix
};
console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]));