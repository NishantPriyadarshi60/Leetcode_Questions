//   https://leetcode.com/problems/merge-two-sorted-lists/description/


/**
* Definition for singly-linked list.
* function ListNode(val, next) {
*     this.val = (val===undefined ? 0 : val)
*     this.next = (next===undefined ? null : next)
* }
*/
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let ans = new ListNode();
    let ptr = ans;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            ans.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else {
            ans.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        ans = ans.next;
    }
    while (list1) {
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }
    while (list2) {
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }
    return ptr.next;
};