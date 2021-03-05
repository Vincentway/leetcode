/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * 滑动窗口
 * 时间复杂度 O(n)
 * 空间复杂度 O(∣Σ∣)，其中 Σ 表示字符集（即字符串中可以出现的字符）
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
      return s.length;
    }
    let head = 0;
    let tail = 0;
    let substrMap = new Map();
    let maxLen = 0;
    while (tail < s.length) {
      const strIndex = substrMap.get(s[tail]);
      if (typeof strIndex !== 'undefined' &&
        strIndex >= head) {
        const substrLen = tail - head;
        maxLen = substrLen > maxLen ? substrLen : maxLen;
        head = strIndex + 1;
        substrMap.set(s[tail], tail);
        tail++;
      } else {
        substrMap.set(s[tail], tail);
        tail++;
      }
    }
    
    const substrLen = tail - head;
    maxLen = substrLen > maxLen ? substrLen : maxLen;
    return maxLen;
};
// @lc code=end

