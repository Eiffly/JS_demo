/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 2 <= A.length <= 20000
// A.length % 2 == 0
// 0 <= A[i] <= 1000

var sortArrayByParityII = function (nums) {
    let i = 0;
    let j = i + 1;
    while (nums[i] !== undefined && nums[j] !== undefined) {
        if (nums[i] % 2 === 1 && nums[j] % 2 === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i += 2;
            j += 2;
        } else if (nums[i] % 2 === 0 && nums[j] % 2 === 0) {
            i += 2;
        } else if (nums[i] % 2 === 1 && nums[j] % 2 === 1) {
            j += 2;
        } else {
            i += 2;
            j += 2;
        }
    }
    return nums;
};

console.log(sortArrayByParityII([4, 2, 5, 7]));
