// https://leetcode.com/problems/intersection-of-two-linked-lists/description/



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lenA = 0;
    let lenB = 0;
    let nodeA = headA;
    let nodeB = headB;

    while (nodeA !== null) {
        lenA++;
        nodeA = nodeA.next;
    }
    while (nodeB !== null) {
        lenB++;
        nodeB = nodeB.next;
    }

    nodeA = headA;
    nodeB = headB;

    while (lenA > lenB) {
        lenA--;
        nodeA = nodeA.next;
    }
    while (lenB > lenA) {
        lenB--;
        nodeB = nodeB.next;
    }

    while (nodeA !== nodeB) {
        nodeA = nodeA.next;
        nodeB = nodeB.next;
    }
    return nodeA;
};