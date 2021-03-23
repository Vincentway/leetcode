/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const res = [];
  if (nums.length < 3) {
    return res;
  }
  // JS 中sort默认行为是数组的元素会先转换为string，再根据每个字符在Unicode的值来排序
  // 所以需要自定义排序避免负数排序错误 
  nums.sort((first, second) => {
    return first - second;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return res;
    }
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let second = i + 1;
    let third = nums.length - 1;
    while (second < third) {
      const sum = nums[i] + nums[second] + nums[third];
      if (sum === 0) {
        res.push([nums[i], nums[second], nums[third]]);
        while (second < third && nums[second] === nums[second + 1]) {
          second++;
        }
        while (second < third && nums[third] === nums[third - 1]) {
          third--;
        }
        second++;
        third--;
      } else if (sum > 0) {
        third--;
      } else {
        second++;
      }
    }
  }
  return res;
};
// @lc code=end

