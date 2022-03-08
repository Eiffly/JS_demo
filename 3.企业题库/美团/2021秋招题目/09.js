const fs = require('fs');
const lines = fs.readFileSync("txt文件/09.txt").toString().trim().split(/\r\n|\r|\n/);
// n表示最贵的装饰物价格 m表示总件数
const [n, m] = lines[0].split(' ').map(x => +x);
let ans = 0;
let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
    dp[1][i] = 1;
}

//表示商品的最大价值
for (let a = 2; a <= m; a++) {
    for (let b = 1; b <= n; b++) {
        for (let c = b; c <= n; c += b) {
            dp[a][c] = (dp[a][c] + dp[a - 1][b]) % 998244353
        }
    }
}

for (let index = 1; index <= n; index++) {
    ans = (ans + dp[m][index]) % 998244353
}
console.log(ans);