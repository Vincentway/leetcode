/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) return false;
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
    return false;
};
// @lc code=end

