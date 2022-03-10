/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let maxIndex
    for (let i = 0; i < nums.length - 1; i++) {
        maxIndex = i
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j
            }
        }
        if (maxIndex !== 0) {
            [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]]
            if (i + 1 === k) {
                return nums[k - 1]
            }
        }
    }
    return nums[k - 1]
};


console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
console.log(findKthLargest([2, 1], 2));
console.log(findKthLargest([1], 1));