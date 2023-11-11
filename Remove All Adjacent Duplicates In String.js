// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/



/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
   for(let i = 0;i < s.length;i++){
       if(stack[stack.length - 1] !== s[i]){
           stack.push(s[i])
       }else{
           stack.pop();
       }
   }
   return stack.join('')
};