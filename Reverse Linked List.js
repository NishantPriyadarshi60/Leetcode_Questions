// https://leetcode.com/problems/reverse-linked-list/description/



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
var reverseList = function (head) {
    if (head === null) {
        return head;
    }

    let current = head;
    let previous = null;

    while (current !== null) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
};