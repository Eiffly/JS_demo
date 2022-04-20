function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

//数组方式
var ary9 = [1, 2, 3];
var ary10 = deepCopy(ary9)
ary9.push(100);
console.log(ary9); // [1, 2, 3, 100]
console.log(ary10); // [1, 2, 3]


//对象方式
var person = {
    name: 'kehao',
    age: 18,
    sister: ['marry', 'lisa'],
    shengaotizhong: [180, 60],
    borther: {
        big: {
            name: 'enhao',
            age: 23
        }
    },
    say: function () {
        console.log('hello future')
    },
    reg: /[0-9]{2,3}/g,
    date: new Date()
}
console.log(person);
console.log(deepCopy(person));  //函数丢失，正则表达式里面的内容丢失，date输出是字符串的格式
