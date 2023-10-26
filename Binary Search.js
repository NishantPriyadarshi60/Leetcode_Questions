// https://leetcode.com/problems/binary-search/




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
  let end = nums.length - 1;

  while (start <= end){

      let mid = Math.floor((start + end)/2);

      if (nums[mid] === target){
          return mid;
      }
      else if(nums[mid] < target) {
        start = mid + 1;  
      }
      else{
          end = mid -1;
      }
  }
  return -1; 
};