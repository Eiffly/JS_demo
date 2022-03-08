/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    //js新建二维数组比较麻烦
    const arr = [];
    for (let i = 0; i < m; i++) {
        arr.push([]);
    }
    for (let i = 0; i < m; i++) {
        arr[i][0] = 1;
    }
    for (let i = 0; i < n; i++) {
        arr[0][i] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            arr[i][j] = arr[i - 1][j] + arr[i][j - 1];
        }
    }
    return arr[m - 1][n - 1];
};

