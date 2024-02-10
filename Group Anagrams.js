// https://leetcode.com/problems/group-anagrams/description/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = {}
    for (const s of strs) {
        const keys = s.split('').sort().join("");
        if (map[keys]) {
            map[keys].push(s);
        } else {
            map[keys] = [s];
        }
    }
    return Object.values(map);
};