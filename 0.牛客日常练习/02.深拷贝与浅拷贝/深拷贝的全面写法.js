
function deepClone(obj) {
    // 如果obj为undefined或null直接返回
    if (!obj) return obj;
    // 从obj的constructor来new一个和obj【相同类型的实例】
    var clone = new obj.constructor();
    // 如果obj不是对象，直接返回
    if (typeof obj !== 'object')
        return obj;
    // 说明是对象，那就遍历他的每一个键i，【for...in会遍历到原型上的属性】
    for (var i in obj) {
        // 值拷贝自己的成员给clone，不拷贝原型上的东西给clone
        if (obj.hasOwnProperty(i)) {
            if (obj[i] instanceof Date) {
                // 如果是Date类型，就重新new一个实例在给clone[i]
                clone[i] = new Date(obj[i]);
            } else if (obj[i] instanceof RegExp) {
                // 如果是RegExp类型，就重新new一个实例在给clone[i]
                clone[i] = new RegExp(obj[i]);
            } else if (typeof obj[i] !== 'object') {
                // 如果不是object类型的，直接复制给clone[i]
                clone[i] = obj[i];
            } else if (typeof obj[i] === 'object') {
                // 如果obj[i]还是一个object类型的，就递归
                clone[i] = deepClone(obj[i])
            }
        }
    }
    // 返回克隆后的结果
    return clone;
}

var person = {
    name: 'kehao',
    age: 18,
    sister: ['marry', 'lisa'],
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




var cloneObj = deepClone(person);
console.log(cloneObj);

cloneObj.name = 'jakequc'

console.log('person:', person)
console.log('cloneObj:', cloneObj)
