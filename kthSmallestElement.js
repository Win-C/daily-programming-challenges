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
// point where pivot itself is k'th smallest element. Also, does not
// recurse for both left and right sides of pivot, but recurses for 
// one side only, according to the position of pivot.

/** Function finds the kth smallest element in an unsorted array
 *  Time complexity: O(N) on average
 */
function findKthSmallestElement(nums, k, left = 0, right = nums.length - 1) {
  let pivotIdx = findPivotIndex(nums, left, right);

  if (pivotIdx === k) return nums[pivotIdx];

  return (pivotIdx > k)
    ? findKthSmallestElement(nums, k, left, pivotIdx - 1)
    : findKthSmallestElement(nums, k, pivotIdx + 1, right);
}

/** Helper function responsible for arranging elements in an array 
 *  on either side of the pivot
 *  
 *  Note: ideally pivot should be chosen so that it's roughly median
 *  value in the data set being sorted
 * 
 *  Returns the pivot index 
 */
function findPivotIndex(arr, start, end) {
  let pivot = arr[end];  // For simplicity, set pivot to last element
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]];

  return i;
}

// Test Cases
let nums1 = [5, 3, 8, 2, 0];
let nums2 = [7, 10, 4, 3, 20, 15];

console.assert(findKthSmallestElement(nums1, 2) === 3);
console.assert(findKthSmallestElement(nums2, 3) === 10);