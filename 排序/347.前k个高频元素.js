
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent = function (nums, k) {
    let map = new Map(), arr = [...new Set(nums)]
    nums.map((num) => {
        map.set(num, (map.get(num) || 0) + 1)
    })
    return arr.sort((a, b) => map.get(b) - map.get(a)).slice(0, k); //arr重新排序，并且顺序是按照map的value降序排序的，最后选择前k个
};


console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));