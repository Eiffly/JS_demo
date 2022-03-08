// https://leetcode-cn.com/problems/GXV5dX/
class Heap {
    constructor(compare, A = []) {
        if (typeof compare !== "function") throw new Error('Must provide a compare function.');
        this.compare = compare;
        this.A = A.slice();
        this.buildHeap();
    }

    buildHeap() {
        for (let i = (this.A.length >> 1) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    isEmpty() {
        return this.A.length === 0;
    }

    peek() {
        return this.isEmpty() ? null : this.A[0];
    }

    heapifyUp(i) {
        const A = this.A;
        const val = A[i];
        let p = (i - 1) >> 1;
        while (p >= 0 && this.compare(val, A[p])) {
            A[i] = A[p];
            i = p;
            p = (i - 1) >> 1;
        }
        A[i] = val;
    }

    heapifyDown(i) {
        const A = this.A;
        const size = this.A.length;
        const val = A[i];
        const half = size >> 1;
        while (i < half) {
            let p = (i << 1) + 1; // i < half 时，左子节点始终存在（完全二叉树性质）
            if (p + 1 < size && this.compare(A[p + 1], A[p])) p = p + 1; // 右子节点存在，且比左子节点优先级高
            if (this.compare(val, A[p])) break; // 节点优先级比左右孩子都高
            A[i] = A[p];
            i = p;
        }
        A[i] = val;
    }

    add(val) {
        this.A.push(val);
        this.heapifyUp(this.A.length - 1);
    }

    poll() {
        if (this.isEmpty()) return null;
        const first = this.peek();
        const last = this.A.pop();
        if (!this.isEmpty()) {
            this.A[0] = last;
            this.heapifyDown(0);
        }
        return first;
    }
}
class PriorityQueue extends Heap {
    constructor(compare) {
        super(compare);
    }

    enqueue(val) {
        return this.add(val);
    }

    dequeue() {
        return this.poll();
    }
}

const fs = require("fs");
// 输入格式： 获取单个用例的所有行，此时 lines[0] 为第一行数据
const lines = fs.readFileSync(0).toString().trim().split(/\r\n|\n/).map(v => v.split(" "));
const N = +lines[0][0];//5
const M = +lines[0][1];//2
const data = lines.slice(1);
const PQ = new PriorityQueue((a, b) => a[1] === b[1] ? a[0] < b[0] : a[1] > b[1]);
for (let i = 1; i <= N; ++i) {
    const v = +data[i - 1][0], w = +data[i - 1][1];
    PQ.enqueue([i, v + w * 2]);
}

const ans = [];
for (let i = 1; i <= M; ++i) {
    ans.push(PQ.dequeue()[0]);
}
ans.sort((a, b) => a - b);

process.stdout.write(ans.join(" "));

