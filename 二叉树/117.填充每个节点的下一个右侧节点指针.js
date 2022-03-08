/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
let tree1 = require('./TreeNode').createTree([1, 2, 3, 4, 5, null, 7])
var connect = function (root) {
    if (root === null) {
        return null;
    }
    const queue = [root];
    let last = null
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()
            if (cur.left !== null) {
                queue.push(cur.left)
            }
            if (cur.right !== null) {
                queue.push(cur.right)
            }
            if (i !== 0) {
                last.next = cur
            }
            last = cur
        }
    }
    return root
};

console.log(connect(tree1));