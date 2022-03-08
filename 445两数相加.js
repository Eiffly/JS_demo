/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    const stack1 = [];
    const stack2 = [];
    // 将数据填入到栈里面
    while (l1 !== null) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2 !== null) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    // 构建一个新的
    let carry = 0, curr = null;
    while (stack1.length !== 0 || stack2.length !== 0) {
        let sum = 0;
        if (stack1.length !== 0) {
            sum += stack1.pop();
        }
        if (stack2.length !== 0) {
            sum += stack2.pop();
        }

        sum += carry;

        // 计算溢出的位数
        const node = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        // 移动返回的位
        node.next = curr;
        curr = node;
    }
    if (carry !== 0) {
        const node = new ListNode(carry);
        node.next = curr;
        curr = node;
    }

    return curr;
};
