/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    const len = nums.length
    let left = 0, right = len - 1
    let count = 0
    while (left <= right) {
        if (nums[left] === val && nums[right] !== val) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
            right--
            count += 1
        } else if (nums[left] !== val && nums[right] !== val) {
            left++
            // right--
        } else if (nums[left] === val && nums[right] === val) {
            right--
            count += 1
        } else {
            left++

        }
    }
    return nums.slice(0, len - count)
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
console.log(removeElement([1], 1))
console.log(removeElement([1, 2, 3, 4], 2))