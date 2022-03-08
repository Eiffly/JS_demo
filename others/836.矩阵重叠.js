/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    //明确具体的场景
    // rec[左 下 右 上]
    // rec1右<=rec2左  rec1左>=rec2右 rec1上<=rec2下 rec1下>=rec2上
    if (rec1[2] <= rec2[0] || rec1[0] >= rec2[2] ||
        rec1[3] <= rec2[1] || rec1[1] >= rec2[3]) {
        return false;
    } else {
        return true;
    }
}

console.log(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]));
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));
console.log(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]));