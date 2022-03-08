// 不推荐在三元运算符号中使用自增或者自减运算符
let dp = 3
dp = (dp - 1 > 0) ? dp-- : 0
console.log(dp);//3