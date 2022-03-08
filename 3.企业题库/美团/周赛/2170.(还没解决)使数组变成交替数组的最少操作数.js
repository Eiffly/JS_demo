/**
 * @param {number[]} nums
 * @return {number}
 */
function getMost(nums, isEven) {
    const arr = new Array(100001).fill(0)
    for (let i = isEven ? 0 : 1; i < nums.length; i += 2) {
        arr[nums[i]]++
    }
    const queue = new MinPriorityQueue()
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            queue.enqueue(i, arr[i])
            if (queue.size() > 2) {
                queue.dequeue()
            }
        }
    }

    return queue.toArray().reverse().map(({ element }) => element)
}

function getNeed(nums, val, isEven) {
    let cnt = 0
    for (let i = isEven ? 0 : 1; i < nums.length; i += 2) {
        if (nums[i] !== val) {
            cnt++
        }
    }
    return cnt
}

var minimumOperations = function (nums) {
    const [x1, x2] = getMost(nums, true)
    const [y1, y2] = getMost(nums, false)

    return Math.min(
        x1 !== y1 ? getNeed(nums, x1, true) + getNeed(nums, y1, false) : Infinity,
        x1 !== y2 ? getNeed(nums, x1, true) + getNeed(nums, y2, false) : Infinity,
        x2 !== y1 ? getNeed(nums, x2, true) + getNeed(nums, y1, false) : Infinity
    )
};

console.log(minimumOperations([3, 1, 3, 2, 4, 3]));
// console.log(minimumOperations([1, 2, 2, 2, 2]));