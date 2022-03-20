// 采用了辅助栈的思想 
//辅助栈就是下面的min_stack,其栈顶元素是最小的
var MinStack = function () {
    this.stack = []
    this.min_stack = [Infinity]
};

/** 
 * 辅助栈在压入栈的时候，只是考虑压入小的
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)
    if (val <= this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.push(val)
    }
};

/**
 * 弹出栈的时候 要看两个的元素是不是相等
 * @return {void}
 */
MinStack.prototype.pop = function () {
    let num = this.stack.pop()
    if (num === this.min_stack[this.min_stack.length - 1]) {
        this.min_stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * 注意这里的【getMin】是本题目的重点 应该在常数范围内就完成 
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1]
};


/**
 * 下面的代码为测试代码
 */
// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin());


// var minStack = new MinStack();
// minStack.push(-3);
// console.log(minStack.getMin());


// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-1);
// console.log(minStack);
// console.log(minStack.getMin());
// console.log(minStack.top());
// minStack.pop();
// console.log(minStack.getMin());