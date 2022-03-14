function quickSort1(arr) {
    quickSort(arr, 0, arr.length - 1);
}
function quickSort(arr, start, end) {
    // 如果区域内的数字少于 2 个，退出递归
    if (start >= end) return;
    // 将数组分区，并获得中间值的下标
    let middle = partition(arr, start, end);
    // 对左边区域快速排序
    quickSort(arr, start, middle - 1);
    // 对右边区域快速排序
    quickSort(arr, middle + 1, end);
}
// 将 arr 从 start 到 end 分区，左边区域比基数小，右边区域比基数大，然后返回中间值的下标
function partition(arr, start, end) {
    // 取第一个数为基数
    let pivot = arr[start];
    // 从第二个数开始分区
    let left = start + 1;
    // 右边界
    let right = end;
    // left、right 相遇时退出循环
    while (left < right) {
        // 找到第一个大于基数的位置
        while (left < right && arr[left] <= pivot) left++;
        // 交换这两个数，使得左边分区都小于或等于基数，右边分区大于或等于基数
        if (left !== right) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            // exchange(arr, left, right);
            right--;
        }
    }
    // 如果 left 和 right 相等，单独比较 arr[right] 和 pivot
    if (left === right && arr[right] > pivot) right--;
    // 将基数和中间数交换
    if (right !== start) [arr[start], arr[right]] = [arr[right], arr[start]]
    // 返回中间值的下标
    return right;
}
// var majorityElement = function (nums) {
//     quickSort1(nums)
//     return nums[Math.floor(nums.length / 2)]
// };
// console.log(majorityElement([3, 2, 3]));


