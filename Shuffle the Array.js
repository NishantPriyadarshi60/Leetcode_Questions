//  https://leetcode.com/problems/shuffle-the-array/



/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let output = new Array(2 * n);
    for(let i =0;i < n;i++){
        output[2 * i] = nums[i];
        output[2 * i + 1] = nums[n + i];
    }
    return output;
};