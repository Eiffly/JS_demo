const fs = require('fs');
let lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/);
let n = parseInt(lines[0]);
if (n != (lines.length - 1)) {
    return 'Wrong';
}
for (let i = 1; i < lines.length; i++) {
    console.log(getAnwser(lines[i]));
}

function getAnwser(line) {
    if (line.length < 2) return 'Wrong';  //节省时间
    // 首先判断第一位
    if (line.charCodeAt(0) < 65 || line.charCodeAt(0) > 122 || (line.charCodeAt(0) > 90 && line.charCodeAt(0) < 97)) return 'Wrong';
    let flag = 0;
    let reg = new RegExp('^[0-9]*$');
    for (let i = 1; i < line.length; i++) {
        if (!reg.test(line[i])) {
            if (line.charCodeAt(i) < 65 || line.charCodeAt(i) > 122 || (line.charCodeAt(i) > 90 && line.charCodeAt(i) < 97)) return 'Wrong';
        } else {
            flag = 1;
        }

    }
    return flag === 1 ? 'Accept' : 'Wrong'
}