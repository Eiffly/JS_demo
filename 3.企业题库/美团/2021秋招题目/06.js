const fs = require('fs');
const lines = fs.readFileSync("txt文件/06.txt").toString().split(/\r\n|\r|\n/);

const n = +lines[0]
let left = 0, right = n - 1;
const s = lines[1].split("");
while (s[left] !== "M") left++;
while (s[left] !== "T") left++;
while (s[right] !== "T") right--;
while (s[right] !== "M") right--;



console.log(s.slice(left + 1, right).join(""));