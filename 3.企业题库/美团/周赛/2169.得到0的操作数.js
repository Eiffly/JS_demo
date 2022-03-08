/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function (num1, num2) {
    let step = 0
    while (num1 !== 0 && num2 !== 0) {
        if (num1 >= num2)
            num1 = num1 - num2
        else
            num2 = num2 - num1

        step++
    }
    return step
};
console.log(countOperations(2, 3));
console.log(countOperations(10, 10));