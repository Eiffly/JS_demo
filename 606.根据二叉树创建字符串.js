let tree1 = require('./TreeNode').createTree([1, 2, 3, 4])
let tree2 = require('./TreeNode').createTree([1, 2, 3, null, 4])

/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
    // let res = new Strsing(root.val)
    if (root === null) return ""
    let res = "" + root.val
    // res += "(" + root.val
    res = tree2str(root.left)
    res += ")"
    res = tree2str(root.right, res)
    return res
};


console.log(tree2str(tree1));
console.log(tree2str(tree2));