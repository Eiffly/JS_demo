const fs = require("fs");
const lines = fs.readFileSync("txt文件/03.txt").toString().trim().split(/\r\n|\r|\n/).map(v => v.split(" "));
const M = +lines[0][1];
const data = lines.slice(1).map((v, i) => [i + 1, +v[0] + +v[1] * 2]);
const ans = data
    .sort((a, b) => (b[1] - a[1]))
    .slice(0, M)
    .map(v => v[0])
    .sort((a, b) => a - b);
// console.log(ans);
process.stdout.write(ans.join(" "));