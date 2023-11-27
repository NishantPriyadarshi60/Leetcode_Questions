//  https://leetcode.com/problems/sqrtx/description/


/**
* @param {number} x
* @return {number}
*/
var mySqrt = function (x) {
    let start = 0;
    let end = x;
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2)

        let square = mid * mid;

        if (square === x) {
            return mid;
        } else if (square < x) {
            start = mid + 1;
            result = mid;
        } else {
            end = mid - 1
        }
    }
    return result;
};