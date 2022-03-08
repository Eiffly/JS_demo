const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []

rl.on('line', line => {
    if (!line) return
    inArr.push(line.trim())
    if (inArr.length === 1) {
        let n = +inArr[0]
        let dp = [1, 1, 2]
        for (let i = 3; i < n + 1; i++) {
            dp[i] = dp[i - 1] + dp[i - 2]
        }
        console.log(dp[n])
    }
})

// close事件监听
rl.on("close", function () {
    // 结束程序
    process.exit(0);
});

