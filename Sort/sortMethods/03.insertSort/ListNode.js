export class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    // 将数组转换为链表
    createListNode = function (arr) { // 创建二叉树
        let head = new ListNode(arr[0])
        let Nodes = [head]
        let i = 1
        for (let node of Nodes) {
            Nodes.push(node.next = new ListNode(arr[i]))
            i += 1
            if (i == arr.length) return head
        }
    }
}


