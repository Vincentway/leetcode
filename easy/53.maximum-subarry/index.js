/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp0 = 0;
    let max = nums[0];
    for (let i = 0; i < nums.length; i++) {
      dp0 = Math.max(dp0 + nums[i], nums[i]);
      max = Math.max(max, dp0);
    }
    return max;
};
// @lc code=end

