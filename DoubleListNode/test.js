class ListNode {
    constructor(key, val) {
        this.key = key
        this.val = val
        this.pre = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.count = 0
        this.hash = {}
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.pre = this.dummyHead
    }
    //-1 
    get(key) {
        // let node = this.hash[key]
        // if (node == null) return -1
        // this.moveToHead(node)
        // return node.value
        if (this.hash[key]) {
            let node = this.hash[key]
            // 移动道最前面,代表最新访问过,最近没有被访问的数据会移动到最后面
            this.moveToHead(node)
            return this.dummyHead.next.val
        } else {
            return -1
        }
    }

    //将节点移动到头部,代表着最新访问过
    moveToHead(node) {
        this.removeNode(node)
        this.addToHead(node)
    }

    removeNode(node) {
        let preNode = node.pre
        let nextNode = node.next
        preNode.next = nextNode
        nextNode.pre = preNode
    }

    addToHead(node) {
        node.pre = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.pre = node
        this.dummyHead.next = node
    }


    put(key, value) {
        if (!this.hash[key]) {
            let newNode = new ListNode(key, value)
            // 还要判断其是不是超出了capicity
            if (this.count === this.capacity) {
                // 移除最后的那个节点
                this.removeLast()
                //移到开头
                this.addToHead(newNode)
                // 增加相应的数据内容
                this.hash[key] = newNode
            } else {
                //移到开头
                this.addToHead(newNode)
                // 增加相应的数据内容
                this.hash[key] = newNode
                this.count++
            }
        } else {
            let node = this.hash[key]
            node.val = value
            this.moveToHead(node)
        }
    }

    removeLast() {
        let tail = this.dummyTail.pre
        this.removeNode(tail)
        delete this.hash[tail.key]
    }
}



let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.put(3, 5); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4



