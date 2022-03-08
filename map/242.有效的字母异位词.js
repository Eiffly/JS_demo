/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 首先要看两个字符串的长度是不是一样
    if (s.length !== t.length) {
        return false;
    }

    // 创建map
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            // 放置特定的内容
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }



        if (map.has(t[i])) {
            // 放置特定的内容
            map.set(t[i], map.get(s[i]) - 1);
        } else {
            map.set(t[i], 1);
        }
    }

    for (const letter of map) {
        if (letter[1] !== 0) {
            return false;
        }
    }
    return true;
};