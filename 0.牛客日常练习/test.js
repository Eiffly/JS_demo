// var len = 117;
// let func = {
//     len: 935,
//     showLen: function () {
//         console.log(this.len);
//     },
//     show: function () {
//         (function (cb) {
//             cb();
//         })(this.showLen)
//     }
// }
// func.show();

// var len = 117;
// let func = {
//     len: 935,
//     showLen: function () {
//         console.log(this.len);
//     },
//     show: function () {
//         (function (cb) {
//             cb();
//         })(this.showLen)
//     }
// }
// func.show();



// var len = 117;
// let func = {
//     len: 935,
//     showLen: function () {
//         console.log(this.len);
//     },
//     show: function () {
//         const f = function (cb) {
//             cb();
//         }
//         f(this.showLen)
//     }
// }
// func.show();
// var name = "The Window";
// var object = {
//     name: "My Object",
//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         };
//     }
// };
// // //因为object.getNameFunc()返回的是一个立即执行函数 立即执行函数的this指向window
// // // 根本就没有形成闭包
// console.log(object.getNameFunc()());  //?  the window


class Phone {
    constructor(price) {
        this.price = price;
    }
    get price() {
        return 999;
    }
}
var p = new Phone(888);
console.log(p.price);