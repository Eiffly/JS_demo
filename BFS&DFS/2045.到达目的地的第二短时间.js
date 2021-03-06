/**
 * @param {number} n            节点个数
 * @param {number[][]} edges    边集合
 * @param {number} time         每条边的时间
 * @param {number} change       每轮红绿灯交替的时间
 * @return {number}             严格次短路径
 */

var secondMinimum = function (n, edges, time, change) {
    // 1.创建每一个节点关于图的连接
    // 相当于创建了一个对应的二维数组
    const graph = new Array(n + 1).fill(0).map(() => new Array());
    for (const edge of edges) {
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }

    // 2.创建节点1到每个节点i的最优距离和严格次优距离(需要走几趟)
    // path[i][0] 表示从 1 到 i 的最短路长度，path[i][1] 表示从 1 到 i 的严格次短路长度
    const path = new Array(n + 1).fill(0).map(() => new Array(2).fill(Number.MAX_VALUE));
    path[1][0] = 0;
    const queue = [];
    queue.push([1, 0]);
    // console.log(path);
    // console.log(queue);
    while (path[n][1] === Number.MAX_VALUE) {
        const [cur, len] = queue.shift(); //这里的shift函数相当于pop函数
        for (const next of graph[cur]) {
            //更新最短路径
            if (len + 1 < path[next][0]) {
                path[next][0] = len + 1;
                queue.push([next, len + 1]);
            } else if (len + 1 > path[next][0] && len + 1 < path[next][1]) { //更新次短路径
                path[next][1] = len + 1;
                queue.push([next, len + 1]);
            }
        }
    }

    // 3.考虑到红绿灯的限制
    let res = 0;
    for (let i = 0; i < path[n][1]; i++) {
        if (res % (2 * change) > change) {
            res = res + (2 * change - res % (2 * change));
        }
        res += time;
    }
    return res;
};
console.log(secondMinimum(5, [[1, 2], [1, 3], [1, 4], [3, 4], [4, 5]], 3, 5)); //13
console.log(secondMinimum(2, [[1, 2]], 1, 2));                                 //5
