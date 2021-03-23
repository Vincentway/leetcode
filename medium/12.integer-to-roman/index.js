/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * 时间复杂度 O(1)
 * 空间复杂度 O(1)
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const symbolMap = {
      1: 'I',
      4: 'IV',
      5: 'V',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C',
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    };
    const keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let rst = '';
    while (num > 0) {
      for (let i = 0; i < keys.length; i++) {
        if (num >= keys[i]) {
          num -= keys[i];
          rst += symbolMap[keys[i]];
          break;
        }
      }
    }
    return rst;
};
// @lc code=end

