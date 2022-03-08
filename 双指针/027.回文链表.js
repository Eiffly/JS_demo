/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let point = head;
    let arr = [];
    // 将链表转换为对应的数组
    while (point !== null) {
        arr.push(point.val);
        point = point.next;

    }

    function isPalindrome(arr) {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            if (arr[left] !== arr[right])
                return false;
            left++;
            right--;
        }
        return true;
    };

    return isPalindrome(arr);

};

