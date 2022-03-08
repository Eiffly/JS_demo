/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    // 这一道题目的难点在于负负得正 有的负数有咸鱼翻身的可能
    // 要保留最大的和最小的(最小的可以实现咸鱼翻身)
    const maxProductMemo = [];
    const minProductMemo = [];
    maxProductMemo[0] = nums[0];
    minProductMemo[0] = nums[0];


    let max = nums[0];
    for (let index = 1; index < nums.length; index++) {
        // Math.max() 是可以放三个数值的
        maxProductMemo[index] = Math.max(nums[index], nums[index] * maxProductMemo[index - 1], nums[index] * minProductMemo[index - 1]);
        minProductMemo[index] = Math.min(nums[index], nums[index] * maxProductMemo[index - 1], nums[index] * minProductMemo[index - 1]);
        max = Math.max(max, maxProductMemo[index]);
    }
    return max;
};