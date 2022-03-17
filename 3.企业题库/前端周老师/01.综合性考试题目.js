var name = null
var age = 38
var length = 10
var say = 'speak'

function demo(arg) {
    //这里考察了变量提升和函数提升 函数提升的优先级要高于变量提升
    //obj1用var 定义,变量进行了提升，但是还没有赋值
    //arg虽然在形参中被传入，但是函数提升的优先级别更高
    console.log(obj1, arg);//undefined f()
    function arg() { }

    //变量提升
    var length;
    console.log(length)   //undefined
    length = 108
    console.log(length);  //108


    var obj1 = {
        name: '熊大',
        age: 88,
        say: function () {
            return (name, age) => {
                console.log('我是' + this.name + ',年龄：' + age);
            }
        }
    }

    obj2 = {
        name: '熊二',
        age: 58,
        say: obj1.say
    }

    //考的是运算符号的优先级  短路操作
    // ! + typeof 相同 并且高于&&
    //console.log('undefined')的返回是undefined  转为布尔类型是false（同样的还有 NaN 0 '' null）
    //第一个数值为false：意味着后面的还是要执行
    //!!'' + '1'   !true=->false +'1'-->'false1'                -->true
    //typeof null为'Object'   typeof 'Object' 为'String'        -->true
    //!!length                                                  -->true
    //因此执行的是if语句里面的内容
    if (console.log('undefined')   //undefined
        || (!!'' + '1' && typeof typeof null && !!length)) {
        //宏任务
        setTimeout(() => {
            obj1.say()('熊三', 88)  //3.'熊大' 88
        })
        //同步任务
        //熊二 77
        obj2.say()('光头强', 77)    //1.'熊二'  77 (this的指向，箭头函数没有自己的this，看上一层，而say()以方法的形式被调用，this是obj2)
    } else {
        setTimeout(() => {
            obj2.say()('肥波', 199)
        })
    }

    //微任务
    new Promise((resolve, reject) => {
        resolve(188)
    }).then(age => {
        obj2.say()('光头强', age)  //2.'熊二' 188
    })
}


demo(18)