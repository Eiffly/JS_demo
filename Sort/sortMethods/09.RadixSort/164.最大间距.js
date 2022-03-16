/**
 * @param {number[]} nums
 * @return {number}
 */

//数组需要进行相应的排序
//有线性时间和空间复杂度的要求
//只能用【基数排序】，计数排序对于[2,999999999]的情况是无能为力的
//试了一下nums.sort((a,b)=>a-b) 的方法也可以，但是无法阐述内在的原理

var maximumGap = function (nums) {
    //如果数据的大小小于2 直接返回数据0就可以了
    if (nums.length < 2) return 0
    let max = 0
    nums = radixSort(nums)
    for (let i = 1; i < nums.length; i++) {
        // let chazhi = nums[i] - nums[i - 1]
        max = Math.max(max, nums[i] - nums[i - 1])
    }
    return max
};


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
console.log(maximumGap([3, 6, 9, 1]));
console.log(maximumGap([10]));