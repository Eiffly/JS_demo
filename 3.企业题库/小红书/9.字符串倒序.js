/* 薯队长带着小红薯参加密室逃脱团建游戏，首先遇到了反转游戏，
小红薯们根据游戏提示收集了多个单词线索，并将单词按要求加一个空格组 成了句子，
最终要求把句子按单词反转解密。 
说明：收集的时候单词前后可能会有多个空格，反转后单词不能有多个空格，具体见输入输出样例。 

输入：
the	sky	is												blue!

输出：
blue! is sky the
*/
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
})

let inArr = []
rl.on('line', line => {
    inArr.push(line.trim())
    console.log(turnDown(inArr[0]));
})

// 这时候我们嵌入相关的v8引擎

function turnDown(str) {
    str = str.trim().split(/\s+/)
    str = str.reverse()
    return str.join(" ")
}
// console.log(turnDown("the	sky	is												blue!"));
