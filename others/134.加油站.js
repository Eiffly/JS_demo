/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    for (let index = 0; index < gas.length; index++) {
        totalGas += gas[index];
        totalCost += cost[index];
    }
    if (totalGas < totalCost) {
        return -1;
    }

    let currentGas = 0;
    let start = 0;
    for (let index = 0; index < gas.length; index++) {
        currentGas = currentGas - cost[index] + gas[index];
        if (currentGas < 0) {
            start = index + 1;
        }
    }
    return start;

};