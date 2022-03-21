/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
import { ListNode } from "../ListNode/ListNode.js"

var deleteNode = function (node) {
    // 当前节点的值变成当前节点下一个节点的值
    node.val = node.next.val
    // 当前节点的 next，指向当前节点的下一个节点的 next
    node.next = node.next.next
    return node
};

console.log(deleteNode(new ListNode().createListNode([5, 1, 9])));