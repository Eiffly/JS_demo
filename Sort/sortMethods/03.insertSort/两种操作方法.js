/**
 * 方法一：不断比较并且不断交换
 * @param {number[]} nums
 * @return {number[]}
 */
function insertSort(arr) {
    // 从第二个数开始，往前插入数字
    for (let i = 1; i < arr.length; i++) {
        // j 记录当前数字下标
        let j = i;
        // 当前数字比前一个数字小，则将当前数字与前一个数字交换
        while (j >= 1 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
            swap(arr, j, j - 1);
            // 更新当前数字下标
            j--;
        }
    }
}


/**
 * 方法二：不断比较，只交换一次
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        const cur = nums[i]
        let j = i - 1
        while (j >= 0 && cur < nums[j]) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = cur
    }
    return nums
};