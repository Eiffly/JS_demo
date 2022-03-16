/**
 * @param {number[]} arr1
 * @param {number[]} arr2 【里面的元素是各不相同的】
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    //统计数组 但是只是统计部分的内容
    let result = new Array(arr1.length).fill(-1)
    // 统计arr1中的每个元素的数目
    const max = Math.max(...arr1)
    const min = Math.min(...arr1)
    // 确定计数范围
    let range = max - min + 1;
    // 建立长度为 range 的【计数数组】，下标 0~range-1 对应数字 min~max
    let counting = new Array(range).fill(0)
    // 遍历 arr 中的每个元素
    for (const num of arr1) {
        counting[num - min]++;
    }

    let k = 0
    for (const num of arr2) {
        if (arr1.includes(num)) {
            while (counting[num - min] !== 0) {
                result[k++] = num
                counting[num - min]--
            }
        }
    }

    //剩余的没有的数进行升序排列
    for (let i = 0; i < counting.length; i++) {
        while (counting[i] !== 0) {
            result[k++] = i + min;
            counting[i]--
        }
    }
    // 对于剩余的数值进行相应的排序
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] = result[i]
    }
    return arr1
};

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
console.log(relativeSortArray([28, 6, 22, 8, 44, 17],  [22, 28, 8, 6]));
console.log(relativeSortArray([28, 6, 22, 8, 44, 17,17],  [22, 28, 8, 6]));