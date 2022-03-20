var MaxStack = function () {
    this.stack = []
    this.max_stack = [-Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.stack.push(x)
    if (x >= this.max_stack[this.max_stack.length - 1]) {
        this.max_stack.push(x)
    }

};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    const val = this.stack.pop()
    if (val === this.max_stack[this.max_stack.length - 1]) {
        this.max_stack.pop()
    }
    return val
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    return this.max_stack[this.max_stack.length - 1]
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    // 创建一个辅助栈
    let max = this.peekMax()
    if (this.top() === max) {
        this.pop()
    } else {
        // 找到max之前 先把数据存到一个对应的辅助栈里面
        let assit_stack = [];
        while (this.top() !== max) {
            //弹出相应的元素
            assit_stack.push(this.pop())
        }
        this.pop()
        while (assit_stack.length !== 0) {
            this.push(assit_stack.pop())
        }
    }
    return max;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
// var stk = new MaxStack();
// stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
// stk.push(1);   // [5, 1] - 栈顶元素是 1，最大元素是 5
// stk.push(5);   // [5, 1, 5] - 5 既是栈顶元素，也是最大元素
// console.log(stk);
// console.log(stk.top());     // 返回 5，[5, 1, 5] - 栈没有改变
// console.log(stk.popMax());  // 返回 5，[5, 1] - 栈发生改变，栈顶元素不再是最大元素
// console.log(stk);
// console.log(stk.top());       // 返回 1，[5, 1] - 栈没有改变
// console.log(stk.peekMax());  // 返回 5，[5, 1] - 栈没有改变
// console.log(stk.pop());        // 返回 1，[5] - 此操作后，5 既是栈顶元素，也是最大元素
// console.log(stk.top());    // 返回 5，[5] - 栈没有改变


// var stk = new MaxStack();
// stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
// console.log(stk.peekMax());  //5
// console.log(stk.popMax());    //5



// var stk = new MaxStack();
// stk.push(5);   // [5] - 5 既是栈顶元素，也是最大元素
// stk.push(1);   // [5, 1] - 栈顶元素是 1，最大元素是 5
// console.log(stk);
// console.log(stk.popMax());  // 返回 5，[5, 1] - 栈发生改变，栈顶元素不再是最大元素
// console.log(stk);
// console.log(stk.peekMax());  // 返回 5，[5, 1] - 栈没有改变
