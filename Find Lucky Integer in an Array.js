// https://leetcode.com/problems/find-lucky-integer-in-an-array/




/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const frequencyMap = new Map();
     
 
     for (const num of arr) {
         frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
     }
     
     let largestLucky = -1;
     
    
     frequencyMap.forEach((frequency, num) => {
         if (frequency === num && num > largestLucky) {
             largestLucky = num;
         }
     });
     
     return largestLucky;
 };