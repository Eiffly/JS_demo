/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 类似于滑动窗口
var minimumDifference = function (nums, k) {
    let ans = Number.MAX_SAFE_INTEGER;
    let max_number = nums[0];
    let min_number = nums[nums.length - 1];
    // 降序排序
    nums.sort((a, b) => b - a);
    for (let i = 0; i <= nums.length - k; i++) {
        ans = Math.min(ans, nums[i] - nums[i + k - 1]);
    }
    return ans;
};
console.log(minimumDifference([90], 1));
console.log(minimumDifference([9, 4, 1, 7], 3));