let p = require('./TreeNode').createTree([4, 2, 7, 1, 3, 6, 9])

var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};

console.log(invertTree(p));