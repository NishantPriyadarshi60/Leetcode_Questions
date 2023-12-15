// https://leetcode.com/problems/plus-one/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let s = digits.join("");

    let n = BigInt(s) + 1n;

    return n.toString().split("");
};