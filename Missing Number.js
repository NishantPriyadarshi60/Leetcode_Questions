// https://leetcode.com/problems/missing-number/description/



/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length + 1;
        let total = (n * (n-1)) / 2;
        
        for (let num of nums) {
            total -= num;
        }
        
        return total;
};