/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一：遍历
// var sortArrayByParity = function (nums) {
//     if (nums.length === 0) {
//         return nums;
//     }
//     let arr = [];
//     // 填充首部的元素
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2) {
//             arr.push(nums[i]);
//         }
//     }
//     //补充尾部的元素

// };
// console.log(sortArrayByParity([3, 1, 2, 4]));

//方法二：不去开新的数组
var sortArrayByParity = function (A) {
    let i = 0, j = A.length - 1;
    while (i <= j) {
        if (A[i] % 2 === 1 && A[j] % 2 === 0) {
            // ES6的使用方式，解构赋值
            [A[i], A[j]] = [A[j], A[i]];
            i++;
            j--;
        } else if (A[i] % 2 === 1 && A[j] % 2 === 1) {
            j--;
        } else if (A[i] % 2 === 0 && A[j] % 2 === 0) {
            i++;
        } else {
            i++;
            j--;
        }
    }
    return A;

};
console.log(sortArrayByParity([3, 1, 2, 4]));