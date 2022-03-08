/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0;
    let map = new Map();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    for (const num of map) {
        if (num[1] === 1) {
            sum += num[0];
        }
    }
    return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
console.log(sumOfUnique([1, 1, 1, 1, 1]));
console.log(sumOfUnique([1, 2, 3, 4, 5]));