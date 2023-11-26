// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/


/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");

    for (let char of sentence) {
        alphabet.delete(char);
        if (alphabet.size === 0) {
            return true;
        }
    }
    return false;
};