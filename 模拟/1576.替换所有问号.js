/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function (s) {
    // 首先将字符串转换为相应的字符数组
    const res = s.split("");
    const n = res.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 3 && res[i] === '?'; j++) {
            let ok = true;
            if (i - 1 >= 0 && res[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) ok = false;
            if (i + 1 < n && res[i + 1] === String.fromCharCode('a'.charCodeAt() + j)) ok = false;
            if (ok) {
                res[i] = String.fromCharCode('a'.charCodeAt() + j);
            }
        }
    }
    // 将字符串转化为相应的字符数组
    answ = res.toString();
    while (answ.indexOf(',') !== -1) {
        answ = answ.replace(',', '');
    }
    return answ;
};