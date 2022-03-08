/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    const n = keysPressed.length;
    let ans = keysPressed[0];
    let maxtime = releaseTimes[0];
    for (let i = 1; i < n; i++) {
        let time = releaseTimes[i] - releaseTimes[i - 1];
        if (time > maxtime || (time == maxtime && i > ans)) {
            ans = i;
            maxtime = time;
        }
    }
    return ans;
};