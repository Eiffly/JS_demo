/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const s = [...dominoes]  //相当于将字符串转为了数组，因为原始的字符串是不可变的
    let left = 'L'
    let n = s.length, i = 0
    while (i < n) {
        let j = i
        while (j < n && s[j] === '.') {
            j++
        }
        const right = j < n ? s[j] : 'R'
        if (left === right) {
            while (i < j) {
                s[i++] = right
            }
        } else if (left === 'R' && right === 'L') {
            let k = j - 1
            while (i < k) {
                s[i++] = 'R'
                s[k--] = 'L'
            }
        }
        left = right
        i = j + 1
    }
    return s.join('')

};
console.log(pushDominoes(".L.R...LR..L.."));
console.log(pushDominoes("RR.L"));