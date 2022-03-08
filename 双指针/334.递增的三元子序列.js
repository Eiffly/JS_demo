/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    //长度可能会小于3
    const len = nums.length;
    if (len < 3) {
        return false;
    }
    // 创建一个数组
    let leftMin = [nums[0]];
    //第一个数组
    for (let i = 1; i < len; i++) {
        // 这里涉及到一些动态规划的知识了
        leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
    }
    //第二个数组
    let rightMax = new Array(len);
    //注意这里 应该是最后一个元素
    rightMax[len - 1] = nums[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }

    /**
     * 得到数组  leftMin和 rightMax 之后，
     * 遍历 1 <= i  <= n - 1 的每个下标 ii，如果存在一个下标 i 满足  leftMin[i - 1] <  nums[i] <  rightMax[i + 1]
     * leftMin[i−1]<nums[i]<rightMax[i+1]，则返回 \text{true}true，如果不存在这样的下标 ii，则返回 \text{false}false。
     * 
     */
    for (let index = 1; index < len - 1; index++) {
        if (nums[index] > leftMin[index - 1] && nums[index] < rightMax[index + 1]) {
            return true;
        }

    }

    return false;

};
console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));