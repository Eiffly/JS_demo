const getNext = function () {
    const lines = require('fs').readFileSync("txt文件/05.txt").toString().trim().split(/\r\n|\r|\n/)
    let i = 0
    return () => i++;
}
console.log(getNext()()); //0  产生了一个闭包
console.log(getNext()()); //0  产生了一个新的闭包
console.log(getNext()()); //0  产生了一个新的闭包
var f = getNext()       //产生了一个新的闭包
console.log(f());//0  下面没有再去产生
console.log(f());//1
console.log(f());//2


/**
 * 将 IIFE 分配给一个变量，不是存储 IIFE 本身，而是存储 IIFE 执行后返回的结果。
 */
// 示例1：
// const getNext = (function () {
//     const lines = require('fs').readFileSync("txt文件/05.txt").toString().trim().split(/\r\n|\r|\n/)
//     let i = 0
//     return i++;
// })()
// console.log(getNext); //0
// console.log(getNext); //0
// console.log(getNext); //0
// console.log(getNext); //0

// 示例2
// const getNext = (function () {
//     const lines = require('fs').readFileSync("txt文件/05.txt").toString().trim().split(/\r\n|\r|\n/)
//     let i = 0
//     return () => i++;
// })()
// console.log(getNext); //[Function (anonymous)]
// console.log(getNext); //[Function (anonymous)]
// console.log(getNext); //[Function (anonymous)]
// console.log(getNext); //[Function (anonymous)]

// 示例3
// const getNext = (function () {
//     const lines = require('fs').readFileSync("txt文件/05.txt").toString().trim().split(/\r\n|\r|\n/)
//     let i = 0
//     return () => i++;
// })()
// console.log(getNext());//0
// console.log(getNext());//1
// console.log(getNext());//2
// console.log(getNext());//3

// 示例4
// const getNext = (function () {
//     const lines = require('fs').readFileSync("txt文件/05.txt").toString().trim().split(/\r\n|\r|\n/)
//     let i = 0
//     return () => i++;
// })()
// console.log(getNext());//1
// console.log(getNext());//2
// console.log(getNext());//3
// console.log(getNext());//4



/**
 *  如果这个IIFE没有分配给一个变量,知识一个普通的匿名函数
 *
 */

//示例5
// function bianchang() {
//     let i = 3;
//     return () => 3.14 * (i++);

// }
// function fun(a) {
//     console.log("a = " + a);
// }
// fun(function () { console.log("这是一个匿名函数"); }); //a = function () { console.log("这是一个匿名函数"); }
// fun(bianchang);//返回函数的具体内容
// fun(bianchang());//a = () => 3.14 * (i++)
// fun(bianchang());//a = () => 3.14 * (i++)
// fun(bianchang());//a = () => 3.14 * (i++)

//示例5
// function bianchang() {
//     let i = 3;
//     return () => 3.14 * (i++);

// }
// function fun(a) {
//     console.log("a = " + a);
// }
// fun(function () { console.log("这是一个匿名函数"); }); //a = function () { console.log("这是一个匿名函数"); }
// fun(bianchang);
// fun(bianchang()());//a = 9.42
// fun(bianchang()());//a = 9.42
// fun(bianchang()());//a = 9.42


// var test = function () {
//     var num = 0
//     return () => {
//         return num++
//     }
// }()
// //})()
// for (var i = 0; i < 20; i++) {
//     test()
// }
// console.log(test());

var test = function () {
    var num = 0
    return () => num++
}()
for (var i = 0; i < 20; i++) {
    test()
}
console.log(test());

