/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

    let i = 0, j = nums.length - 1;
    //特殊情况处理
    // if(target<nums[i]) return 0;
    if (target > nums[j]) return j + 1;
    else {
        //注意时间复杂度的要求，可以采用二分查找的方式来进行查找
        let k = parseInt((i + j) / 2)

        while (i <= j) {
            k = parseInt((i + j) / 2)
            if (nums[k] === target || (k !== 0 && target < nums[k] && target > nums[k - 1])) return k;
            else if (nums[k] > target) j = k - 1;
            else i = k + 1;
        }
    }
    return 0;



};