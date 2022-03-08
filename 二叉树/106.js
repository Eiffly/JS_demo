class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
var buildTree = function (inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        if (in_left > in_right) {
            return null
        }
        //寻找后序遍历的最后一个元素-->得到根节点
        let end = postorder[post_idx]
        post_idx--
        //寻找根节点在中序遍历中的index,建立相应的根节点
        let index = idx_map.get(end)
        const root = new TreeNode(end)
        //建立右子树
        root.right = helper(index + 1, in_right)
        //建立左子树 
        root.left = helper(in_left, index - 1)
        return root
    }
    post_idx = inorder.length - 1
    inorder.forEach((val, index) => {
        idx_map.set(val, index)
    });
    return helper(0, inorder.length - 1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
console.log(buildTree([-1], [-1]));