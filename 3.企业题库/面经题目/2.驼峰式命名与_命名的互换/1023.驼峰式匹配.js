/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
// 自己做的解法 错了 错在了第四个例子上
//#region 
// var camelMatch = function (queries, pattern) {
//     let res = new Array(queries.length).fill(true)
//     queries.forEach((v, i) => {
//         queries[i] = queries[i].replace(/[A-Z]/g, (match) => ' ' + match).trim().split(" ")
//     })
//     pattern = pattern.replace(/[A-Z]/g, (match) => ' ' + match).trim().split(" ")
//     // 按照数据进行划分
//     for (let i = 0; i < queries.length; i++) {
//         // let count = queries[i].length
//         max = Math.max(queries[i].length, pattern.length)
//         for (let j = 0; j < max; j++) {
//             if (j >= queries[i].length || !queries[i][j].includes(pattern[j])) {
//                 res[i] = false
//             }
//         }
//     }
//     return res
// };
//#endregion

// 别人的正则表达式
var camelMatch = function (queries, pattern) {
    let reg = new RegExp(`^${pattern.replace(/\b|\B/g, '[a-z]*')}$`)
    return queries.map(v => reg.test(v))
};

console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FB"));
console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBa"));
console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FoBaT"));
console.log(camelMatch(["CompetitiveProgramming", "CounterPick", "ControlPanel"], "CooP"));
