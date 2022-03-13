// 1.按照sort方法写的
// var findRelativeRanks = function (score) {
//     // 将一维数组转换为二维数组，记录索引
//     score = score.map((v, i) => [v, i])
//     // 排列大小
//     score = score.sort((a, b) => b[0] - a[0])
//     // 转为相应的字符串
//     score = score.map((v, i) => {
//         switch (i) {
//             case 0:
//                 v[0] = "Gold Medal"
//                 break;
//             case 1:
//                 v[0] = "Silver Medal"
//                 break;
//             case 2:
//                 v[0] = "Bronze Medal"
//                 break;
//             default:
//                 v[0] = i + 1 + ""
//         }
//         return v
//     })
//     // 再按照排序决定大小，截取每个数据的v[0]
//     score = score.sort((a, b) => a[1] - b[1]).map(v => v[0])

//     return score
// };


//2. 按照希尔排序的思路来写
var findRelativeRanks = function (nums) {
    let arr = [...nums]
    shellSort(arr);
    // 建立每位运动员的成绩和名次的映射关系
    let map = new Map()
    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], i + 1);
    }
    let result = new Array(arr.length).fill(0)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === arr[0]) result[i] = "Gold Medal";
        else if (nums[i] === arr[1]) result[i] = "Silver Medal";
        else if (nums[i] === arr[2]) result[i] = "Bronze Medal";
        else result[i] = map.get(nums[i]) + "";
    }
    return result;
}
function shellSort(arr) {
    // 间隔序列，在希尔排序中我们称之为增量序列
    for (let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap /= 2)) {
        // 从 gap 开始，按照顺序将每个元素依次向前插入自己所在的组
        for (let i = gap; i < arr.length; i++) {
            // currentNumber 站起来，开始找位置
            let currentNumber = arr[i];
            // 该组前一个数字的索引
            let preIndex = i - gap;
            while (preIndex >= 0 && currentNumber > arr[preIndex]) {
                // 向后挪位置
                arr[preIndex + gap] = arr[preIndex];
                preIndex -= gap;
            }
            // currentNumber 找到了自己的位置，坐下
            arr[preIndex + gap] = currentNumber;
        }
    }
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));

