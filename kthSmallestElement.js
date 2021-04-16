"use strict";

// Given a list of unsorted integers nums, and an integer k,
// return the kth (0-indexed) smallest element in the list. 
// k is smaller than size of array.
// This should be done in O(N) time on average

// Multiple approaches:
// Method 1) Merge Sort O(NlogN)
// Method 2) Quick Sort O(N) on average, worst case is O(N^2)

// Using Quick Sort, pick a pivot element, then move the pivot
// element to its correct position and partition the array around
// it. The goal is not to do complete quicksort, but stop at the 
// point where pivot itself is k'th smallest element. Also, not to
// recur for both left and right sides of pivot, but recur for one
// of them according to the position of pivot.

/** Function finds the kth smallest element in an unsorted array
 *  Time complexity: O(N) on average
 */
function findKthSmallestElement(nums, k, left = 0, right = nums.length - 1) {
  // Helper function responsible for arranging elements in an array
  // on left and right side of pivot 
  // Returns the pivot index
  function partition(nums, start, end) {
    let pivot = nums[end];
    let i = start;
    for (let j = start; j < end; j++) {
      if (nums[j] <= pivot) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
      }
    }
    [nums[i], nums[end]] = [nums[end], nums[i]];

    return i;
  }

  // Get pivot index
  let pivot = partition(nums, left, right);

  if (pivot === k) return nums[pivot];

  return (pivot > k)
    ? findKthSmallestElement(nums, k, left, pivot - 1)
    : findKthSmallestElement(nums, k, pivot + 1, right);
}

// Test Cases
let nums1 = [5, 3, 8, 2, 0];
let nums2 = [7, 10, 4, 3, 20, 15];

console.assert(findKthSmallestElement(nums1, 2) === 3);
console.assert(findKthSmallestElement(nums2, 3) === 10);