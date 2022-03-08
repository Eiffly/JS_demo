/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
let tree1 = require('./TreeNode').createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
let tree2 = require('./TreeNode').createTree([1, 2, 3])
let tree3 = require('./TreeNode').createTree([])

var hasPathSum = function (root, targetSum) {
    if (root === null) return false
    if (root.left === null && root.right === null) return targetSum === root.val
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
console.log(hasPathSum(tree1, 22));
console.log(hasPathSum(tree2, 5));
console.log(hasPathSum(tree3, 0));