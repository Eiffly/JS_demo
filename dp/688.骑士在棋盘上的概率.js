const dirs = [[-2, -1], [-2, 1], [2, -1], [2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2]];
var knightProbability = function (n, k, row, column) {
    let dp = new Array(k + 1).fill(0)
        .map(x => new Array(n).fill(0)
            .map(x => new Array(n).fill(0)))
    for (let step = 0; step <= k; step++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (step === 0) {
                    dp[step][i][j] = 1
                } else {
                    for (const dir of dirs) {
                        let ni = i + dir[0], nj = j + dir[1]
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            dp[step][ni][nj] += dp[step - 1][i][j]/8
                        }
                    }
                }
            }
        }
    }
    return dp[k][row][column]
};

console.log(knightProbability(3, 2, 0, 0));
console.log(knightProbability(1, 0, 0, 0));