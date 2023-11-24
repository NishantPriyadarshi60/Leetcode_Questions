// https://leetcode.com/problems/reverse-words-in-a-string/description/


/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let words = s.trim().split(/\s+/);
    const reverseWords = words.reverse();
    const reverseString = reverseWords.join(" ");
    return reverseString;
};