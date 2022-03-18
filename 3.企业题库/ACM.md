https://www.cnblogs.com/floor/p/6667059.html


//1.处理单行输入
```
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(data) {
    // 获取输入
    var inputs = data.trim().split(' ');

    // 处理
    var result = deal(inputs);

    // 输出结果
    console.log(result);
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething

    return result;
}
```

//2.处理多行输入（行数确定）
```
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var K = 1; // 输入K行（这里说一组有几行就是几）
var inputs = [];
rl.on('line', function(data) {
    // 获取输入
    inputs.push(data.trim());
    if (K == inputs.length) { //
        // 处理
        var result = deal(inputs);

        // 输出结果
        console.log(result);
        // 清0
        inputs.length = 0;

    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething
    return result;
}
```

//3.一组测试数据行数不确定（1+n模式)
//啥意思呢？就是说一组测试数据的第一行是一个数字n，然后后面有n行，这1+n行就是一组测试数据。模板给上
```
var readline = require('readline');

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputs = [];
var num = 0;
rl.on('line', function(data) {
    if(num == 0){
        num = Number(data.trim());
    } else {
        inputs.push(data.trim());
        if (num == inputs.length) {
            // 处理
            var result = deal(inputs);

            // 输出结果
            console.log(result);

            // 清0
            inputs.length = 0;  //不可改动
            num = 0;    //不可改动
        }
    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    var result = '';

    // dosomething

    return result;
}
```

