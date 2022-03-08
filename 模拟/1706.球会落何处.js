/**
 * @param {number[][]} grid
 * @return {number[]}
 */
//  
var findBall = function (grid) {
    const n = grid[0].length
    let res = new Array(n).fill(0)
    for (let j = 0; j < n; j++) {
        let col = j;
        for (const row of grid) {
            let dir = row[col]
            col += dir
            if (col < 0 || col >= n || row[col] !== dir) {
                col = -1
                break
            }
        }
        res[j] = col
    }
    return res
};
console.log(findBall([[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]));
console.log(findBall([[-1]]));
console.log(findBall([[1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1], [1, 1, 1, 1, 1, 1], [-1, -1, -1, -1, -1, -1]]));