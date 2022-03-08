// var s1 = Symbol('a');
// var s2 = Symbol('a');
// var s3 = Symbol.for('b');
// var s4 = Symbol.for('b');
// console.log(typeof s1);
// console.log(s1==s2); //false
// console.log(s3==s4); //true

// let s = Symbol();
// // Symbol创建
// let s2 = Symbol('尚硅谷');
// let s3 = Symbol('尚硅谷');
// console.log(s2 === s3); //false
// //Symbol.for 创建
// let s4 = Symbol.for('尚硅谷');
// let s5 = Symbol.for('尚硅谷');
// console.log(s4 === s5);//true
// console.log(s2 === s5);//false

// var a = 1;
// function test() {
//     console.log(a);
//     if (false) {
//         var a = 2;
//     }
// }
// test();

// console.log(Object.prototype.__proto__);
// console.log(Function.prototype.__proto__.__proto__);

// var f = function g() {
//     return 23;
// };
// console.log(typeof g());

// const a = [1, 2, 3]
// a.join = a.shift
// console.log(a == 1 && a == 2 && a == 3);
// console.log(typeof []);
// let a = 1;
// let obj = {
//     x: 1
// }
// delete a;
// delete obj.x;
// delete 2;
// console.log(a);
// console.log(obj.x);
// console.log(2);


// function* gen() {
//     yield '一只没有耳朵';
//     yield '一只没有尾巴';
//     return '真奇怪';
// }
// let iterator = gen();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// function* gen(arg) {
//     console.log(arg);
//     let one = yield 111;
//     console.log(one);
//     let two = yield 222;
//     console.log(two);
//     let three = yield 333;
//     console.log(three);
// }

// //执行获取迭代器对象
// let iterator = gen();
// console.log(iterator.next('AAA'));
// //next方法可以传入实参
// // console.log(iterator.next('BBB'));
// console.log(iterator.next('CCC'));
// console.log(iterator.next('DDD'));

// var a = 100;
// function a() {
//     var a = 200;
//     console.log(a);
// }
// a();


var test = (function () {
    var num = 0
    return () => {
        return num++
    }
}())
for (var i = 0; i < 20; i++) {
    test()
}
console.log(test());
