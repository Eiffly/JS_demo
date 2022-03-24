// 数组的方法! 不可以使用（因为要耗费巨大的时间）
/**
 * @param {number} x
 * @return {number}
 */
//#region 
// var mySqrt = function (x) {
//     if (x < 1) return 0
//     let arr = new Array(x).fill(0).map((x, i) => (i + 1))
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] * arr[i] === x) {
//             return arr[i]
//         }
//         if (arr[i] * arr[i] > x) {
//             return arr[i - 1]
//         }
//     }
// };
//#endregion

// 袖珍计算器算法(由于js的小数点机制 仍旧行不通)
//#region 
// var mySqrt = function (x) {
//     if (x === 0) return 0
//     let ans = parseFloat(Math.exp(0.5 * parseFloat((Math.log(parseFloat(x))))))
//     return parseFloat((ans + 1) * (ans + 1)) <= x ? parseInt(ans + 1) : parseInt(ans)
// };
//#endregion


//二分法
var mySqrt = function (x) {
    let left = 0
    let right = x
    while (left <= right) {
        let mid = left + ((right - left) >> 1)//中间位置索引 x>>1 表示除以2并取整，缩小一下遍历的范围
        if (mid * mid <= x) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return right
};


console.log(mySqrt(0));
console.log(mySqrt(4));
console.log(mySqrt(5));
console.log(mySqrt(2147395600));  //46340
