/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
    if (!root) return result;
    const walker = (root, rst, depth) => {
      if (!root) return;
      if (!rst[depth]) {
        rst[depth] = [];
      }
      rst[depth].push(root.val);
      walker(root.left, rst, depth + 1);
      walker(root.right, rst, depth + 1);
    }
    walker(root, result, 0);
    return result;
};
// @lc code=end

