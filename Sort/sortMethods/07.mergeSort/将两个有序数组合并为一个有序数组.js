// 将两个有序数组合并为一个有序数组
function merge(arr1, arr2) {
    let result = new Array(arr1.length + arr2.length);
    let index1 = 0, index2 = 0;
    while (index1 < arr1.length && index2 < arr2.length) {
        if (arr1[index1] <= arr2[index2]) {
            result[index1 + index2] = arr1[index1];
            index1++;
        } else {
            result[index1 + index2] = arr2[index2];
            index2++;
        }
    }
    // 将剩余数字补到结果数组之后
    while (index1 < arr1.length) {
        result[index1 + index2] = arr1[index1];
        index1++;
    }
    while (index2 < arr2.length) {
        result[index1 + index2] = arr2[index2];
        index2++;
    }
    return result;
}

