/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.nums = nums
    this.k = k
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    let nums = this.nums
    nums.push(val)
    nums = nums.sort((a, b) => b - a)
    return nums[this.k - 1]
};
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

var obj = new KthLargest(3, [4, 5, 8, 2]);
console.log(obj.add(3));
console.log(obj.add(5));
console.log(obj.add(10));
console.log(obj.add(9));
console.log(obj.add(4));