/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) {
    return 0;
  }
  const length = height.length;
  const leftMax = [height[0]];
  const rightMax = [];
  for (let i = 1; i < length; i++) {
    leftMax.push(Math.max(height[i], leftMax[i - 1]));
  }
  rightMax[length - 1] = height[length - 1];
  for (let i = length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(height[i], rightMax[i + 1]);
  }
  let rst = 0;
  for (let i = 1; i < length - 1; i++) {
    rst += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return rst;
};
// @lc code=end

