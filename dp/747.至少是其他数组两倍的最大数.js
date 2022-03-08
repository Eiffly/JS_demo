/**
 * @param {number[]} nums
 * @return {number}
 */
// 题目的思路:找出来最大数和次大数
var dominantIndex = function (nums) {
    
    let m1 = -1, m2 = -1;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > m1) {
            // 更新次大值 
            m2 = m1;
            // 更新最大值及其索引 
            m1 = nums[i];
            index = i;
        } else if (nums[i] > m2) {
            // 更新次大值 
            m2 = nums[i];
        }
    }
    return m1 >= m2 * 2 ? index : -1;
};
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));
console.log(dominantIndex([1]));