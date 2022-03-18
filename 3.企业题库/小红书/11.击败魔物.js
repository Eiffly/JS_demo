/* 
薯队长来到了迷宫的尽头，面前出现了N只魔物，Hi表示第i只魔物的血量，
薯队长需要在T个回合内击败所有魔物才能获胜。
每个回合薯队长可 以选择物理攻击一只魔物，
对其造成1点伤害（物理攻击次数无上限）; 
或者消耗1点法力释放必杀技对其造成固定X点伤害（薯队长开始拥有M 点法力）。
问X至少多大，薯队长才有机会获胜；如果无论如何都无法在T回合内获胜，则输出 - 1

输入描述:
第一行三个整数分别表示：N，T，M 第二行有N个整数：H1，H2，H3...HN

输出描述:
输出一个整数，表示必杀技一次最少造成多少固定伤害

输入例子1:
3 4 3
5 2 1

输出例子1:
3 */

var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var K = 2; // 输入K行（这里说一组有几行就是几）
var inputs = [];
rl.on('line', function (data) {
    // 获取输入
    inputs.push(data.trim());
    if (K == inputs.length) {
        [N, T, M] = inputs[0].trim().split(" ").map(x => +x)
        H = inputs[1].trim().split(" ").map(x => +x)
        let maxH = Math.max(...H);
        let min = Infinity;
        let totalH = H.reduce((pre, i) => pre + i);
        if (T < H.length) print(-1);
        else if (T === totalH) print(0);
        else {
            let l = 2;    //必杀为1和为0时结果相同，所以只取0，已经判断过
            let r = maxH;
            while (l <= r) {
                let mid = parseInt((l + r) / 2);
                if (beat(mid, T, M, H, totalH)) {
                    min = Math.min(min, mid);
                    r = mid - 1;
                }
                else
                    l = mid + 1;
            }
            if (min === Infinity) console.log(-1);
            else console.log(min);
        }
    }
});

function beat(x, T, M, H, totalH) {
    let hp = Array.from(H);
    hp.sort((a, b) => b - a);
    if (T - M + M * x < totalH) return false;
    else {
        //先把血量高的用必杀打到血量低于一次必杀的值
        for (let i = 0; i < hp.length && M > 0; i++) {
            if (hp[i] >= x) {
                hp[i] -= x;
                T--;
                M--;
                i--;
            }
        }
        hp.sort((a, b) => b - a);
        if (M >= hp.length) return true;    //如果必杀次数足够肯定能成功
        //如果必杀次数不够，用必杀消灭掉血量高的，剩下的判断用普攻能否消灭
        hp = hp.slice(M);
        totalH = hp.reduce((pre, i) => pre + i);
        if (T - M >= totalH) return true;
        else return false;
    }
}
