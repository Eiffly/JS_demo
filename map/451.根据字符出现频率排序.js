/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    let map = new Map()
    let res = ""
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }
    //map也是一个对象哦
    map = [...map].sort((a, b) => b[1] - a[1])
    // string特有的repeat方法
    for (const [c, count] of map) {
        res += c.repeat(count)
    }

    return res
};


console.log(frequencySort("tree"));