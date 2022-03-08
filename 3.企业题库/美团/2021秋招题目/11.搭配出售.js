//https://leetcode-cn.com/problems/0JzXQB/
const getNext = (function () {
    const lines = require('fs').readFileSync("txt文件/11.txt").toString().split(/\r\n|\r|\n/)
    let i = 0;
    return () => lines[i++].trim().split(' ').map(x => 1 * x)
})()

const main = () => {
    let [a, b, c, d, e, f, g] = getNext()
    if (e > f) [a, b, e, f] = [b, a, f, e]
    if (e > g) [a, c, e, g] = [c, a, g, e]
    if (f > g) [b, c, f, g] = [c, b, g, f]
    let res = 0
    if (c >= d) return d * g;
    [res, d] = [res + c * g, d - c]
    if (b >= d) return res + d * f;
    [res, d] = [res + b * f, d - b]
    return res + Math.min(a, d) * e
}

console.log(main())


