"use strict";

// Given an array containing 0s, 1s and 2s, sort the array in-place
// You should treat numbers of the array as objects, hence, we can't
// count 0s, 1s, and 2s to recreate the array. 

// Example
//    [1, 0, 2, 1, 0] => [0, 0, 1, 1, 2]
//    [2, 2, 0, 1, 2, 0] => [0, 0, 1, 2, 2, 2]

/** Function sorts array in-place using two pointers
 *  Takes in an array containing 0s, 1s and 2s
 * 
 * @param {*} arr 
 * 
 * Time complexity: O(N) where N is the length of the array
 * Space complexity: O(1)
 */
function dutchFlagSort(arr){
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while(i <= high){
    if (arr[i] === 0){
      [arr[i], arr[low]] = [arr[low], arr[i]];
      i++;
      low++;
    } else if (arr[i] === 1){
      i++;
    } else {
      [arr[i], arr[high]] = [arr[high], arr[i]];
      high--;
    }
  }
}

// Test Cases
let array1 = [1, 0, 2, 1, 0];
let array2 = [2, 2, 0, 1, 2, 0];

dutchFlagSort(array1);
dutchFlagSort(array2);
console.log(array1); // [0, 0, 1, 1, 2]
console.log(array2); // [0, 0, 1, 2, 2, 2]
