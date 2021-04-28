"use strict";

// Given a list of integers nums and an integer target, return the number
// of sublists whose sum is equal to target
// Sublists are a contiguous part of a list

// Example
//   nums = [2, 0, 2]
//   target = 2
// returns => 4
// since sublists include [2], [2, 0], [0, 2], [2]

// Algorithm logic: If cumulative sum up to two indices is the same, the sum 
// of the elements lying in between those indices is zero. 
// 1) Using a hashmap, store cumulative sum up to all the indices possible 
// along with the number of times the same sum occurs: (sum, # of occurrences)
// 2) Traverse the array and keep finding the cumulative sum
// 3) For every sum encountered, also determine the number of times the sum
//    sum - k has occurred already, since it will determine the number of 
//    times a subarray with sum k has occurred up to the current index. 
//    We increment the count by the same amount.
// 4) Arter traversing the array, the count gives the required result so 
//    return count

/** Function count the number of sublists when given an array and
 *  target sum
 * 
 * @param {*} nums is an array of integers
 * @param {*} target is an integer
 * 
 * Time complexity: O(N) where N is the length of the array
 * Space complexity: O(N) to store the hash map
 */
function findNumSublists(nums, target){
  let count = 0;
  let sum = 0;
  let sumMap = new Map(); // hash map to store sums and number of occurence

  sumMap.set(0, 1);

  for(let i = 0; i < nums.length; i++){
    sume += nums[i];
    if (sumMap.has(sum - target)){
      count += sumMap.get(sum - target);
    }
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  return count;
}

// Test Cases
const nums = [2, 0, 2];
const target = 2;

console.assert(findNumSublists(nums, target) === 4);
