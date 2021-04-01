/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        break;
      }
    }
    if (!fast || !fast.next || !fast.next.next) return null;
    slow = head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return fast;
};
// @lc code=end

