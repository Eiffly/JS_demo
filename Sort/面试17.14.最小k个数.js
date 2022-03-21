/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
    arr.sort((a, b) => a - b)
    return arr.splice(0, k)
};

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4));