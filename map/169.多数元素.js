/**
 * @param {number[]} nums
 * @return {number}
 */
//利用哈希表
// var majorityElement = function (nums) {
//     let len = Math.floor(nums.length / 2);
//     let map = new Map()
//     let res = 0
//     for (const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1)
//     }
//     map.forEach(function (value, key, map) {
//         if (value > len) {
//             res = key
//         }
//     });
//     return res;
// };
var majorityElement = function (nums) {
    nums.sort((a, b) => b - a)
    return nums[Math.floor(nums.length / 2)];
};
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));