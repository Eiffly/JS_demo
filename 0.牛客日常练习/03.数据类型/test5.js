//一些晦涩难懂的数据类型
console.log(Object.is(NaN, NaN));  //true
console.log(Object.is(+0, -0));    //false
console.log(NaN === NaN);          //false
console.log(+0 === -0);            //true


//typeof
console.log(typeof Date);   //function
console.log(typeof Array);  //function
console.log(typeof RegExp); //function
console.log(typeof null);   //object
console.log(typeof undefined); //undefined
const reg = /[0-9]{2,3}/g
const date = new Date()
const arr = [180, 60]
console.log(typeof reg);   //object
console.log(typeof date);  //object
console.log(typeof arr); //object
console.log("-------------------------------");

//Object.prototype.constructor 返回创建实例对象的 Object 构造函数的引用
var o1 = {};
var o2 = new Object;
var o3 = [];
var o4 = new Array;
var o5 = new Number(3);
console.log(o1.constructor); //[Function: Object]
console.log(o2.constructor); //[Function: Object]
console.log(o3.constructor); //[Function: Array]
console.log(o4.constructor); //[Function: Array]
console.log(o5.constructor); //[Function: Number]

