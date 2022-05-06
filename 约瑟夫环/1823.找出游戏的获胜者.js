/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
    // 生成相应的数组
    let queue = new Array(n).fill(0).map((v, i) => v = i + 1)
    // 生成相应的文本内容
    while (queue.length > 1) {
        for (let j = 1; j < k; j++) {
            queue.push(queue.shift())
        }
        queue.shift()
    }
    return queue[0]
};

console.log(findTheWinner(5, 2));
console.log(findTheWinner(5, 3));