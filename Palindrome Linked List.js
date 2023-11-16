//  https://leetcode.com/problems/palindrome-linked-list/description/


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
    let palindrome = [];

    while (head) {
        palindrome.push(head.val);
        head = head.next;
    }


    for (let i = 0, j = palindrome.length - 1; i < j; i++, j--) {
        if (palindrome[i] !== palindrome[j]) {
            return false;
        }
    }

    return true;
};