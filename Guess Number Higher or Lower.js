//https://leetcode.com/problems/guess-number-higher-or-lower/description/



/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let low = 1;
    let high = n;
    let mid;
    let result;

    while (low <= high) {
        mid = Math.floor(low + (high - low) / 2);
        result = guess(mid);

        if (result === 1) low = mid + 1;
        else if (result === -1) high = mid - 1;
        else return mid;
    }
    return -1
};