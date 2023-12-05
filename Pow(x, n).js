// https://leetcode.com/problems/powx-n/description/


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    function helper(x, n) {
        if (n === 0) return 1;
        if (x === 0) return 0;
        const half = helper(x, Math.floor(n / 2))

        if (n % 2 === 1) {
            return half * half * x
        } else {
            return half * half
        }
    }
    let result = helper(x, Math.abs(n))

    return result = n >= 0 ? result : 1 / result
};