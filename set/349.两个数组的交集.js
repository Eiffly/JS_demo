/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var intersection = function (nums1, nums2) {
//     const set = new Set();
//     // 考虑到时间复杂度的关系 nums2先转换为相应的set
//     const nums2set = new Set(nums2);
//     for (letter of nums1) {
//         if (nums2set.has(letter)) {
//             set.add(letter);
//         }
//     }
//     // 注意 我们最后返回的是一个数组
//     return Array.from(set);
// }


var intersection = function (nums1, nums2) {
    let result = [...new Set(nums1)].filter(item => new Set(nums2).has(item));
    return result;
}

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));