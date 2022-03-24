
//双指针
var containsDuplicate = function (nums) {
    if (nums.length <= 1) {
        return false
    }
    nums.sort((a, b) => a - b)
    // return nums
    // 这里我们用双指针来做这道题目
    let i = 0, j = 1
    while (i < j && j < nums.length - 1) {
        if (nums[i] === nums[j]) {
            return true
        } else {
            i++
            j++
        }
    }
    return false

};


//Set()
// var containsDuplicate = function (nums) {
//     let set = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         if (set.has(nums[i])) {
//             return true;
//         }
//         set.add(nums[i]);

//     }
//     return false;

// };

console.log(containsDuplicate([1, 2, 3, 3, 4, 3, 44, 5]));
console.log(containsDuplicate([1, 2, 3, 3, 4, 3, 44, 5]));