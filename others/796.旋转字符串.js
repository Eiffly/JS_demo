/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
    // 两周的效果(重叠 看是不是存在)
    if (s.length !== goal.length) {
        return false;
    }
    const str = s + s; //abcdeabcde
    return str.includes(goal);
};