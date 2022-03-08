/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let ans = []
    for (const num of nums1) {
        let i = nums2.findIndex((element) => element === num)
        for (let j = 1; i + j < nums2.length; j++) {
            if (nums2[i + j] > nums2[i]) {
                ans.push(nums2[i + j])
                break
            }
            if (i + j === nums2.length - 1)
                ans.push(-1)
        }
        if (i === nums2.length - 1)
            ans.push(-1)
    }
    return ans
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
