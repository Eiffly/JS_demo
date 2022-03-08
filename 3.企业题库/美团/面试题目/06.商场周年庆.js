//322 零钱兑换
// 近期某商场由于周年庆，开启了“0元购”活动。活动中，消费者可以通过组合手中的代金券，实现0元购买指定商品。
// 聪明的小团想要用算法来帮助他快速计算：对于指定价格的商品，使用代金券凑出其价格即可，但所使用的代金券总面额不可超过商品价格。由于代金券数量有限，使用较少的代金券张数则可以实现价值最大化，即最佳优惠。
// 假设现有100元的商品，而代金券有50元、30元、20元、5元四种，则最佳优惠是两张50元面额的代金券；而如果现有65元的商品，则最佳优惠是两张30元代金券以及一张5元代金券。
// 请你帮助小团使用一段代码来实现代金券计算。

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})
let inArr = []
rl.on('line', line => {
    if (!line) return
    inArr.push(line.trim())
    if (inArr[inArr.length - 1] === '0') {
        for (let i = 0; i < inArr.length - 2; i += 2) {
            let amount = +inArr[i]
            let coins = inArr[i + 1].split(' ').map(e => +e)
            console.log(coinChange(coins, amount))
        }
        rl.close();
    }
})
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let coin of coins) {
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