//1.对象类型
const target = {};
const source = {
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
};


const returnedTarget = Object.assign(target, source);
target.name = "王老五"
console.log(source);
console.log(target);
console.log(returnedTarget);
console.log(source === target);
console.log("---------------------------");

//2..数组类型
const targetArr = [];
const sourceArr = [12, 65, 59, undefined, "好开心！", { name: '张老三', age: 24, friend: { name: "杨老二" } }]
const returnedTargetArr = Object.assign(targetArr, sourceArr);
targetArr[4]="I am very happy"
console.log(sourceArr);
console.log(targetArr);
console.log(returnedTargetArr);
console.log(sourceArr === targetArr); //false


