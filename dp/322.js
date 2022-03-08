// 本题目是美团的题目
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
// 创建相应的字符数组
let arr = []
// 进行相应的事件监听
rl.on("line", line => {
    if (!line) return
    arr.push(line.trim())
    if (line.trim() === '0') {
        for (let i = 0; i < arr.length - 2; i += 2) {
            let amount = +arr[i]
            let coins = arr[i + 1].split(" ").map(x => +x)
            console.log(coinChange(coins, amount));
        }
        rl.close();
    }
})

var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (const coin of coins) {
        for (let i = 1; i <= amount; i++) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
            }
        }
    }
    return dp[amount] === Infinity ? 'Impossible' : dp[amount]
}
rl.on('close', function () {
    process.exit(0);
})