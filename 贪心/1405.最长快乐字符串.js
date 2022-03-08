var longestDiverseString = function (a, b, c) {
    const res = [];
    const arr = [[a, 'a'], [b, 'b'], [c, 'c']];
    while (true) {
        // 先排序(注意下面的a和b表示的不是上面的ab)
        arr.sort((a, b) => (b[0] - a[0]));
        let hasNext = false;
        for (const [i, [c, ch]] of arr.entries()) {
            if (c <= 0) {
                break;
            }
            let m = res.length;
            if (m - 2 >= 0 && res[m - 2] === ch && res[m - 1] === ch) {
                continue;
            }
            res.push(ch);
            arr[i][0]--;
            hasNext = true;
            break;
        }
        if (!hasNext) {
            break;
        }
    }
    return res.join('');
};
console.log(longestDiverseString(1, 1, 7));
console.log(longestDiverseString(2, 2, 1));
console.log(longestDiverseString(7, 1, 0));


