// import * as tree from "TreeNode.js";
// import { createTree } from './TreeNode.js';
// const node = new Node();

let p = require('./TreeNode').createTree([1, 2, null, 3])
let q = require('./TreeNode').createTree([1, 2, 3])

// console.log(p);
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    } else if (p.val !== q.val) {
        return false;
    } else {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
};
console.log(isSameTree(p, q));