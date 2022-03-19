/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */


function merge(arr1, m, arr2, n) {
    let result = new Array(m + n);
    let index1 = 0, index2 = 0;
    while (index1 < m && index2 < n) {
        if (arr1[index1] <= arr2[index2]) {
            result[index1 + index2] = arr1[index1];
            index1++;
        } else {
            result[index1 + index2] = arr2[index2];
            index2++;
        }
    }
    // 将剩余数字补到结果数组之后
    while (index1 < m) {
        result[index1 + index2] = arr1[index1];
        index1++;
    }
    while (index2 < n) {
        result[index1 + index2] = arr2[index2];
        index2++;
    }
    for (let i = 0; i < m + n; i++) {
        arr1[i] = result[i];
    }
    return arr1;
}