// https://leetcode-cn.com/problems/0VvYxa/
const getNext = (function () {
    const lines = require('fs').readFileSync(0).toString().split(/\r\n|\r|\n/)
    let i = 0;
    return () => lines[i++].trim().split(' ').map(x => 1 * x)
})()

const [n, m] = getNext()
const nums = getNext()
/**
 * 用途：判断子序列是不是合法的 时间复杂度N
 * @param {*} l 
 * @param {*} r 
 * @returns 子序列是不是最后我们想要的结果
 */
const judge = (l, r) => {
    let pre = 0
    for (let x of nums) {
        if (l <= x && x <= r) continue
        // 下面的两个步骤是为了保证递增性
        if (x < pre) return false
        pre = x
    }
    return true
}
/**
 * 用途：二分查找 时间复杂度logM
 * @param {*} l 
 * @returns r正式生效的位置（函数中是用left来表示的）
 */
const getR = l => {
    let left = l, right = m
    while (left <= right) {
        let mid = (left + right) >> 1
        if (judge(l, mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return left
}

let res = 0
for (let l = 1; l <= m; l++) {
    let r = getR(l)
    if (r === m + 1) break
    res += m - r + 1
}

console.log(res)
