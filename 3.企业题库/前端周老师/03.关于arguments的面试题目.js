/**
 * 严格模式：arguments和实际参数不会相互影响
 */

//#region 
// function side(arr) {
//     arr[0] = arr[2]  //结束了之后 arr[0]还是1
// }
// // 这里是采用了ES6的解构赋值 默认是属于严格模式 不用再去另外写'use strict'
// function fn(a, b, c = 3) {
//     c = 10
//     side(arguments)
//     return a + b + c   //a:1 b:1 c:10  12
// }

// console.log(fn(1, 1, 1));
//#endregion


/**
 * 非严格模式：arguments和实际参数会相互影响
 */
//#region 
function side(arr) {
    arr[0] = arr[2]   ////结束了之后 arr[0]的数值是10
}
// 这里是采用了ES6的解构赋值 默认是属于严格模式 不用再去另外写'use strict'
function fn(a, b, c) {
    c = 10
    side(arguments)
    return a + b + c   //a:10  b:1 c:21
}
console.log(fn(1, 1, 1));
//#endregion



