/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// 其中 1和2需要考虑其中的内容
var dayOfTheWeek = function (day, month, year) {
    let res = null;
    const week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    // 1.先计算相应的年份
    res = 365 * (year - 1971) + Math.floor((year - 1969) / 4)
    // 2.再去计算相应的月份
    for (let index = 0; index < month - 1; index++) {
        res += monthDay[index];
    }
    if (((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) && month >= 3) {
        res += 1;
    }
    // 3.再去看是月份中的第几天
    res += day;
    return week[(res + 3) % 7];
};