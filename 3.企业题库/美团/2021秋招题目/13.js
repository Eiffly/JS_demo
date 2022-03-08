//https://leetcode-cn.com/problems/pedXtA/
// 自己想的办法 超时了
const lines = require('fs').readFileSync("txt文件/13.txt").toString().split(/\r\n|\r|\n/)
const len = lines[0].split(" ").map(x => +x)[0]
const str = lines[1]
let ans = 0
let changdu = 1
while (changdu < len) {
    for (let left = 0, right = left + changdu - 1; right <= len - 1; left++, right++) {
        // 查找某个字符出现的次数
        let subString = str.substring(left, right + 1)
        let eNum = 0
        let fNum = 0
        for (let i = 0; i < subString.length; i++) {
            if (subString[i] === 'E') {
                eNum++
            } else {
                fNum++
            }
        }
        ans = Math.max(ans, eNum - fNum)
        console.log(subString);
    }
    changdu++
}
// console.log(len);
console.log(ans);