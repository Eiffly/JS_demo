q.push(root);
while (q.length) {
    const n = q.length;
    for (let i = 1; i <= n; ++i) {
        let f = q.shift()
        // 拓展新节点
        if (f.left) {
            q.push(f.left);
        }
        if (f.right) {
            q.push(f.right);
        }
        // ... 遍历当前取出的 f
    }
}

