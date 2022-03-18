/**
 * 要求最后返回的是一个字符串
 */
const paddingNum = function (num) {
    num = num.toString().split("")
    let len = num.length - 1
    let index = num.length - 1
    // //有小数点
    if (num.includes('.')) {
        while (num[index] !== ".") {
            len--
            index--
        }
        len--
        index--
        while (index >= 0) {   //3,333     0123 
            if ((len !== index) && (len - index) % 3 === 0 && num[index] !== '-') {
                num.splice(index + 1, 0, ",")
            }
            index--
        }
    } else {
        while (index >= 0) {   //3,333     0123 
            if ((len !== index) && (len - index) % 3 === 0 && num[index] !== '-') {
                num.splice(index + 1, 0, ",")
            }
            index--
        }
    }

    //有小数点
    return num.join("")
}


console.log(paddingNum(33)); //'33'
console.log(paddingNum(3333)); //'33'
console.log(paddingNum(1234.56)); //'1,234.56'
console.log(paddingNum(-123456789)); //'123,456,789'
console.log(paddingNum(987654.321)); //'987,654.321
console.log(paddingNum(-987654.3)); //'-987,654.3'
