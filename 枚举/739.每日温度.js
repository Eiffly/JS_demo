/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let num = temperatures.length
    let ans = []
    for (let i = 0; i < num; i++) {
        for (let j = 1; i + j < num; j++) {
            if (temperatures[i + j] > temperatures[i]) {
                ans.push(j)
                break
            }
            if (i + j === num - 1)
                ans.push(0)
        }
    }
    ans.push(0)


    return ans
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
console.log(dailyTemperatures([30, 40, 50, 60]));
console.log(dailyTemperatures([30, 60, 90]));
console.log(dailyTemperatures([55, 38, 53, 81, 61, 93, 97, 32, 43, 78]));//[3,1,1,2,1,1,0,1,1,0]