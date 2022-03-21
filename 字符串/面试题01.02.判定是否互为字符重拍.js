/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 方法一 遍历
// var CheckPermutation = function (s1, s2) {
//     if (s1.length !== s2.length) {
//         return false
//     }
//     let m1 = new Map()
//     let m2 = new Map()
//     for (const c of s1.split("")) {
//         m1.set(c, (m1.get(c) || 0) + 1)
//     }
//     for (const c of s1.split("")) {
//         m2.set(c, (m2.get(c) || 0) + 1)
//     }

//     for (const [key, value] of map1) {
//         if (m2.get(key) !== value) {
//             return false
//         }
//     }

//     return true
// };

//2.方法二
var CheckPermutation = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    s1 = s1.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt())
    s2 = s2.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt())
    s1 = s1.join("")
    s2 = s2.join("")
    return s1 === s2
};

// console.log(CheckPermutation("abc", "bca"));
console.log(CheckPermutation("asvnpzurz", "urzsapzvn"));