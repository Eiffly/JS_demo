// 小团在一次星际旅行中，耗尽了飞船的能量，迷失在了空间魔方中，空间魔方中有N * N * N个能量粒子。美团云AI迅速帮小团分析出了空间魔方的能量分布图。
// 已知小团的飞船被困在能量值最高的点，能量值最高点有且只有一个。飞船每到达一个能量粒子就会吸收对应粒子的能量，该粒子会坍缩成小黑洞，飞船不可到达。小团驾驶的飞船只能从高能粒子驶向低能粒子，且每次只能从6个方向中选择一个前进。（±x,±y,±z）。
// 请帮助帮小团吸收最高的能量值。


// const rl = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
let L_idx = 0;
let map, visit;
let n, x, y, z, val;
let maxVal = 0, sx, sy, sz;
let res = 0;
let step = [[1, 0, 0], [0, 0, 1], [0, 1, 0], [-1, 0, 0], [0, 0, -1], [0, -1, 0]];

// map = new Array(2).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(0)));
// visit = new Array(2).fill(0).map(() => new Array(2).fill(0).map(() => new Array(2).fill(0)));
// map[0][0][0] = 7
// map[0][0][1] = 2
// map[0][1][0] = 4
// map[0][1][1] = 3
// map[1][0][0] = 6
// map[1][0][1] = 1
// map[1][1][0] = 5
// map[1][1][1] = 0

const judge = (x) => {
    return x >= 0 && x < n;
}

var dfs = function (x, y, z, val) {
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
};

rl.on("line", str => {
    L_idx++;
    const line = str.split(" ").map(Number);
    if (L_idx == 1) {
        [n] = line;
        if (n == 0) {
            console.log(0);
            return 0;
        }
        map = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
        visit = new Array(n).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
    }
    else {
        [x, y, z, val] = line;
        map[x][y][z] = val;
        if (val > maxVal) [sx, sy, sz, maxVal] = [x, y, z, val];
        if (L_idx == n * n * n + 1) {   //当所有行的都执行完成之后，执行深度优先搜索
            //console.log(maxVal);
            //console.log(map);
            dfs(sx, sy, sz, maxVal);
            console.log(res);
        }
    }
});
