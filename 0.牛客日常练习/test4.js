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

var i = 100;
function foo() {
    bbb: try {
        console.log("position1");
        return i++;
    }
    finally {
        break bbb;
    }
    console.log("position2");
    return i;
}
console.log(foo());
