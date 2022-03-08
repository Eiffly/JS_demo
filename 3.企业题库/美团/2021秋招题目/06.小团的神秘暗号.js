// https://leetcode-cn.com/problems/z3XKBp/
/**
 * 1.头部字符串满足至少包含一个 “MT” 子序列，且以 T 结尾。
 *       例如 AAAMT 和 MAAAT 都是一个合法的头部字符串，而 MTAAA 就不是合法的头部字符串。
 * 2.尾部字符串需要满足至少包含一个 “MT” 子序列，且以 M 开头。
 * 3.这样的头尾字符串并不一定是唯一的，
 *      因此我们还有一个约束，就是 S 是满足头尾字符串合法的情况下的最长的字符串。
 */
const fs = require('fs')
const lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/)

const n = Number(lines[0])
const totalStr = lines[1]

let left = 0, right = n - 1
// str[index] H5 新增的,可以大量减少程序的运行的时间
while (totalStr[left] !== 'M') left++
while (totalStr[left] !== 'T') left++
while (totalStr[right] !== 'T') right--
while (totalStr[right] !== 'M') right--

console.log(totalStr.substring(left + 1, right))

