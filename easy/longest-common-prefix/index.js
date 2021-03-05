/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
    let str = '';
    let j = 0;
    let minLen = 200;
    do {
      for (let i = 0, l = strs.length; i < l; i++) {
        if (j === 0) {
          if (strs[i].length === 0) {
            j = minLen;
            break;
          } else {
            minLen = minLen < strs[i].length ? minLen : strs[i].length;
          }
        }
        if (!str) {
          str = strs[i][j];
        } else if (str !== strs[i][j]) {
          j = minLen;
          break;
        }
      }
      if (j < minLen) {
        prefix += str;
        str = '';
        j++;
      }
    } while (j < minLen);
    return prefix;
};
// @lc code=end

