/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
    let C = A ^ B
    let res = 0
    while (C !== 0) {
        // if (C & 1 === 1) {
        //     res++
        // }
        C = C & (C - 1);
        res++
        // C = C >> 1
    }
    return res
};

console.log(convertInteger(19, 15));
console.log(convertInteger(1, 2));
console.log(convertInteger(826966453, -729934991));