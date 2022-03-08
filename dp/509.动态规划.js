/**
 * @param {number} n
 * @return {number}
 */
//recursion + memoization
var fib = function (n) {
    if (n <= 1) {
        return n;
    }

    const cache = [];
    cache[0] = 0;
    cache[1] = 1;
    for (let index = 2; index <= n; index++) {
        cache[index] = cache[index - 1] + cache[index - 2];
    }
    return cache[n];
};