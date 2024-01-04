// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/



/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = (arr, fn) => {
    const newArray = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i)
    }
    return newArray;
};