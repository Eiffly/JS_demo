class ListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.hash = {}
        this.count = 0
        this.dummyHead = new ListNode()
        this.dummyTail = new ListNode()
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    get(key) {
        let node = this.hash[key]
        if (node == null) return -1
        this.moveToHead(node)
        return node.value
    }

    put(key, value) {
        let node = this.hash[key]
        if (node == null) {
            if (this.count == this.capacity) {
                this.removeLRUItem()
            }
            let newNode = new ListNode(key, value)
            this.hash[key] = newNode
            this.addToHead(newNode)
            this.count++
        } else {
            node.value = value
            this.moveToHead(node)
        }
    }

    //将相应的节点移动到头部去
    moveToHead(node) {
        this.removeFromList(node)
        this.addToHead(node)
    }
    //将相应的节点从当前位置删除
    removeFromList(node) {
        let temp1 = node.prev
        let temp2 = node.next
        temp1.next = temp2
        temp2.prev = temp1
    }
    //将相应的节点添加到头部去
    addToHead(node) {
        node.prev = this.dummyHead
        node.next = this.dummyHead.next
        this.dummyHead.next.prev = node
        this.dummyHead.next = node
    }

    //移出尾部的节点，删除骑在哈希里面的数值，更新当前缓存的容量
    removeLRUItem() {
        let tail = this.popTail()
        delete this.hash[tail.key]
        this.count--
    }
    //移出尾部的节点
    popTail() {
        let tail = this.dummyTail.prev
        this.removeFromList(tail)
        return tail
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

