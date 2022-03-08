/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let A = "";
    let B = "";
    for (let i = 0; i < s.length; i++) {
        if (A.length !== 0 && s.charAt(i) === "#") {
            A = A.slice(0, -1);
        } else if (s.charAt(i) !== "#") {
            A = A + s.charAt(i);
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (B.length !== 0 && t.charAt(i) === "#") {
            B = B.slice(0, -1);
        } else if (t.charAt(i) !== "#") {
            B = B + t.charAt(i);
        }

    }
    return A === B;
};


console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a##c", "#a#c"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("y#fo##f", "y#f#o##f"));