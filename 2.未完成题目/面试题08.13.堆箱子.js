//考察的是排序问题和动态规划问题
function pileBox(box) {
    box.sort((a, b) => a[0] - b[0]);
    let DP = new Array(box.length).fill(0).map(x => new Array(2).fill(0))
    // int[][]DP = new int[box.length][2];
    DP[0][0] = 0; DP[0][1] = box[0][2];
    for (let i = 1; i < box.length; i++) {
        let temp = box[i];
        let max = temp[2];
        for (let j = 0; j < i; j++) {
            let pre = box[j];
            if (temp[0] > pre[0] && temp[1] > pre[1] && temp[2] > pre[2]) {
                let val = temp[2] + DP[j][1];
                if (val > max) max = val;
            }
        }
        DP[i][1] = max; DP[i][0] = Math.max(DP[i - 1][0], DP[i - 1][1]);
    }
    return Math.max(DP[box.length - 1][0], DP[box.length - 1][1]);
}


console.log(pileBox([[1, 1, 1], [2, 2, 2], [3, 3, 3]]));
console.log(pileBox([[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]));