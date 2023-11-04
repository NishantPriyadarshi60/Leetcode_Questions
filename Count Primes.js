// https://leetcode.com/problems/count-primes/description/


/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <= 2 || !n) return 0;

    let count = 0;
    for (let num = 3; num < n; num += 2) {
        let isPrime = true;
        for (let i = 3; i <= Math.sqrt(num); i+=2) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            count++;
        }
    }
    return count+1;
};