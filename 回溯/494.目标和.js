/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//回溯方法
var findTargetSumWays = function (nums, target) {
    let count = 0
    const recur = function (nums, target, index, sum) {
        if (index === nums.length) {
            if (target === sum) {
                count++
            }
        } else {
            recur(nums, target, index + 1, sum - nums[index]);
            recur(nums, target, index + 1, sum + nums[index]);
        }
        return count;
    }
    recur(nums, target, 0, 0)
    return count
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3));
console.log(findTargetSumWays([1], 1));