/**
 * 冒泡排序
 * @param {*} arr 
 * @returns arr
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 如果左边的数大于右边的数，则交换，保证右边的数字最大
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

/**
 * 冒泡排序优化方法一：如果一轮比较中没有发生过交换，则立即停止排序，因为此时剩余数字一定已经有序了。
 * @param {*} arr 
 * @returns arr
 */
function bubbleSort1(arr) {
    let swapped = true;
    for (let i = 0; i < arr.length - 1; i++) {
        // 如果没有发生过交换，说明剩余部分已经有序，排序完成
        if (!swapped) break;
        // 设置 swapped 为 false，如果发生交换，则将其置为 true
        swapped = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 如果左边的数大于右边的数，则交换，保证右边的数字最大
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // 表示发生了交换
                swapped = true;
            }
        }
    }
    return arr
}

/**
 * 冒泡排序优化方法二：
 * @param {*} arr 
 * @returns arr
 */
function bubbleSort(arr) {
    let swapped = true;
    // 最后一个没有经过排序的元素的下标
    let indexOfLastUnsortedElement = arr.length - 1;
    // 上次发生交换的位置
    let swappedIndex = -1;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < indexOfLastUnsortedElement; i++) {
            if (arr[i] > arr[i + 1]) {
                // 如果左边的数大于右边的数，则交换，保证右边的数字最大
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // 表示发生了交换
                swapped = true;
                // 更新交换的位置
                swappedIndex = i;
            }
        }
        // 最后一个没有经过排序的元素的下标就是最后一次发生交换的位置
        indexOfLastUnsortedElement = swappedIndex;
    }
}
