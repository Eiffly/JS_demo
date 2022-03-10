/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from './ListNode.js'
/**
 * 方式一：将链表转换为相应的数组(并不推荐)
 * @param {ListNode} head
 * @return {ListNode}
 */
// function list2array(head) {
//     if (!head) {
//         return []
//     }
//     var result = [head.val]
//     var restValues = list2array(head.next)
//     return result.concat(restValues)
// }
// var insertionSortList = function (head) {
//     let nums = list2array(head)
//     // 这么做其实是另外开辟了新的内存，是不符合题目要求的
//     return new ListNode().createListNode(nums.sort((a, b) => a - b))
// };

/**
 * 方式二：
 */
var insertionSortList = function (head) {
    // 1. 首先判断给定的链表是否为空，若为空，则不需要进行排序，直接返回
    if (head === null) {
        return head;
    }
    // 2. 链表初始化操作
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let lastSorted = head, curr = head.next;
    // 3. 插入排序
    while (curr !== null) {
        if (lastSorted.val <= curr.val) { // 说明curr应该位于lastSorted之后
            lastSorted = lastSorted.next;// 将lastSorted后移一位,curr变成新的lastSorted
        } else {                            // 否则,从链表头结点开始向后遍历链表中的节点
            let prev = dummyHead;           // 从链表头开始遍历 prev是插入节点curr位置的前一个节点
            while (prev.next.val <= curr.val) {// 循环退出的条件是找到curr应该插入的位置
                prev = prev.next;
            }
            // 以下三行是为了完成对curr的插入（配合题解动图可以直观看出）
            lastSorted.next = curr.next;
            curr.next = prev.next;
            prev.next = curr;
        }
        curr = lastSorted.next;// 此时 curr 为下一个待插入的元素
    }
    // 返回排好序的链表
    return dummyHead.next;
};

console.log(insertionSortList(new ListNode().createListNode([4, 2, 1, 3])));
console.log(insertionSortList(new ListNode().createListNode([-1, 5, 3, 4, 0])));
