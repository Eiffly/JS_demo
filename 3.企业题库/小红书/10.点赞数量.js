// 这道题目是打家劫舍的翻版
/* 
薯队长写了n篇笔记，编号从1~n, 每篇笔记都获得了不少点赞数。
薯队长想从中选出一些笔记，作一个精选集合。挑选的时候有两个规则：
    1.不能出现连续编号的笔记。
    2.总点赞总数最多
    如果满足1，2条件有多种方案，挑选笔记总数最少的那种 

    输入：
    4
    1 2 3 1

    输出：
    4 2
*/
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
        // 处理
        var result = deal(inputs[1].trim().split(" ").map(x => +x));
        // 输出结果
        console.log(result);
        // 清0
        inputs.length = 0;
    }
});

function deal(nums) {
    // var result = 'nihaonihao';
    let result = []
    let dp = []
    let arr = []
    // 特殊情况处理
    if (nums.length <= 2) {
        result.push(Math.max(...nums))
        result.push(1)
        return result.join(" ")
    } else {
        dp[0] = nums[0]
        dp[1] = Math.max(dp[0], nums[1])
        arr[0] = 1
        arr[1] = 1
        for (let i = 2; i < nums.length; i++) {
            if (nums[i] + dp[i - 2] > dp[i - 1]) {
                dp[i] = nums[i] + dp[i - 2];
                arr[i] = 1 + arr[i - 2];
            } else {
                dp[i] = dp[i - 1];
                arr[i] = arr[i - 1]
            }
        }
    }

    result.push(dp[dp.length - 1])
    result.push(arr[arr.length - 1])
    return result.join(" ")
    // dosomething
    // return inputs;
}