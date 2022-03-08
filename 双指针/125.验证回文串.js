/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // console.log(s);
    s = s.split(/\W|\_/).join("");
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s.charAt(left).toUpperCase() !== s.charAt(right).toUpperCase())
            return false;
        left++;
        right--;
    }
    return true;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
