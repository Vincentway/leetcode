/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * 贪心
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let rst = 0;
    for (let i = 1; i < prices.length; i++) {
      rst += Math.max(0, prices[i] - prices[i - 1]);
    }
    return rst;
};

/**
 * 动态规划
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp0 = 0;
    let dp1 = -prices[0];
    for (let i = 1; i < prices.length; i++) {
      const newDp0 = Math.max(dp0, dp1 + prices[i]);
      const newDp1 = Math.max(dp1, dp0 - prices[i]);
      dp0 = newDp0;
      dp1 = newDp1;
    }
    return dp0;
};
// @lc code=end

