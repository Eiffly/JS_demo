// 小团在一次星际旅行中，耗尽了飞船的能量，迷失在了空间魔方中，空间魔方中有N * N * N个能量粒子。美团云AI迅速帮小团分析出了空间魔方的能量分布图。
// 已知小团的飞船被困在能量值最高的点，能量值最高点有且只有一个。飞船每到达一个能量粒子就会吸收对应粒子的能量，该粒子会坍缩成小黑洞，飞船不可到达。小团驾驶的飞船只能从高能粒子驶向低能粒子，且每次只能从6个方向中选择一个前进。（±x,±y,±z）。
// 请帮助帮小团吸收最高的能量值。


// const rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
const getNext = (function () {
    const lines = require('fs').readFileSync("08_1.txt").toString().trim().split(/\r\n|\r|\n/)
    let i = 0
    return () => lines[i++].split(' ').map(x => +x)
})()


let map, visit;
let x, y, z, val;
let maxVal = 0, sx, sy, sz;
let res = 0;
let step = [[1, 0, 0], [0, 0, 1], [0, 1, 0], [-1, 0, 0], [0, 0, -1], [0, -1, 0]];

let [n] = getNext()
map = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
visit = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));

for (let i = 1; i <= 8; i++) {
    [x, y, z, val] = getNext();
    map[x][y][z] = val;
    if (val > maxVal) [sx, sy, sz, maxVal] = [x, y, z, val];
}
console.log(map);
console.log(visit);
console.log(dfs(sx, sy, sz, maxVal));


function judge(x) {
    return x >= 0 && x < n;
}

function dfs(x, y, z, val) {
    if (visit[x][y][z] && val <= visit[x][y][z]) return;
    visit[x][y][z] = val;
    for (let i = 0; i < 6; i++) {
        const nx = x + step[i][0], ny = y + step[i][1], nz = z + step[i][2];
        if (judge(nx) && judge(ny) && judge(nz) && map[nx][ny][nz] != -1 && map[nx][ny][nz] < map[x][y][z]) {
            let tmp = map[x][y][z];
            map[x][y][z] = -1;
            dfs(nx, ny, nz, val + map[nx][ny][nz]);
            map[x][y][z] = tmp;
        }
    }
    res = Math.max(res, val);
    return res
};

