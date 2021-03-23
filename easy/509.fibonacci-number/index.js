/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0 || n === 1) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
};
// @lc code=end

