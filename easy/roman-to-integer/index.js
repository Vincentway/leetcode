/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const valueMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    if (s.length === 1) {
      return valueMap[s];
    }
    let i = 0,
      j = 1,
      total = 0;
    while (j < s.length) {
      const forward = valueMap[s[i]];
      const afterward = valueMap[s[j]];
      if (forward >= afterward) {
        total += forward;
        i++;
        j++;
      } else {
        total += afterward - forward;
        i += 2;
        j += 2;
      }
    }
    if (j === s.length) {
      total += valueMap[s[j - 1]];
    }
    return total;
};
// @lc code=end

