/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 采用的方法是将原来的数组变为原来的两倍
var nextGreaterElements = function (nums) {
    let ans = []
    const _2nums = nums.concat(nums);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; i + j < _2nums.length; j++) {
            if (_2nums[i + j] > _2nums[i]) {
                ans.push(_2nums[i + j])
                break
            }
            if (i + j === _2nums.length - 1)
                ans.push(-1)
        }

    }

    return ans
};
console.log(nextGreaterElements([1, 2, 1]));
console.log(nextGreaterElements([1, 2, 3, 4, 3]));
