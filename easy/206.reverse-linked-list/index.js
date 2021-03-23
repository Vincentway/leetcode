/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * 时间复杂度 O(n)
 * 空间复杂度 O(1)
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let pre = null;
    let next = null;
    while (head !== null) {
      next = head.next;
      head.next = pre;
      pre = head;
      head = next;
    }
    return pre;
};
// @lc code=end

