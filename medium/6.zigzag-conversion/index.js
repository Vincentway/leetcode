/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  let goDown = false;
  let row = 0;
  let zigzagArrary = [];
  for (let i = 0; i < numRows; i++) {
    zigzagArrary.push('');
  }
  for (let i = 0; i < s.length; i++) {
    zigzagArrary[row] += s[i];
    if (row === 0 || row === numRows - 1) {
      goDown = !goDown;
    }
    row = goDown ? row + 1 : row - 1;
  }

  let rst = '';
  zigzagArrary.map(row => {
    rst += row;
  })
  return rst;
};
// @lc code=end

