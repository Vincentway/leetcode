/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) {
      return 0;
    }
    let last = Math.abs(x);
    const nums = [];
    while (last > 0) {
      nums.push('' + last % 10);
      last = Math.floor(last / 10);
    }
    let rst = x > 0 ? '' : '-';
    for (let i = 0, l = nums.length; i < l; i++) {
      rst += nums[i];
    }
    const reversedInt = parseInt(rst, 10);
    if (reversedInt >= 2147483648 || reversedInt < -2147483648) {
      return 0;
    }
    return reversedInt;
};
// @lc code=end

