/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//这里我们运用桶排序的方法
// 我知道最大值与最小值不就der了吗 排序，排个屁！
var smallestRangeI = function (nums, k) {
    if (nums.length <= 1) return 0;
    const max = Math.max(...nums)
    const min = Math.min(...nums)
    let maxer = max - k
    let miner = min + k
    return (maxer - miner < 0) ? 0 : maxer - miner
};