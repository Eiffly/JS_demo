/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map.has(key)) {
        let value = this.map.get(key);
        this.map.delete(key); // 删除后，再 set ，相当于更新到 map 最后一位
        this.map.set(key, value);
        return value
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // 如果已有，那就要更新，即要先删了再进行后面的 set
    if (this.map.has(key)) {
        this.map.delete(key);
    }
    this.map.set(key, value);
    // put 后判断是否超载，如果是超出负载的话弹出第一个
    if (this.map.size > this.capacity) {
        this.map.delete(this.map.keys().next().value);
    }

};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

