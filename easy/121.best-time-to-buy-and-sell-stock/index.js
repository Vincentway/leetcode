/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
      return 0;
    }
    let minPrice = prices[0];
    let rst = 0;
    for (let i = 1; i < prices.length; i++) {
      if (minPrice > prices[i]) {
        minPrice = prices[i];
      } else {
        const diff = prices[i] - minPrice;
        rst = Math.max(diff, rst);
      }
    }
    return rst;
};
// @lc code=end

