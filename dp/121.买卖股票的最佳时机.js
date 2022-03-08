/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
var maxProfit = function (prices) {
    if (prices.length === 0) {
        return 0;
    }
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let index = 0; index < prices.length; index++) {
        if (prices[index] < minPrice) {
            minPrice = prices[index];
        }
        if ((prices[index] - minPrice) > maxProfit) {
            maxProfit = prices[index] - minPrice;
        }
    }
    return maxProfit;
};