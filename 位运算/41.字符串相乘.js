//自己的解法（可能因为溢出的问题，无法实现..）
//#region 
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// var multiply = function (num1, num2) {
//     let index1 = num1.length - 1
//     let index2 = num2.length - 1
//     let multi = []
//     let count = 0
//     num1 = num1.split('')
//     num2 = num2.split('')
//     let res = []
//     // let i = 0
//     //选择里面比较短的那个
//     if (index1 <= index2) {
//         while (index1 >= 0) {
//             while (index2 >= 0) {
//                 multi.unshift(parseInt((+num1[index1] * +num2[index2] + count) % 10));//8 6
//                 count = parseInt((+num1[index1] * +num2[index2] + count) / 10)//1 1
//                 // count = parseInt((+num1[index1] * +num2[index2] + count) / 10);
//                 index2--
//                 // i++
//             }
//             multi.unshift(count)
//             // console.log(parseInt(multi.join("")));
//             res.push(parseInt(multi.join("")))
//             index1--
//             index2 = num2.length - 1
//             // i = 0
//             count = 0
//             multi = []
//         }
//     } else {
//         while (index2 >= 0) {
//             while (index1 >= 0) {
//                 multi.unshift(parseInt((+num1[index1] * +num2[index2] + count) % 10));//8 6
//                 count = parseInt((+num1[index1] * +num2[index2] + count) / 10)//1 1
//                 // count = parseInt((+num1[index1] * +num2[index2] + count) / 10);
//                 index1--
//                 // i++
//             }
//             multi.unshift(count)
//             // console.log(parseInt(multi.join("")));
//             res.push(parseInt(multi.join("")))
//             index2--
//             index1 = num1.length - 1
//             // i = 0
//             count = 0
//             multi = []
//         }
//     }
//     // if (count !== 0) {
//     //     res.push(count)
//     // }

//     // 最后还要考虑进位的问题
//     // 最后还要考虑数组转为字符串，可以尝试用reduce这个方法来实现，相应的乘以十处理
//     // return res
//     return res.reduce((pre, cur, curIndex) => pre + cur * Math.pow(10, curIndex), 0) + ""
// };
//#endregion

// 别人的解题方法,可以用于解决大数相乘的问题
const multiply = (num1, num2) => {
    const len1 = num1.length
    const len2 = num2.length
    const arr = new Array(len1 + len2).fill(0)

    for (let i = len1 - 1; i >= 0; i--) {
        const num_1 = +num1[i]
        for (let j = len2 - 1; j >= 0; j--) {
            const num_2 = +num2[j]
            // const multi = num_1 * num_2;
            const sum = arr[i + j + 1] + num_1 * num_2;
            arr[i + j + 1] = (arr[i + j + 1] + num_1 * num_2) % 10
            arr[i + j] += (sum / 10) | 0
        }
    }
    let res = arr.join('')
    // 移除掉前面的0
    while (res[0] == "0") {
        res = res.substring(1)
    }
    return res.length ? res : "0"
};


console.log(multiply("2", "3"));
console.log(multiply("123", "456")); //56088
console.log(multiply("123456789", "987654321")); //56088