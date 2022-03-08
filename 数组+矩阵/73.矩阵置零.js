/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // 检查第一行和第一列是不是有零
    let firstColHasZero = false;
    let firstRowHasZero = false;

    for (let index = 0; index < matrix.length; index++) {
        if (matrix[index][0] === 0) {
            firstColHasZero = true;
        }
    }

    for (let index = 0; index < matrix[0].length; index++) {
        if (matrix[0][index] === 0) {
            firstRowHasZero = true;
        }
    }

    //检查元素
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    //利用第一行和第一列的标零情况 将matrix中的数字标零
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    //最后 处理第一行和第一列
    if (firstColHasZero) {
        for (let index = 0; index < matrix.length; index++) {
            matrix[index][0] = 0;

        }
    }
    if (firstRowHasZero) {
        for (let index = 0; index < matrix[0].length; index++) {
            matrix[0][index] = 0;

        }
    }
};