/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 */

 

// @lc code=start
/**
 * 时间复杂度 O(mn*3^L)
 * 空间复杂度 O(mn)
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const partition = function partition(arr, low, high) {
    let mid = Math.floor(low + (high - low) / 2);
    const pivot = arr[mid];
    [arr[mid], arr[high]] = [arr[high], arr[mid]];
    let i = low;
    let j = high - 1;
    while (i <= j) {
      while (arr[i] > pivot) {
        i++;
      }
      while (arr[j] < pivot) {
        j--;
      }
      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    
    [arr[high], arr[i]] = [arr[i], arr[high]]
    return i;
  };
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = partition(nums, low, high)
    if (mid === k - 1) return nums[mid]
    mid < k - 1 ? low = mid + 1 : high = mid - 1
  }
};
// @lc code=end

