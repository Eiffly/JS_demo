var getMaximumGold = function (grid) {
    this.grid = grid;
    this.dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    this.m = this.grid.length;
    this.n = this.grid[0].length;
    this.ans = 0;

    const dfs = (i, j, gold) => {
        gold += grid[i][j];
        this.ans = Math.max(this.ans, gold);
        // 暂时存储
        const rec = grid[i][j];
        grid[i][j] = 0;
        for (let d = 0; d < dir.length; d++) {
            const cur_i = i + dir[d][0];
            const cur_j = j + dir[d][1];
            if (cur_i >= 0 && cur_i < m && cur_j >= 0 && cur_j < n && grid[cur_i][cur_j] > 0) {
                dfs(cur_i, cur_j, gold);
            }

        }

        // 回溯回来
        grid[i][j] = rec;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((grid[i][j] !== 0)) {
                dfs(i, j, 0);
            }
        }

    }
    return ans;
};

console.log(getMaximumGold([[0, 6, 0], [5, 8, 7], [0, 9, 0]]));
console.log(getMaximumGold([[1, 0, 7], [2, 0, 6], [3, 4, 5], [0, 3, 0], [9, 0, 20]]));