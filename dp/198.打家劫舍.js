/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
var rob = function (nums) {
    let dp = []
    // 特殊情况处理
    if (nums.length <= 2) {
        return Math.max(...nums)
    } else {
        dp[0] = nums[0]
        dp[1] = Math.max(dp[0], nums[1])
        for (let i = 2; i < nums.length; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
        }
    }
    return dp[dp.length - 1]
};
console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([2, 1, 1, 2]));