/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  const str = x.toString();
  let isPalindrome = true;
  const l = str.length;
  const halfL = Math.floor(l / 2);
  for (let i = 0; i < halfL; i++) {
    if (str[i] !== str[l - i - 1]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
};
// @lc code=end

