// 本题目可以与22题一起研究
var isValid = function (s) {
    let stk = []
    // 使用常规的Map构造函数可以将一个二维键值对数组转换成一个Map对象
    const pairs = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"]
    ])
    for (const ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false
            }
            stk.pop(ch)
        } else {
            stk.push(ch)
        }
    }
    return !stk.length
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));