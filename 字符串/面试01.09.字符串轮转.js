/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    s = s1 + s1
    return s.includes(s2) ? true : false
};

console.log(isFlipedString("waterbottle", "erbottlewat"));
console.log(isFlipedString("aa", "aba"));
