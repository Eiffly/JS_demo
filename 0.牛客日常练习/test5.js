let a = 'w'
let obj = {
    a: 'o',
    print: function () {
        console.log(this.a);
    },
}
let p = obj.print;
obj.print();
p();