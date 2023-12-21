//  https://leetcode.com/problems/greatest-common-divisor-of-strings/description/




/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    } else if (str1 == str2) {
        return str1;
    } else if (str1.length > str2.length) {
        return gcdOfStrings(str1.substring(str2.length), str2);
    } else {
        return gcdOfStrings(str2.substring(str1.length), str1);
    }
};