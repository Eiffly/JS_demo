// function test() {
//     var num = []
//     var i
//     for (i = 0; i < 3; i++) {
//         num[i] = function () {
//             console.log(i)
//         }
//     }
//     return num
// }
// console.log(test())


// var test = '4399' - 0
// console.log(typeof test);

// var i = 100;
// function foo() {
//     bbb: try {
//         console.log("position1");
//         return i++;
//     }
//     finally {
//         break bbb;
//     }
//     console.log("position2");
//     return i;
// }
// console.log(foo());

// var a = 1;
// function fn() {
//     var a = 2;
//     function a() { console.log(3); }
//     return a;
//     function a() { console.log(4); }
// }
// var b = fn();
// console.log(b);


// var str = "Hellllo world";
// str = str.replace(/(l)\1/g, '$1');
// console.log(str);

// console.log(undefined == null);
// console.log(isNaN("100"));
// console.log(parseInt("1a"));
// console.log([] instanceof Array);

function* gen(arg) {
    console.log(arg);
    let one = yield 111;
    console.log(one);
    let two = yield 222;
    console.log(two);
    let three = yield 333;
    console.log(three);
}

//执行获取迭代器对象
let iterator = gen('AAA');
console.log(iterator.next());
//next方法可以传入实参
console.log(iterator.next('BBB'));
console.log(iterator.next('CCC'));
// console.log(iterator.next('sDDD'));