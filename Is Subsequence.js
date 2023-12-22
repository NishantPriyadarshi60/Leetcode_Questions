/////    https://leetcode.com/problems/is-subsequence/description/



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;

    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] === t[i]) {
            subsequence++;
        }
    }
    return subsequence === s.length;
};