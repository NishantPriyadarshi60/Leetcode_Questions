// https://leetcode.com/problems/maximum-subarray/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let curSum = nums[0];
 let maxSum = nums[0];

 for (let i = 1; i < nums.length; i++) {
   curSum = curSum + nums[i];

   if (curSum > maxSum) {
     maxSum = curSum;
   }
 }

 return maxSum;
};