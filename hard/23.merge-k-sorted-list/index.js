/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

// @lc code=start
/**
 * 时间复杂度 O(kn×logk)
 * 空间复杂度 O(logk)
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    const mergeTwoLists = (first, second) => {
      if (!first || !second) {
        return first || second;
      }
      const head = new ListNode(0);
      let tail = head;
      let firstPoint = first;
      let secondPoint = second;
      while (firstPoint && secondPoint) {
        if (firstPoint.val < secondPoint.val) {
          tail.next = firstPoint;
          firstPoint = firstPoint.next;
        } else {
          tail.next = secondPoint;
          secondPoint = secondPoint.next;
        }
        tail = tail.next;
      }
      tail.next = firstPoint || secondPoint;
      return head.next;
    }

    const merge = (lists, left, right) => {
      if (left === right) {
        return lists[left];
      }
      if (left > right) {
        return null;
      }
      const mid = Math.floor((left + right) / 2);
      return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right));
    }

    return merge(lists, 0, lists.length - 1);
};
// @lc code=end

