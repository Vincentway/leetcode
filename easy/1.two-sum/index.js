/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const current = nums[i];
      if (typeof map[current] !== 'undefined') {
        return [map[current], i];
      }
      const diff = target - current;
      map[diff] = i;
    }
};
// @lc code=end

