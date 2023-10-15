// https://leetcode.com/problems/running-sum-of-1d-array/



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    return nums.map((num) => sum +=num)
  
  };