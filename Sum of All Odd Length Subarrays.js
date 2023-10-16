// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/


/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
  let subArraySum = 0;
  for (let j = i; j < arr.length; j++) {
    subArraySum += arr[j];
    if ((j - i + 1) % 2 === 1) {
      sum += subArraySum;
    }
  }
}

return sum;
};