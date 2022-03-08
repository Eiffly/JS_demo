var pancakeSort = function (arr) {
    const ans = []
    const len = arr.length
    for (let n = len; n > 1; n--) {
        let index = 0
        for (let i = 1; i < n; i++) {
            if (arr[i] >= arr[index]) {
                index = i
            }
        }
        if (index === n - 1) {
            continue
        }
        reverse(arr, index)
        reverse(arr, n - 1)
        ans.push(index + 1)
        ans.push(n)
    }
    return ans
}
// const reverse = (arr, end) => {
//     for (let i = 0, j = end; i < j; i++, j--) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
// };
const reverse = (arr, end) => {
    for (let i = 0; i <= Math.floor(end / 2); i++) {
        let temp = arr[i]
        arr[i] = arr[end - i]
        arr[end - i] = temp
    }
}

console.log(pancakeSort([3, 2, 4, 1]));
console.log(pancakeSort([1, 2, 3]));
