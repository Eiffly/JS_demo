/**
 * 第一种方法：以数组作为桶
 * @param {*} arr 
 * @returns 
 */
//#region
function bucketSort(arr) {
    // 判空及防止数组越界
    if (arr === null || arr.length <= 1) return;
    // 找到最大值，最小值
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        else if (arr[i] < min) min = arr[i];
    }
    // 确定取值范围
    let range = max - min;
    //最大值和最小值都一样，还排个屁！！！
    if (range === 0) {
        return arr
    }
    // 设置桶的数量，这里我们设置为 100 个，可以根据实际情况修改。
    let bucketAmount = 100;
    // 桶和桶之间的间距
    let gap = parseFloat(range * 1.0 / (bucketAmount - 1))
    // 用二维数组来装桶，第一个维度是桶的编号，第二个维度是桶中的数字。初始化长度为 0
    let buckets = new Array(bucketAmount).fill(null)
    // 装桶
    for (const value of arr) {
        // 找到 value 属于哪个桶
        let index = parseInt((value - min) / gap);
        buckets[index] = add(buckets[index], value);
    }
    let index = 0;
    // 对每个桶内的数字进行单独排序
    for (let i = 0; i < bucketAmount; i++) {
        if (buckets[i] === null || buckets[i].length === 0) continue;
        // 这里需要结合其他排序算法，例如：插入排序
        insertSort(buckets[i]);
        // 排序完成后将桶内的结果收集起来
        arr.splice(index, buckets[i].length, ...buckets[i])
        // System.arraycopy(buckets[i], 0, arr, index, buckets[i].length);
        index += buckets[i].length;
    }
    return arr
}
// 数组扩容
function add(arr, num) {
    if (arr === null) return new Array(1).fill(num)
    arr.push(num)
    // int[] newArr = Arrays.copyOf(arr, arr.length + 1);
    // newArr[arr.length] = num;
    return arr;
}
// 插入排序
function insertSort(arr) {
    // 从第二个数开始，往前插入数字
    for (let i = 1; i < arr.length; i++) {
        let currentNumber = arr[i];
        let j = i - 1;
        // 寻找插入位置的过程中，不断地将比 currentNumber 大的数字向后挪
        while (j >= 0 && currentNumber < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        // 两种情况会跳出循环：1. 遇到一个小于或等于 currentNumber 的数字，跳出循环，currentNumber 就坐到它后面。
        // 2. 已经走到数列头部，仍然没有遇到小于或等于 currentNumber 的数字，也会跳出循环，此时 j 等于 -1，currentNumber 就坐到数列头部。
        arr[j + 1] = currentNumber;
    }
}
//#endregion


/**
 * 第三种方法：数组+链表的折中方案
 * @param {*} arr 
 * @returns 
 */
//#region 
// function bucketSort(arr) {
//     // 判空及防止数组越界
//     if (arr === null || arr.length <= 1) return;
//     // 找到最大值，最小值
//     let max = arr[0];
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         else if (arr[i] < min) min = arr[i];
//     }
//     // 确定取值范围
//     let range = max - min;
//     // 设置桶的数量，这里我们设置为 100 个，可以任意修改。
//     let bucketAmount = 100;
//     // 桶和桶之间的间距
//     let gap = parseFloat(range * 1.0 / (bucketAmount - 1))
//     HashMap < Integer, Queue < Integer >> buckets = new HashMap <> ();
//     // 装桶
//     for (const value of arr) {
//         // 找到 value 属于哪个桶
//         let index = parseInt((value - min) / gap);
//         if (!buckets.containsKey(index)) {
//             buckets.put(index, new LinkedList <> ());
//         }
//         buckets.get(index).add(value);
//     }
//     let index = 0;
//     // 对每个桶内的数字进行单独排序
//     for (let i = 0; i < bucketAmount; i++) {
//         Queue < Integer > bucket = buckets.get(i);
//         if (bucket == null) continue;
//         // 将链表转换为数组，提升排序性能
//         int[] arrInBucket = bucket.stream().mapToInt(Integer:: intValue).toArray();
//         // 这里需要结合其他排序算法，例如：插入排序
//         insertSort(arrInBucket);
//         // 排序完成后将桶内的结果收集起来
//         System.arraycopy(arrInBucket, 0, arr, index, arrInBucket.length);
//         index += arrInBucket.length;
//     }
// }
// // 插入排序
// function insertSort(arr) {
//     // 从第二个数开始，往前插入数字
//     for (let i = 1; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         let j = i - 1;
//         // 寻找插入位置的过程中，不断地将比 currentNumber 大的数字向后挪
//         while (j >= 0 && currentNumber < arr[j]) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         // 两种情况会跳出循环：1. 遇到一个小于或等于 currentNumber 的数字，跳出循环，currentNumber 就坐到它后面。
//         // 2. 已经走到数列头部，仍然没有遇到小于或等于 currentNumber 的数字，也会跳出循环，此时 j 等于 -1，currentNumber 就坐到数列头部。
//         arr[j + 1] = currentNumber;
//     }
// }
//#endregion



console.log(bucketSort([5, 8, 43, 65, 738]));