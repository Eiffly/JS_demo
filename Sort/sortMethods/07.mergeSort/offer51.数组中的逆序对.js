function reversePairs(nums) {
    if (nums.length == 0) return 0;
    let result = new Array(nums.length);
    return mergeSortAndCount(nums, 0, nums.length - 1, result);
}

// 对 arr 的 [start, end] 区间归并排序
function mergeSortAndCount(arr, start, end, result) {
    // 只剩下一个数字，停止拆分
    if (start === end) return 0;
    let middle = Math.floor((start + end) / 2)
    // 拆分左边区域，并将归并排序的结果保存到 result 的 [start, middle] 区间，记录左边逆序对数量
    let leftCount = mergeSortAndCount(arr, start, middle, result);
    // 拆分右边区域，并将归并排序的结果保存到 result 的 [middle + 1, end] 区间，记录右边逆序对数量
    let rightCount = mergeSortAndCount(arr, middle + 1, end, result);
    // 合并左右区域到 result 的 [start, end] 区间，记录合并过程中的逆序对数量
    let crossCount = mergeAndCount(arr, start, end, result);
    // 三者之和就是 [start, end] 区间内产生的所有逆序对数量
    return leftCount + rightCount + crossCount;
}

// 将 result 的 [start, middle] 和 [middle + 1, end] 区间合并，并记录逆序对数量
function mergeAndCount(arr, start, end, result) {
    let count = 0;
    let end1 = Math.floor((start + end) / 2)
    let start2 = end1 + 1;
    // 用来遍历数组的指针
    let index1 = start;
    let index2 = start2;
    while (index1 <= end1 && index2 <= end) {
        if (arr[index1] <= arr[index2]) {
            result[index1 + index2 - start2] = arr[index1++];
        } else {
            result[index1 + index2 - start2] = arr[index2++];
            // 当右边数字较小时，统计左边剩余数字的数量，也就是此数字可与左边数组组成的逆序对数量
            
            count += end1 - index1 + 1;
        }
    }
    // 将剩余数字补到结果数组之后
    while (index1 <= end1) {
        result[index1 + index2 - start2] = arr[index1++];
    }
    while (index2 <= end) {
        result[index1 + index2 - start2] = arr[index2++];
    }
    // 将 result 操作区间的数字拷贝到 arr 数组中，以便下次比较
    while (start <= end) {
        arr[start] = result[start++];
    }
    return count;
}


console.log(reversePairs([7, 5, 6, 4]));