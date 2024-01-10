//  https://leetcode.com/problems/memoize/description/


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let map = {};
    return function (...args) {
        const s = args.toString();
        if (s in map) {
            return map[s];
        } else {
            let res = fn(...args);
            map[s] = res;
            return res;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */