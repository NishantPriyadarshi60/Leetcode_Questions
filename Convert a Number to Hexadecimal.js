// https://leetcode.com/problems/convert-a-number-to-hexadecimal/


/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) {
        return "0"; 
    }

    let hexDigits = "0123456789abcdef";
    let ans = "";

    if (num < 0) {
        num = num + 0x100000000; 
    }

    while (num > 0) {
        let digit = num % 16;
        ans = hexDigits[digit] + ans;
        num = Math.floor(num / 16);
    }

    return ans; 
};