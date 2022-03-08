const lines = require('fs').readFileSync("txt文件/13.txt").toString().split(/\r\n|\r|\n/)
const str = lines[1]
let dp = 0
let max = 0
for (const c of str) {
    if (c === 'E') {
        dp++
        max = Math.max(max, dp)
    } else {
        // 不可以用dp--!!!
        dp = dp - 1 > 0 ? dp - 1 : 0
        // // 不推荐在三元运算符号中使用自增或者自减运算符
        // let dp = 3
        // dp = (dp - 1 > 0) ? dp-- : 0
        // console.log(dp);//3
    }
}

console.log(max);

