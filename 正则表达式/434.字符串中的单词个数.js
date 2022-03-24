/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    if (s.trim() === "") return 0
    return s.trim().split(/\s+/).length
};
console.log(countSegments(", , , ,        a, eaefa"));  //6