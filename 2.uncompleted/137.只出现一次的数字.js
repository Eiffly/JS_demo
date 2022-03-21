/**
 * @param {number[]} nums
 * @return {number}
 */
// 遍历方式：时间复杂度最低
var singleNumber = function (nums) {
    let map = new Map()
    let ans = 0
    for (const x of nums) {
        map.set(x, (map.get(x) || 0) + 1)
    }
    map.forEach((value, key) => {
        if (value === 1) {
            ans = key
        }
    })
    return ans
};
console.log(singleNumber([2, 2, 3, 2]));
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]));
