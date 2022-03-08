/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length
    let grid = new Array(m).fill(0).map(x => new Array(n).fill(0))
    grid[0][0] = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0 && obstacleGrid[i][j] === 0) {
                grid[i][j] = 1
            } else if (i === 0 && obstacleGrid[i][j] === 0 && obstacleGrid[i][j - 1] === 0) {
                grid[i][j] = grid[i][j - 1]
            } else if (j === 0 && obstacleGrid[i][j] === 0 && obstacleGrid[i - 1][j] === 0) {
                grid[i][j] = grid[i - 1][j]
            } else if ((i > 0 && j > 0) &&
                (obstacleGrid[i][j] === 0) &&
                ((obstacleGrid[i - 1][j] === 0) || obstacleGrid[i][j - 1] === 0)) {
                grid[i][j] = grid[i][j - 1] + grid[i - 1][j]
            }
        }
    }
    return grid[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));
console.log(uniquePathsWithObstacles([[1]]));
console.log(uniquePathsWithObstacles([[1, 0]]));
