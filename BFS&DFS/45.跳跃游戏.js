/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let length = nums.length, end = 0, maxPosition = 0, steps = 0;
    for (let i = 0; i < length - 1; i++) {
        maxPosition = Math.max(maxPosition, i + nums[i])
        if (i === end) {
            end = maxPosition
            steps++
        }
    }
    return steps;
};

console.log(jump([2, 3, 1, 1, 4]));
console.log(jump([2, 3, 0, 1, 4]));
console.log(jump([2, 3, 1, 2, 4, 2, 3]));
