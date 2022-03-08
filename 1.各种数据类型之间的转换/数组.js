// 1.数组转换为字符串
arr.join("");



// 2.将数组转换为二叉树
//默认暴露
class Node { // 定义节点
    constructor(val, left, right, next) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.next = next === undefined ? null : next;
    }
}
exports.createTree = function (arr) { // 创建二叉树
    let tree = new Node(arr[0])
    let Nodes = [tree]
    let i = 1
    for (let node of Nodes) {
        Nodes.push(node.left = new Node(arr[i]))
        i += 1
        if (i == arr.length) return tree
        Nodes.push(node.right = new Node(arr[i]))
        i += 1
        if (i == arr.length) return tree
    }
}


// 特例：将有序数组转换为二叉搜索树
