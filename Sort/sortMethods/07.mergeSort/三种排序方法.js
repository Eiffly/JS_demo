/**
 * 归并排序方法1  （容易读取版本）
 * @param {*} arr 
 * @returns 
 */
//#region 
function mergeSort1(arr) {
    if (arr.length == 0) return;
    let result = new Array(arr.length);
    mergeSort(arr, 0, arr.length - 1, result);
}

// 对 arr 的 [start, end] 区间归并排序
function mergeSort(arr, start, end, result) {
    // 只剩下一个数字，停止拆分
    if (start === end) return;
    let middle = Math.floor((start + end) / 2)
    // 拆分左边区域，并将归并排序的结果保存到 result 的 [start, middle] 区间
    mergeSort(arr, start, middle, result);
    // 拆分右边区域，并将归并排序的结果保存到 result 的 [middle + 1, end] 区间
    mergeSort(arr, middle + 1, end, result);
    // 合并左右区域到 result 的 [start, end] 区间
    merge(arr, start, end, result);
}

// 将 result 的 [start, middle] 和 [middle + 1, end] 区间合并
function merge(arr, start, end, result) {
    let middle = Math.floor((start + end) / 2)
    // 数组 1 的首尾位置
    let start1 = start;
    let end1 = middle;
    // 数组 2 的首尾位置
    let start2 = middle + 1;
    let end2 = end;
    // 用来遍历数组的指针
    let index1 = start1;
    let index2 = start2;
    // 结果数组的指针
    let resultIndex = start1;
    while (index1 <= end1 && index2 <= end2) {
        if (arr[index1] <= arr[index2]) {
            result[resultIndex++] = arr[index1++];
        } else {
            result[resultIndex++] = arr[index2++];
        }
    }
    // 将剩余数字补到结果数组之后
    while (index1 <= end1) {
        result[resultIndex++] = arr[index1++];
    }
    while (index2 <= end2) {
        result[resultIndex++] = arr[index2++];
    }
    // 将 result 操作区间的数字拷贝到 arr 数组中，以便下次比较
    for (let i = start; i <= end; i++) {
        arr[i] = result[i];
    }
}
//#endregion

/**
 * 归并排序方法2 (变量优化版本)
 * @param {*} arr
 * @returns
 */
//#region
function mergeSort1(arr) {
    if (arr.length == 0) return;
    let result = new Array(arr.length);
    mergeSort(arr, 0, arr.length - 1, result);
}

// 对 arr 的 [start, end] 区间归并排序
function mergeSort(arr, start, end, result) {
    // 只剩下一个数字，停止拆分
    if (start === end) return;
    let middle = Math.floor((start + end) / 2);
    // 拆分左边区域，并将归并排序的结果保存到 result 的 [start, middle] 区间
    mergeSort(arr, start, middle, result);
    // 拆分右边区域，并将归并排序的结果保存到 result 的 [middle + 1, end] 区间
    mergeSort(arr, middle + 1, end, result);
    // 合并左右区域到 result 的 [start, end] 区间
    merge(arr, start, end, result);
}

// 将 result 的 [start, middle] 和 [middle + 1, end] 区间合并
function merge(arr, start, end, result) {
    let end1 = Math.floor((start + end) / 2);
    let start2 = end1 + 1;
    // 用来遍历数组的指针
    let index1 = start;
    let index2 = start2;
    while (index1 <= end1 && index2 <= end) {
        if (arr[index1] <= arr[index2]) {
            result[index1 + index2 - start2] = arr[index1++];
        } else {
            result[index1 + index2 - start2] = arr[index2++];
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
}
//#endregion


/**
 * 归并排序的方法3： 原地归并排序（不再开辟额外的内存空间，打着归并排序的幌子，本质是插入排序，时间复杂度是O（n^2））
 * @param {*} arr
 * @returns
 */
//#region 
function mergeSort1(arr) {
    if (arr.length === 0) return;
    mergeSort(arr, 0, arr.length - 1);
}

// 对 arr 的 [start, end] 区间归并排序
function mergeSort(arr, start, end) {
    // 只剩下一个数字，停止拆分
    if (start === end) return;
    let middle = Math.floor((start + end) / 2)
    // 拆分左边区域
    mergeSort(arr, start, middle);
    // 拆分右边区域
    mergeSort(arr, middle + 1, end);
    // 合并左右区域
    merge(arr, start, end);
}

// 将 arr 的 [start, middle] 和 [middle + 1, end] 区间合并
function merge(arr, start, end) {
    let end1 = Math.floor((start + end) / 2)
    let start2 = end1 + 1;
    // 用来遍历数组的指针
    let index1 = start;
    let index2 = start2;
    while (index1 <= end1 && index2 <= end) {
        if (arr[index1] <= arr[index2]) {
            index1++;
        } else {
            // 右边区域的这个数字比左边区域的数字小，于是它站了起来
            let value = arr[index2];
            let index = index2;
            // 前面的数字不断地后移
            while (index > index1) {
                arr[index] = arr[index - 1];
                index--;
            }
            // 这个数字坐到 index1 所在的位置上
            arr[index] = value;
            // 更新所有下标，使其前进一格
            index1++;
            index2++;
            end1++;
        }
    }
}
//#endregion

