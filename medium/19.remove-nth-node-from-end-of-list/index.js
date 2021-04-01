/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @lc code=start
/**
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let before = head;
    let after = head;
    let distance = 0;
    while (after.next) {
      if (distance < n) {
        after = after.next;
        distance++;
      } else {
        before = before.next;
        after = after.next;
      }
    }
    if (distance >= n) {
      before.next = before.next.next;
    } else {
      head = head.next;
    }
    return head;
};
// @lc code=end

