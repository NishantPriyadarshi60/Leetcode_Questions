// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function findFirst(nums,target){
        let left = 0;
    let right = nums.length - 1;
    let first = -1;
    
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        
        if(nums[mid] >= target){
                right = mid - 1;
        }
        else{
            left = mid + 1;
        }
        if(nums[mid] === target){
            first = mid;
        }
    }
    return first;
  }
  
  
  function findLast(nums,target){
      let left = 0;
      let right = nums.length - 1;
      let last = -1; 
      
      while(left<= right){
          let mid = Math.floor((left + right)/2);
          
          if(nums[mid] <= target){
              left = mid + 1;
          }
          else{
              right = mid - 1;
          }
          if(nums[mid] == target){
              last = mid;
          }
      }
      return last;
  }
  const start = findFirst(nums,target)
  const end = findLast(nums,target);
  
  return[start,end]
};
