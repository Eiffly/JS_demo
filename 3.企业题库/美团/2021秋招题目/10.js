//小团的默契游戏
const getNext = (function () {
    const fs = require('fs');
    const lines = fs.readFileSync("txt文件/10.txt").toString().trim().split(/\r\n|\r|\n/);
    let i = 0;
    return () => lines[i++].split(" ").map(x => +x);
})()


// 取出我们需要的元素
const [m, n] = getNext();
const seq = getNext();
let res = 0;

const subSeq = (l, r) => {
    let pre = 0;
    for (const x of seq) {
        if (x >= l && x <= r) continue;
        if (x < pre) return false;
        pre = x;
    }
    return true;
}
const getR = l => {
    let left = l, right = m;
    while (left <= right) {
        let mid = (left + right) >> 1;
        if (subSeq(l, mid)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

for (let l = 1; l <= m; l++) {
    let r = getR(l);
    res += m - r + 1;
}

console.log(res);