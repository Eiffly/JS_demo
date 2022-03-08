
// 题目链接
// https://leetcode-cn.com/problems/BaR9fy/

const fs = require('fs') //使用文件系统，需要先引入fs模块，fs是核心模块，直接引入不需要下载
// 输入格式：获取单个用例的所有行，此时 lines[0] 为第一行数据
/**
 * 下面代码的含义:
 * 分割: 
 * readFileSync(0) 简单文件读取,输出的是Buffer
 * toString()      可以Buffer转为相应的字符串
 * trim()          去掉字符串首尾的空格
 * split(/\r\n|\r|\n/)  将字符串转换为相应的字符数组，那位以回车符号+换行符号or 回车符号 or 换行符号 作为分割 
 * 
 */
var lines = fs.readFileSync(0).toString().trim().split(/\r\n|\r|\n/);
let n = parseInt(lines[0]);
if (n != (lines.length - 1)) {
    // return 'Wrong';
}
for (let i = 1; i < lines.length; i++) {
    console.log(getAns(lines[i]))
}
function getAns(s) {
    if (s.length < 2) return 'Wrong'  //3.用户名需要包含至少一个字母和一个数字,因此长度大于2，可以节省时间
    let tmp = s.charCodeAt(0)
    if (tmp < 65 || tmp > 122 || (tmp > 90 && tmp < 97)) return 'Wrong'  //1.用户名的首字符必须是大写或者小写字母
    var reg = new RegExp(/^[0-9]*$/)    //3.用户名需要包含至少一个字母和一个数字，0-9出现0个或者多个()
    var num = 0 //相当于标志位
    for (var i = 1; i < s.length; i++) {
        if (!reg.test(s[i])) {
            let x = s.charCodeAt(i)
            if (x < 65 || x > 122 || (x > 90 && x < 97)) return 'Wrong'  //2.用户名只能包含大小写字母，数字。
        } else {
            num = 1
        }
    }
    return num == 1 ? 'Accept' : 'Wrong'
}

