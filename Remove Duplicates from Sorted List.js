// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (head === null) return head;
    let node = head;
    while (node && node.next) {
        if (node.next.val === node.val) {
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return head;
};