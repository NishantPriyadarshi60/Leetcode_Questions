// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let start = new ListNode();
    start.next = head;
    let fast = start;
    let slow = start;

    for (let i = 1; i <= n; ++i) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;
    return start.next;
};