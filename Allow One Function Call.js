//  https://leetcode.com/problems/allow-one-function-call/description/


/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let a = 0;
    return function (...args) {
        a++;
        if (a === 1) {
            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
