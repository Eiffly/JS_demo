/**
 * 方法一：LSD (Least significant digital) 只是针对于非负数
 * @param {*} arr 
 * @returns 
 */
//#region
function radixSort(arr) {
    if (arr === null) return;
    // 找出最大值
    let max = 0;
    for (const value of arr) {
        if (value > max) {
            max = value;
        }
    }
    // 计算最大数字的长度
    let maxDigitLength = 0;
    while (max !== 0) {
        maxDigitLength++;
        max = Math.floor(max / 10)
    }
    // 使用计数排序算法对基数进行排序
    let counting = new Array(10).fill(0)
    let result = new Array(arr.length).fill(0)
    let dev = 1;
    for (let i = 0; i < maxDigitLength; i++) {
        for (const value of arr) {
            let radix = Math.floor(Math.floor(value / dev) % 10)
            counting[radix]++;
        }
        for (let j = 1; j < counting.length; j++) {
            counting[j] += counting[j - 1];
        }
        // 使用倒序遍历的方式完成计数排序
        for (let j = arr.length - 1; j >= 0; j--) {
            let radix = Math.floor(Math.floor(arr[j] / dev) % 10)
            result[--counting[radix]] = arr[j];
        }
        // 计数排序完成后，将结果拷贝回 arr 数组
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }
        // System.arraycopy(result, 0, arr, 0, arr.length);
        // 将计数数组重置为 0
        counting.fill(0);
        dev *= 10;
    }
    return arr
}
//#endregion

/**
 * 方法二：LSD (Least significant digital) 包含负数
 * @param {*} arr 
 * @returns 
 */
//#region
// function radixSort(arr) {
//     if (arr === null) return;
//     // 找出最长的数
//     let max = 0;
//     for (const value of arr) {
//         if (Math.abs(value) > max) {
//             max = Math.abs(value);
//         }
//     }
//     // 计算最长数字的长度
//     let maxDigitLength = 0;
//     while (max !== 0) {
//         maxDigitLength++;
//         max = Math.floor(max / 10)
//     }
//     // 使用计数排序算法对基数进行排序，下标 [0, 18] 对应基数 [-9, 9]
//     let counting = new Array(19).fill(0)
//     let result = new Array(arr.length)
//     let dev = 1;
//     for (let i = 0; i < maxDigitLength; i++) {
//         for (const value of arr) {
//             // 下标调整
//             //JS分别取数值的整数部分和小数部分的几种方法:https://blog.csdn.net/MFWSCQ/article/details/97783178
//             // let radix = parseInt(parseInt(value / dev) % 10) + 9
//             let radix = Math.trunc(Math.trunc(value / dev) % 10) + 9
//             counting[radix]++;
//         }
//         for (let j = 1; j < counting.length; j++) {
//             counting[j] += counting[j - 1];
//         }
//         // 使用倒序遍历的方式完成计数排序
//         for (let j = arr.length - 1; j >= 0; j--) {
//             // 下标调整
//             // let radix = parseInt(parseInt(arr[j] / dev) % 10) + 9
//             let radix = Math.trunc(Math.trunc(arr[j] / dev) % 10) + 9
//             result[--counting[radix]] = arr[j];
//         }
//         // 计数排序完成后，将结果拷贝回 arr 数组
//         for (let i = 0; i < arr.length; i++) {
//             arr[i] = result[i];
//         }
//         // 将计数数组重置为 0
//         counting.fill(0);
//         dev *= 10;
//     }
//     return arr
// }
//#endregion


/**
 * 方法三：MSD (Most significant digital) 包含负数 
 * 目前结果不正确，等待进一步的整理！！！！！！！！！
 * @param {*} arr 
 * @returns 
 */

//#region 
function radixSort(arr) {
    if (arr === null) return;
    // 找到最大值
    let max = 0;
    for (const value of arr) {
        if (Math.abs(value) > max) {
            max = Math.abs(value);
        }
    }
    // 计算最大长度
    let maxDigitLength = 0;
    while (max !== 0) {
        maxDigitLength++;
        max = parseInt(max / 10)
    }
    radixSort0(arr, 0, arr.length - 1, maxDigitLength);
    return arr
}
// 对 arr 数组中的 [start, end] 区间进行基数排序
function radixSort0(arr, start, end, position) {
    if (start === end || position === 0) return;
    // 使用计数排序对基数进行排序
    let counting = new Array(19).fill(0)
    let result = new Array(end - start + 1).fill(0)
    let dev = parseInt(Math.pow(10, position - 1))
    for (let i = start; i <= end; i++) {
        // MSD, 从最高位开始
        let radix = parseInt(parseInt(arr[i] / dev) % 10) + 9
        counting[radix]++;
    }
    for (let j = 1; j < counting.length; j++) {
        counting[j] += counting[j - 1];
    }
    // 拷贝 counting，用于待会的递归
    let countingCopy = new Array(counting.length).fill(0)
    for (let index = 0; index < countingCopy.length; index++) {
        countingCopy[index] = counting[index];

    }
    // System.arraycopy(counting, 0, countingCopy, 0, counting.length);
    for (let i = end; i >= start; i--) {
        let radix = parseInt(parseInt(arr[i] / dev) % 10) + 9
        result[--counting[radix]] = arr[i];
    }

    // 计数排序完成后，将结果拷贝回 arr 数组
    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
    // System.arraycopy(result, 0, arr, start, result.length);
    // 对 [start, end] 区间内的每一位基数进行递归排序
    for (let i = 0; i < counting.length; i++) {
        radixSort0(arr, i === 0 ? start : start + countingCopy[i - 1], start + countingCopy[i] - 1, position - 1);
    }
}
//#endregion

// console.log(radixSort([65, 5, 738, 43, 8]));
// console.log(radixSort([6, 5, -7, -3, 8]));
console.log(radixSort([-65, 5, -738, -43, 8]));
console.log(radixSort([-1, 2, -8, -10]));