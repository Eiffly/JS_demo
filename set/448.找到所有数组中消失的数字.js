/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let nums2 = new Array(nums.length).fill(0).map((x, i) => i + 1)
    return nums2.filter(item => !(new Set(nums).has(item)))
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));