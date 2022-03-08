// 1. i, s, a都在栈中，new出来的对象A在堆上。

// 2. 执行完后a.i的值还是字符串op。
class A {
    static i = "op";
    func(s) {
        s = "" + 9;
    }
    static test() {
        var a = new A();
        a.func(a.i);
    }
} 