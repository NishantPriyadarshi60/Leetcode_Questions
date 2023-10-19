// https://leetcode.com/problems/binary-number-with-alternating-bits/


/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    let num = n ^ (n >> 1);
  return (num & (num + 1)) === 0;
};