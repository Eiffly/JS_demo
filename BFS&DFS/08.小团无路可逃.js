//https://leetcode-cn.com/problems/vSYUMc
/**
 *题目要求：尽可能增加“小团”存活的时间
 *输入：
    1. 输入第一行包含三个整数 n，x，y，分别表示树上的结点数量，小美所在的位置和小团所在的位置。
    2.接下来有 n-1 行，每行两个整数 u，v，表示 u 号位置和 v 号位置之间有一条边，即 u 号位置和 v 号位置彼此相邻。
   输出：
    仅包含一个整数，表示小美追上小团所需的时间。
 */

const fs = require("fs");
const data = fs.readFileSync("txt文件/08.txt").toString().split(/\r\n|\n/);
const [N, x, y] = data[0].split(" ").map(Number);
// 建图
const G = new Array(N + 1).fill(0).map(v => []);
for (let i = 1; i < N; ++i) {
    const [u, v] = data[i].split(" ");
    G[+u].push(+v);
    G[+v].push(+u);
}
// BFS
const rx = bfs(x);
const ry = bfs(y);
let ans = 0;
for (let i = 1; i <= N; ++i) {
    if (rx[i] > ry[i]) ans = Math.max(ans, rx[i]);
}
console.log(ans);

function bfs(start) {
    const A = new Array(N + 1).fill(0);
    const seen = new Array(N + 1).fill(0);
    const Q = [];
    Q.push([start, 0]);
    seen[start] = 1;
    while (Q.length) {
        const [u, t] = Q.shift();
        A[u] = t;
        for (const v of G[u]) {
            if (!seen[v]) {
                Q.push([v, t + 1]);
                seen[v] = 1;
            }
        }
    }
    return A;
}
console.log(G);

