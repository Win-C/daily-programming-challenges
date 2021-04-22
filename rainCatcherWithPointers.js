"use strict";

// Given n non-negative integers representing an elevation map where
// the width of each bar is 1, compute how much water it is able to 
// trap after raining

// Example
//    [2, 0, 2] => 2
//    [3, 0, 2, 0, 4] => 7
//    [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] => 6

/** Function calculates the amount of rainwater trapped
 *  Uses two variables to store left and right max of each
 *  element up until that point
 * 
 *  @param {*} nums is an array of non-negative integers
 *  @returns total rainwater trapped as an integer
 * 
 *  Time Complexity: O(N) where N is the length of nums
 *  Space Complexity: O(1)
 */
function calcTrappedRainWater(nums) {
  let totalRainwater = 0;
  let n = nums.length;

  if (n < 3) return totalRainwater;

  // max element on left and right
  let leftMax = 0;
  let rightMax = 0;

  // pointers for traversing the array
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    if (nums[low] < nums[high]) {
      if (nums[low] > leftMax) {
        leftMax = nums[low]; // update max on left
      } else {
        totalRainwater += leftMax - nums[low];
      }
      low++;
    } else {
      if (nums[high] > rightMax) {
        rightMax = nums[high]; // update max on right
      } else {
        totalRainwater += rightMax - nums[high];
      }
      high--;
    }
  }

  return totalRainwater;
}

// Test Cases
let nums1 = [2, 0, 2];
let nums2 = [3, 0, 2, 0, 4];
let nums3 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.assert(calcTrappedRainWater(nums1) === 2);
console.assert(calcTrappedRainWater(nums2) === 7);
console.assert(calcTrappedRainWater(nums3) === 6);
