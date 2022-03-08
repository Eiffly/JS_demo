// https://leetcode-cn.com/problems/KLwc3e/const 

const getNext = (function () {
    const fs = require('fs');
    const lines = fs.readFileSync("txt文件/15.txt").toString().trim().split(/\r\n|\r|\n/);
    let i = 0;
    return () => lines[i++].split(" ").map(x => +x);
})()
const [n, m, xs, ys, xt, yt] = getNext()
let a = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
let b = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0))
let visited = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(false))
let direction = [0, -1, 1]

for (let i = 1; i <= n; i++) {
    line = getNext()
    for (let j = 1; j <= m; j++) {
        a[i][j] = line[j - 1]
    }
}
for (let i = 1; i <= n; i++) {
    line = getNext()
    for (let j = 1; j <= m; j++) {
        b[i][j] = line[j - 1]
    }
}
const bfs = time => {
    let queue = [[xs, ys]]
    while (queue.length) {
        let len = queue.length;
        while (len-- > 0) {
            let curPos = queue.shift();
            // 找到了小团，直接返回耗时
            if (curPos[0] === xt && curPos[1] == yt) {
                return time;
            }
            //在当前位置尝试移动
            for (let j = 0; j < direction.length; j++) {
                let remainder = time % (a[curPos[0]][curPos[1]] + b[curPos[0]][curPos[1]]);
                let x = curPos[0];
                let y = curPos[1];
                if (remainder < a[x][y]) {
                    // 时间处于[k*aij+k*bij), (k+1)*aij+k*bij)
                    x += direction[j];
                } else {
                    // 时间处于[(k+1)*aij+k*bij), (k+1)*aij+(k+1)*bij)
                    y += direction[j];
                }
                // 移动位置不合法
                if (x < 1 || x > n || y < 1 || y > m) continue;
                // 如果下一个位置还没有走过或者当前时刻不进行移动，就往队列中添加节点
                if (!visited[x][y] || j === 0) {
                    queue.push([x, y]);
                    visited[x][y] = true;
                }
            }
        }
        time++;
    }
    return time
}


let time = 0
visited[xs][ys] = true
console.log(bfs(time))
console.log(a);
console.log(b);