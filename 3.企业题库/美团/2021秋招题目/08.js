//https://leetcode-cn.com/problems/vSYUMc/
//1.提取文件
const fs = require('fs')
const lines = fs.readFileSync("txt文件/08.txt").toString().trim().split(/\r\n|\r|\n/);
//2.创建相应的图
const [n, x, y] = lines[0].split(" ").map(x => +x);
let G = new Array(n + 1).fill(0).map(() => new Array());
for (let index = 1; index < lines.length; index++) {
    const [i, j] = lines[index].split(" ").map(x => +x);;
    G[i].push(j);
    G[j].push(i);
}
console.log(G);

//3.通过广度优先搜索进行时间搜索
const bfs = start => {
    let A = new Array(n + 1).fill(0);
    let seen = new Array(n + 1).fill(0);
    let queue = [[start, 0]];
    seen[start] = 1;
    while (queue.length) {
        // u表示当前节点的连接节点 t表示start到当前节点的时间
        const [u, t] = queue.shift();
        A[u] = t;
        for (const x of G[u]) {
            if (!seen[x]) {
                queue.push([x, t + 1]);
                seen[x] = 1;
            }
        }
    }
    return A;
}

const rx = bfs(x);
const ry = bfs(y);
let time = 0;
for (let i = 1; i <= n; ++i) {
    if (rx[i] > ry[i]) time = Math.max(time, rx[i]);
}

console.log(time);
