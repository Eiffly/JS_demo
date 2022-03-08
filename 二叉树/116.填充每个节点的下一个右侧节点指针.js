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
    while (queue.length) {
        const n = queue.length;
        let last = null;
        for (let i = 1; i <= n; i++) {
            let f = queue.shift();
            if (f.left !== null) {
                queue.push(f.left);
            }
            if (f.right !== null) {
                queue.push(f.right);
            }
            if (i !== 1) {
                last.next = f;
            }
            last = f;
        }
    }
    return root;
};

console.log(connect(tree1));