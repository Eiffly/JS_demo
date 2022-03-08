var longestDiverseString = function (a, b, c) {
    const res = [];
    const arr = [[a, 'a'], [b, 'b'], [c, 'c']];

    while (true) {
        // 1.表示按照降序排序（这一步随时都要监视进行）
        arr.sort((a, b) => b[0] - a[0]);
        // console.log(arr);
        let hasNext = false;
        //i表示索引 c表示第一个的内容 ch表示第二个的内容
        for (const [i, [c, ch]] of arr.entries()) {
            if (c <= 0) {
                break;
            }
            const m = res.length;
            // 表示已经连着有两个了 
            if (m >= 2 && res[m - 2] === ch && res[m - 1] === ch) {
                continue;
            }
            hasNext = true;
            res.push(ch);
            arr[i][0]--;
            break;
        }
        if (!hasNext) {
            break;
        }
    }
    // 将字符串转换为数组
    return res.join('');
};
console.log(longestDiverseString(1, 1, 7));
console.log(longestDiverseString(2, 2, 1));
console.log(longestDiverseString(7, 1, 0));

