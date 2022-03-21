/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1
    while (i < j) {
        if (numbers[i] + numbers[j] === target) {
            return [i + 1, j + 1]
        } else if (numbers[i] + numbers[j] < target) {
            i++
        } else {
            j--
        }
    }
    return [-1, -1]

};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([0, 0, 3, 4], 0));