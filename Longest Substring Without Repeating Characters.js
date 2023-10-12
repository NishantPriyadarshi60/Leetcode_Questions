// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  // Iterate through the string
  for (let end = 0; end < s.length; end++) {
    const currentChar = s.charAt(end);

    // Check if the current character is already in the substring
    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      // Update the starting index to the next position of the repeated character
      start = charMap.get(currentChar) + 1;
    }

    // Update the character's index in the map
    charMap.set(currentChar, end);

    // Update the maximum length
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
let s = "abcabcbb"

console.log(lengthOfLongestSubstring(s))