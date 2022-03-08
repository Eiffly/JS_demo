/**
 * @param {string} s
 * @return {string[]}
 */
// 注意这里已经 
var findRepeatedDnaSequences = function (s) {
    // // 特殊情况处理
    // if (s.length < 10)
    //     return null;


    const map = new Map();
    const res = [];
    let index = 0;
    //创建一个相应的map函数 
    // for (let index = 0; index + 10 <= s.length; index++) {
    while (index + 10 <= s.length) {
        const ss = s.substring(index, index + 10);

        // 如果不含有指定的数值 添加
        if (map.has(ss) === undefined) {
            map.set(ss, 1);
        } else if (map.get(ss) === 1) {
            // 如果含有，value+1
            map.set(ss, 2);
            res.push(ss);
        } else {
            map.set(ss, map.get(ss) + 1);
        }

        index++;
    }

    return res;

};

