// https://leetcode-cn.com/problems/SDRaNt/
/**
 * 输入：
    1.输入第一行是一个正整数 n ，表示业务骨干和业务区域数量。
    2. 接下来有 n 行，每行 n 个整数，即一个 1~n 的排列，第 i 行表示 i-1 号业务骨干的意向顺序。
   输出：
    输出包含 n 个正整数，第 i 个正整数表示第 i 号业务骨干最终去的业务区域编号。
 */
const getNext = (function () {
    const lines = require('fs').readFileSync("txt文件/07.txt").toString().trim().split(/\r\n|\r|\n/)
    let i = 0
    return () => lines[i++].split(' ').map(x => 1 * x)
})()
// 这里利用了解构赋值
let [n] = getNext()
let set = new Set();
let res = [];
for (let i = 1; i <= n; i++) {
    let arr = getNext()
    for (const x of arr) {
        if (!set.has(x)) {
            set.add(x);
            res.push(x);
            break;
        }
    }
}

console.log(res.join(" "));