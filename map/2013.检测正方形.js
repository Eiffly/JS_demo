var DetectSquares = function () {
    this.cnt = new Map();
};

DetectSquares.prototype.add = function (point) {
    const x = point[0], y = point[1];
    // 如果没有这个点
    if (!this.cnt.has(y)) {
        this.cnt.set(y, new Map());
    }
    const yCnt = this.cnt.get(y);
    yCnt.set(x, (yCnt.get(x) || 0) + 1);

};

DetectSquares.prototype.count = function (point) {
    let res = 0
    let x = point[0], y = point[1];
    // 特殊情况处理 如果没有y的数值
    if (!this.cnt.has(y)) {
        return 0;
    }
    const yCnt = this.cnt.get(y);
    const entries = this.cnt.entries();
    for (const [col, colCnt] of entries) {
        if (col !== y) {
            //根据对称性 可以忽略绝对值的影响
            let d = col - y;
            res += (colCnt.get(x) || 0) * (yCnt.get(x + d) || 0) * (colCnt.get(x + d) || 0);
            res += (colCnt.get(x) || 0) * (yCnt.get(x - d) || 0) * (colCnt.get(x - d) || 0);
        }
    }
    return res;
};

var detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);

console.log(detectSquares.count([11, 10]));
console.log(detectSquares.count([14, 8]));
detectSquares.add([11, 2]);
console.log(detectSquares.count([11, 10]));