// https://leetcode.com/problems/two-sum/description/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // Check if the complement exists in the map
    if (map.has(complement)) {
      // Return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Store the number and its index in the map
    map.set(nums[i], i);
  }

  // If no solution is found, return an empty array or handle it as per your requirements
  return [];
};

console.log(twoSum([2,7,11,15],9))