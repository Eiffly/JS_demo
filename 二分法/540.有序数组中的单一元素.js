// https://leetcode-cn.com/problems/single-element-in-a-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
// 注意：题目中要求了时间复杂度和空间复杂度
var singleNonDuplicate = function (nums) {
    let i = 0, j = nums.length
    while (i < j) {
        let mid = Math.floor((j - i) / 2) + i
        if (nums[mid] === nums[mid ^ 1])
            i = mid + 1  //为什么
        else
            j = mid
    }
    return nums[i]
};