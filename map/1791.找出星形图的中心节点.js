/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
    let map = new Map()
    const m = edges.length, n = edges[0].length
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            map.set(edges[i][j], (map.get(edges[i][j]) || 0) + 1)
            if (map.get(edges[i][j]) > 1) {
                return edges[i][j]
            }
        }
    }

};

console.log(findCenter([[1, 2], [2, 3], [4, 2]]));
console.log(findCenter([[1, 2], [5, 1], [1, 3], [1, 4]]));