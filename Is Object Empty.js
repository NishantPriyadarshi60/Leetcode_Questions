// https://leetcode.com/problems/is-object-empty/description/


/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    for (let key in obj)
        return false;
    return true;
};