//这种方法没有考虑大数据
function productExceptSelf(arr) {
    // let res = new Array(arr.length).fill(1)
    chengji = arr.reduce((p, c) => p * c, 1)
    arr = arr.map(x => parseInt(chengji / x))
    return arr
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([2, 3, 4, 5]));


//
