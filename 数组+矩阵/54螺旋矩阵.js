/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let res = [];
    let direction = "right";
    while (left <= right && top <= bottom) {
        if (direction === "right") {
            for (let i = left; i < right; i++) {
                res.push(matrix[top][i]);
            }
            top++;
            direction = "down";
        }
    }
};