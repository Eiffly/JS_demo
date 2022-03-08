/**
 * m 表示物品的数量
 * n 表示物品的最高价格
 */
const fs = require('fs')
const lines = fs.readFileSync("txt文件/09.txt").toString().trim().split(/\r\n|\r|\n/)

const [n, m] = lines[0].split(' ').map(Number)
let count = 0
const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))

for (let z = 1; z <= n; z++) dp[1][z] = 1

for (let a = 2; a <= m; a++) {
    for (let b = 1; b <= n; b++) {
        // 倍数递增
        for (let c = b; c <= n; c += b) {
            dp[a][c] = (dp[a][c] + dp[a - 1][b]) % 998244353
        }
    }
}
// console.log(dp);
for (let z = 1; z <= n; z++) count = (count + dp[m][z]) % 998244353

console.log(count)

