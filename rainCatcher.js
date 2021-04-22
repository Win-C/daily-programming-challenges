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
 *  Space Complexity: O(N)
 */
 function calcTrappedRainWater(nums) {
  let totalRainwater = 0;
  let n = nums.length;

  if (n < 3) return totalRainwater;

  let leftMax = new Array(n - 1);
  leftMax[0] = nums[0];
  for (let i = 1; i < n - 1; i++){
      leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
  }

  let rightMax = nums[n - 1];

  for (let i = n - 2; i >= 0; i--){
      let side = Math.min(leftMax[i - 1], rightMax);
      if (side > nums[i]){
          totalRainwater += side - nums[i];
      }
      rightMax = Math.max(nums[i], rightMax);
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