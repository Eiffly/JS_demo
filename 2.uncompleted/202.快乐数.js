/**
 * @param {number} n
 * @return {boolean}
 */
const getNext = function (n) {
    let totalSum = 0;
    while (n > 0) {
        let d = n % 10;
        n = Math.floor(n / 10)
        totalSum += d * d;
    }
    return totalSum;
}

var isHappy = function (n) {
    let set = new Set()
    while (n !== 1 && !set.has(n)) {
        set.add(n)
        n = getNext(n);
    }
    return n === 1
};
console.log(isHappy(19));
console.log(isHappy(119));
console.log(isHappy(82));