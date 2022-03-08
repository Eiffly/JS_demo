/**
 * @param {number} n
 * @return {number}
 */
/*
列表 arr 由在范围 [1, n] 中的所有整数组成，并按严格递增排序。请你对 arr 应用下述算法：
从左到右，删除第一个数字，然后每隔一个数字删除一个，直到到达列表末尾。
重复上面的步骤，但这次是从右到左。也就是，删除最右侧的数字，然后剩下的数字每隔一个删除一个。
不断重复这两步，从左到右和从右到左交替进行，直到只剩下一个数字。
给你整数 n ，返回 arr 最后剩下的数字。
 */

var lastRemaining = function (n) {
    // 如果只有一个
    if (n === 1) {
        return n;
    }
    // 依次赋值有没有更好的操作？？
    let arr = new Array(9);
    for (let index = 1; index <= n.length; index++) {
        arr[index - 1] = index;
    }

    let i = 1;
    while (arr.length === 1) {
        //1.先删除最开始的元素
        while (i <= n) {
            arr[i - 1].splice(i - 1, 1);
            i += 2;
        }
        //2.再去删除后面的元素
        i = n;
        while (i >= 1) {
            arr[i - 1].splice(i - 1, 1);
            i -= 2;
        }
    }

    return arr[0];

};