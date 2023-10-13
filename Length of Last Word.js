// https://leetcode.com/problems/length-of-last-word/description/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmedString = s.trim();
    const lastIndex = trimmedString.lastIndexOf(" ");
    const lastWord = trimmedString.substring(lastIndex+1);
    return lastWord.length;
 };

 console.log(lengthOfLastWord("Hello World"))