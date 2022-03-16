/**
 * 方式一：采用排序的方式来做
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let res = 0
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i += 2) {
        res += nums[i]
    }
    return res
};


/**
 * 方式二：还是采用排序的方式来做（相当于直接调用了基数排序的API，简单！）
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let res = 0
    nums = radixSort(nums)
    for (let i = 0; i < nums.length; i += 2) {
        res += nums[i]
    }
    return res
};
function radixSort(arr) {
    if (arr === null) return;
    // 找出最长的数
    let max = 0;
    for (const value of arr) {
        if (Math.abs(value) > max) {
            max = Math.abs(value);
        }
    }
    // 计算最长数字的长度
    let maxDigitLength = 0;
    while (max !== 0) {
        maxDigitLength++;
        max = Math.floor(max / 10)
    }
    // 使用计数排序算法对基数进行排序，下标 [0, 18] 对应基数 [-9, 9]
    let counting = new Array(19).fill(0)
    let result = new Array(arr.length)
    let dev = 1;
    for (let i = 0; i < maxDigitLength; i++) {
        for (const value of arr) {
            // 下标调整
            //JS分别取数值的整数部分和小数部分的几种方法:https://blog.csdn.net/MFWSCQ/article/details/97783178
            // let radix = parseInt(parseInt(value / dev) % 10) + 9
            let radix = Math.trunc(Math.trunc(value / dev) % 10) + 9
            counting[radix]++;
        }
        for (let j = 1; j < counting.length; j++) {
            counting[j] += counting[j - 1];
        }
        // 使用倒序遍历的方式完成计数排序
        for (let j = arr.length - 1; j >= 0; j--) {
            // 下标调整
            // let radix = parseInt(parseInt(arr[j] / dev) % 10) + 9
            let radix = Math.trunc(Math.trunc(arr[j] / dev) % 10) + 9
            result[--counting[radix]] = arr[j];
        }
        // 计数排序完成后，将结果拷贝回 arr 数组
        for (let i = 0; i < arr.length; i++) {
            arr[i] = result[i];
        }
        // 将计数数组重置为 0
        counting.fill(0);
        dev *= 10;
    }
    return arr
}
console.log(arrayPairSum([1, 4, 3, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
