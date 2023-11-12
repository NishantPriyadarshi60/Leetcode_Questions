/// https://leetcode.com/problems/valid-parentheses/description/



/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let Parenthesis = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let stack = []

    for (let char of s) {
        if (Parenthesis[char]) {
            stack.push(char);
        } else {
            let top = stack.pop(char)

            if (char !== Parenthesis[top]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};