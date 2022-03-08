//注意这里的tree是一个数组
var totalFruit = function (tree) {
    //疑问：不是说是一个只读的变量吗？为什么后面还可以进行修改 const表示常量
    const map = new Map();
    let max = 1;
    let j = 0;
    for (let i = 0; i < tree.length; i++) {
        map.set(tree[i], i);
        if (map.size > 2) {
            let minIndex = tree.length - 1;//规定了数组最后一个节点的索引数值
            //这里感觉有点 for(int num:nums) 增强for循环的结构
            for (const entry of map.entries()) {
                if (entry[1] < minIndex) {
                    minIndex = entry[1];
                }
            }
            //用来删除对应的键
            map.delete(tree[minIndex]);
            j = minIndex + 1;
        }
        max = Math.max(max, i - j + 1);
    }
    return max;
}
console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));