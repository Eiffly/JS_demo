/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    const map = new Map();
    let ans = 0;
    for (let j = 0; j < nums.length; j++) {
        ans += (map.get(nums[j] + k) || 0) + (map.get(nums[j] - k) || 0);
        map.set(nums[j], (map.get(nums[j]) || 0) + 1);
    }
    return ans;
};
console.log(countKDifference([1, 2, 2, 1], 1));
console.log(countKDifference([1, 3], 3));
// console.log(countKDifference([3, 2, 1,   5, 4], 2));
