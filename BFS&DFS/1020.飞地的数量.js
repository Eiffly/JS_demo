/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    //先搞好方向,设置visited
    const m = grid.length
    const n = grid[0].length
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let visited = new Array(m).fill(0).map(() => new Array(n).fill(false));

    const dfs = (grid, row, column) => {
        if (row < 0 || row >= m || column < 0 || column >= n || grid[row][column] === 0 || visited[row][column]) {
            return;
        }
        visited[row][column] = true;
        for (const dir of dirs) {
            dfs(grid, row + dir[0], column + dir[1]);
        }
    }


    for (let i = 0; i < m; i++) {
        dfs(grid, i, 0)
        dfs(grid, i, n - 1)
    }

    for (let j = 1; j < n - 1; j++) {
        dfs(grid, 0, j)
        dfs(grid, m - 1, j)
    }

    let ans = 0
    for (let i = 1; i < m - 1; i++) {
        for (let j = 1; j < n - 1; j++) {
            if (grid[i][j] === 1 && !visited[i][j])
                ans++;
        }

    }
    return ans;
};


console.log(numEnclaves([[0, 0, 0, 0], [1, 0, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]));
console.log(numEnclaves([[0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]]));
console.log(numEnclaves([[0, 0, 0, 1, 1, 1, 0, 1, 0, 0], [1, 1, 0, 0, 0, 1, 0, 1, 1, 1], [0, 0, 0, 1, 1, 1, 0, 1, 0, 0], [0, 1, 1, 0, 0, 0, 1, 0, 1, 0], [0, 1, 1, 1, 1, 1, 0, 0, 1, 0], [0, 0, 1, 0, 1, 1, 1, 1, 0, 1], [0, 1, 1, 0, 0, 0, 1, 1, 1, 1], [0, 0, 1, 0, 0, 1, 0, 1, 0, 1], [1, 0, 1, 0, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0, 0, 1]]));