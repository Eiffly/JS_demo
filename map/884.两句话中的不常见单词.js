/**
 * 方法一:先遍历两个字符数组的长度 然后再使用Map的foreach方法
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
    // 将字符串转化为字符串数组
    s1 = s1.split(' ');
    s2 = s2.split(' ');
    let map = new Map();
    let res = [];
    // 使用Map进行统计,左边为单词,右边为顺序
    for (let i = 0; i < s1.length; i++) {
        if (map.has(s1[i])) {
            map.set(s1[i], 0);
        } else {
            map.set(s1[i], map.get(s1[i]) + 1);
        }
    }
    for (let i = 0; i < s2.length; i++) {
        if (map.has(s2[i])) {
            map.set(s2[i], 0);
        } else {
            map.set(s2[i], map.get(s2[i]) + 1);
        }
    }
    // 最后利用Map迭代器
    map.forEach(function (value, key, map) {
        if (value !== 0) {
            res.push(key);
        }
    });
    return res;
};

/**
 * 方法二: 二建函数
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */

var uncommonFromSentences = function (s1, s2) {
    let freq = new Map();
    freq = insert(s1, freq);
    freq = insert(s2, freq);
    let res = [];
    for (const entry of freq.entries()) {
        if (entry[1] === 1) {
            res.push(entry[0]);
        }
    }
    return res;
};

const insert = (s, freq) => {
    const arrs = s.split(" ");
    for (const arr of arrs) {
        freq.set(arr, (freq.get(arr) || 0) + 1);
    }
    return freq;
}

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
console.log(uncommonFromSentences("apple apple", "banana"));