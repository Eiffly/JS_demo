/*
方法一： 先去遍历字符串，然后输出哈希表的第一个num为1的索引 
 */
// var firstUniqChar = function (s) {
//     const mp = new Map();
//     let maxFreq = 0;
//     const length = s.length;
//     for (const ch of s) {
//         mp.set(ch, (mp.get(ch) || 0) + 1)
//         const frequency = mp.get(ch)
//         maxFreq = Math.max(maxFreq, frequency);
//     }
//     for (const [ch, num] of mp.entries()) {
//         if (num === 1)
//             return s.indexOf(ch)
//     }

//     return -1

// };

var firstUniqChar = function (s) {
    const frequency = _.countBy(s);
    for (const [i, ch] of Array.from(s).entries()) {
        if (frequency[ch] === 1) {
            return i;
        }
    }
    return -1;
};


console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));