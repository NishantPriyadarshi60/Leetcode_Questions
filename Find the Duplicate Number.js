// https://leetcode.com/problems/find-the-duplicate-number/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let arr = new Set();
    for(const num of nums){
      if(arr.has(num)){
        return num;
      }else
      {arr.add(num)}
    }
    return num;
};