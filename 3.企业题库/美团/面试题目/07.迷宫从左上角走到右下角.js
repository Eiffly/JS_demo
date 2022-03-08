//64
//剑指47 礼物的最大价值
//此外63 62都是相似的题目
// 给定一个包含非负整数的 M x N 迷宫，请找出一条从左上角到右下角的路径，使得路径上的数字总和最小。每次只能向下或者向右移动一步。


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line => {
    if (!line) return
    inArr.push(line.trim())
    let mn = inArr[0].split(' ').map(e => +e)
    let m = mn[0]
    let n = mn[1]
    if (inArr.length === m + 1) {
        let arr = []
        for (let i = 0; i < m; i++) {
            arr[i] = inArr[i + 1].split(' ').map(e => +e)
        }
        console.log(minPathSum(arr))
    }
})

var minPathSum = function (grid) {
    const m = grid.length,
        n = grid[0].length
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i + 1 < m && j + 1 < n) {
                grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1])
            } else if (i + 1 < m) {
                grid[i][j] += grid[i + 1][j]
            } else if (j + 1 < n) {
                grid[i][j] += grid[i][j + 1]
            }
        }


    }
    return grid[0][0]
};