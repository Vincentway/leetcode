/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * 动态规划法
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n^2)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length;
    const dp = [];
    for (let i = 0; i < len; i++) {
      dp.push([]);
    }

    let rst = '';
    for (let l = 0; l < len; l++) {
      for (let i = 0; i + l < len; i++) {
        const j = i + l;
        if (l === 0) {
          dp[i][j] = true;
        } else if (l === 1) {
          dp[i][j] = s[i] === s[j];
        } else {
          dp[i][j] = dp[i + 1][j - 1] && s[i] === s[j];
        }
        if (dp[i][j] && l + 1 > rst.length) {
          rst = s.substr(i, l + 1);
        }
      }
    }
    return rst;
};

// @lc code=start
/**
 * 中心扩展法
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 1) {
      return '';
    }

    const expandAroundCenter = function(s, left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return right - left - 1;
    }
    let start = 0,
      end = 0;
    for (let i = 0; i < s.length; i++) {
      const len1 = expandAroundCenter(s, i, i);
      const len2 = expandAroundCenter(s, i, i + 1);
      const maxLen = Math.max(len1, len2);
      if (maxLen > end - start) {
        start = i - Math.floor((maxLen - 1) / 2);
        end = i + Math.floor(maxLen / 2);
      }
    }
    return s.substring(start, end + 1);
};
// @lc code=end

