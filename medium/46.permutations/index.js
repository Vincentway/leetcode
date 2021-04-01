/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * 时间复杂度 O(n×n!)
 * 空间复杂度 O(n)
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    const output = nums.concat([]);
    const length = nums.length;
    const backtrack = (res, output, length, first) => {
      if (first === length) {
        res.push(output.concat([]));
      }
      for (let i = first; i < length; i++) {
        [output[first], output[i]] = [output[i], output[first]];
        backtrack(res, output, length, first + 1);
        [output[first], output[i]] = [output[i], output[first]];
      }
    }
    backtrack(res, output, length, 0);
    return res;
};
// @lc code=end

