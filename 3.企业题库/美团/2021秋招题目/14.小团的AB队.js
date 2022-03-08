//https://leetcode-cn.com/problems/LMkFuT/
const lines = require('fs').readFileSync("txt文件/14.txt").toString().trim().split(/\r\n|\r|\n/)
const [aNum, bNum] = lines[0].split(" ").map(x => +x)
let scores = lines[1].split(" ").map(x => +x)
let ans = ""
scores = scores.map(function (x, i) {
    x = new Array(2).fill(x)
    // 每行的第一个元素是数值 第二个元素是索引
    x[1] = i
    return x;
})


if (aNum === bNum) {
    //前x个是A 后y个是B
    ans = new Array(aNum).fill("A").join("").concat(new Array(bNum).fill("B").join(""))
} else if (aNum > bNum) {
    // x的总和越小 整体队伍的总和实例越大
    scores.sort((a, b) => a[0] - b[0]) //表示按照数值划分 正序
    // 前X个替换为A 后Y个替换为B
    scores = scores.map(function (x, i) {
        if (i < aNum) {
            x[0] = "A"
        } else {
            x[0] = "B"
        }
        return x
    })
    scores.sort((a, b) => a[1] - b[1]) //表示按照索引划分
    ans = scores.map(x => x[0]).join("")

} else {
    // x的总和越大 整体队伍的总和实例越大
    scores.sort((a, b) => b[0] - a[0]) //表示按照数值划分 倒序
    // 前X个替换为A 后Y个替换为B
    // 前X个替换为A 后Y个替换为B
    scores = scores.map(function (x, i) {
        if (i < aNum) {
            x[0] = "A"
        } else {
            x[0] = "B"
        }
        return x
    })
    scores.sort((a, b) => a[1] - b[1]) //表示按照索引划分
    ans = scores.map(x => x[0]).join("")
}

// scores.sort((a, b) => a[0] - b[0]) //表示按照数值划分


// console.log(scores);
console.log(ans);

