//3.7 练习1
let arr = []
console.log(typeof arr);                //object
console.log(arr instanceof Array);      //true
console.log(arr.toString);              //[Function: toString]
console.log(Object.prototype.toString.call(arr));  //[object Array]

//3.7 练习2
console.log({} + 'b')
console.log({} + 'a')
console.log(({} + 'b' > {} + 'a'))