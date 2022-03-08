/**
 * @param {number[]} nums
 * @return {number}
 */

// 排序数组
var findMin = function (nums) {
    // 1.先去判断数据的长度是不是为1
    if (nums.length === 1) {
        return nums[0];
    }
    // 定义一个左边指针,一个右边的指针
    let left = 0;
    let right = nums.length - 1;
    if (nums[right] > nums[0]) {
        return nums[0];
    }
    while (let < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        }
        if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        if (nums[mid] > nums[left]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }



};