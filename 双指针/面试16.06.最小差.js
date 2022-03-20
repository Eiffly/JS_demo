/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
    let i = j = 0
    let arr1 = [...a].sort((a, b) => (a - b))
    let arr2 = [...b].sort((a, b) => (a - b))
    let min = Number.MAX_SAFE_INTEGER
    while (i < arr1.length && j < arr2.length) {
        min = Math.min(min, Math.abs(arr1[i] -arr2[j]))
        arr1[i]<arr2[j]?i++:j++
    }
    return min
};

console.log(smallestDifference(new Set([1, 3, 15, 11, 2]), new Set([23, 127, 235, 19, 8])));
