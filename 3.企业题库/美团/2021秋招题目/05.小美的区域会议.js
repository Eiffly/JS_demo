// https://leetcode-cn.com/problems/Uo7Dr5/

/**
 * 
 */
const getNext = (function () {
    const lines = require('fs').readFileSync(0).toString().trim().split(/\r\n|\r|\n/)
    let i = 0
    return () => lines[i++].split(' ').map(x => 1 * x)   
})()
// 这里利用了解构赋值
let [n, k] = getNext()
const G = new Array(n + 1).fill(0).map(() => [])
for (let i = 1; i < n; i++) {
    let [a, b] = getNext()
    G[a].push(b)
    G[b].push(a)
}
const A = [0, ...getNext()]

const MOD = 1_000_000_007

const dfs = (u, v, i) => {
    let res = 1;
    for (let p of G[v]) {
        if (p === u) continue
        if (A[p] < A[i] || A[p] > A[i] + k) continue
        if (A[p] === A[i] && p < i) continue
        res = (res * (dfs(v, p, i) + 1)) % MOD
    }
    return res
}

let res = 0
for (let i = 1; i <= n; i++) {
    res = (res + dfs(0, i, i)) % MOD
}
console.log(res)

