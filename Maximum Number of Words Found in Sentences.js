// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/


/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i = 0;i < sentences.length; i++){
        let words = sentences[i].split(" ").length;
        if(words > max){
            max = words;
        }
    } 
    return max;
 };