/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 时间复杂度 O(max(m, n))
 * 空间复杂度 O(max(m, n))
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = null,
      tail = null;
    let carry = 0;
    while (l1 || l2) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;
      const sum = v1 + v2 + carry;
      if (!head) {
        head = new ListNode(sum % 10);
        tail = head;
      } else {
        tail.next = new ListNode(sum % 10);
        tail = tail.next;
      }
      carry = Math.floor(sum / 10);
      if (l1) {
        l1 = l1.next;
      }
      if (l2) {
        l2 = l2.next;
      }
    }
    if (carry > 0) {
      tail.next = new ListNode(carry);
    }
    return head;
};
// @lc code=end

