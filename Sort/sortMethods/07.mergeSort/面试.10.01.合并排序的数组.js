/**
 * 方法一：不可以采用浅拷贝的方法
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
// var merge = function (A, m, B, n) {
//     let C = A.slice(0, m)
//     let result = new Array(m + n)
//     let index1 = 0, index2 = 0;
//     while (index1 < m && index2 < n) {
//         if (C[index1] <= B[index2]) {
//             result[index1 + index2] = C[index1];
//             index1++;
//         } else {
//             result[index1 + index2] = B[index2];
//             index2++;
//         }
//     }
//     while (index1 < m) {
//         result[index1 + index2] = C[index1];
//         index1++;
//     }
//     while (index2 < n) {
//         result[index1 + index2] = B[index2];
//         index2++;
//     }
//     //浅拷贝，不可以 程序在操作的时候还是仍旧访问的之前的地址
//     // A=result  
//     // return A

//     for (let i = 0; i !== m + n; ++i) {
//         A[i] = result[i];
//     }
//     return A
// };



function merge(A, m, B, n) {
    let pa = 0, pb = 0;
    let sorted = new Array(m + n)
    let cur;
    while (pa < m || pb < n) {
        if (pa === m) {
            cur = B[pb++];
        } else if (pb === n) {
            cur = A[pa++];
        } else if (A[pa] < B[pb]) {
            cur = A[pa++];
        } else {
            cur = B[pb++];
        }
        sorted[pa + pb - 1] = cur;
    }
    for (let i = 0; i !== m + n; ++i) {
        A[i] = sorted[i];
    }
}



console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));