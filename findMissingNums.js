"use strict";

// Given an unsorted array containing numbers and a number 'k',
// find the first 'k' missing positive numbers in the array.
// Example:
//    input: nums = [3, -1, 4, 5, 5] , k = 3
//    output: [1, 2, 6]
//
//    input: nums = [2, 3, 4] , k = 3
//    output: [1, 5, 6]
//
//    input: nums = [-2, -3, 4] , k = 2
//    output: [1, 2]

/** Function finds 'k' smallest missing positive numbers in a 
 *  passed in array.
 *  Takes in an array (nums) and integer (k) representing
 *  the number of missing positive numbers
 *  Returns an array of length k
 * 
 *  Time complexity: O(N + K) where
 *    N is the length of the nums array
 *    K is the passed in value
 *  Space complexity: O(K) 
 */
function findMissingNums(nums, k){
  const missingNums = [];
  const extraNums = new Set(); // remember extra numbers seen in nums
  const n = nums.length;
  
  // Sort array in place with cyclic sort
  let i = 0;
  while (i < n){
    const j = nums[i] - 1;
    if (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[j]){
      [nums[i], nums[j]] = [nums[j], nums[i]];
    } else {
      i++;
    }
  }

  // Find missing positive numbers in sorted nums array
  for (let j = 0; j < n; j++){
    if (nums[j] !== j + 1 && missingNums.length < k){
      missingNums.push(j + 1);
      extraNums.add(nums[j]);
    }
  }

  // Add remaining missing numbers if array length < k
  let counter = 1;
  while (missingNums.length < k){
    const num = n + counter;
    // Ignore if extraNums contains the num
    if(!extraNums.has(num)){
      missingNums.push(num);
    }
    counter++;
  }

  return missingNums;
}

// Test Cases
let nums1 = [3, -1, 4, 5, 5];
let nums2 = [2, 3, 4];
let nums3 = [-2, -3, 4];

console.log(findMissingNums(nums1, 3)) // [1, 2, 6]
console.log(findMissingNums(nums2, 3)) // [1, 5, 6]
console.log(findMissingNums(nums3, 2)) // [1, 2]
