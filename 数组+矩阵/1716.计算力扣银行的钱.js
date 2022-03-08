/**
 * @param {number} n
 * @return {number}
 */
// Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。
// 最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。
// 给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var totalMoney = function (n) {
    let A = Math.floor(n / 7) + 1;
    const B = n % 7;
    let sum = 0;
    for (let index = 1; index <= A; index++) {
        if (index !== A) {
            sum += (7 * (index + index + 6)) / 2;
        } else {
            sum += B * (A + A + B - 1) / 2;
        }
    }
    return sum;
};


console.log(totalMoney(4));
console.log(totalMoney(10));
console.log(totalMoney(20));