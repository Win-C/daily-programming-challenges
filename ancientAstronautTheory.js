"use strict";

// You are given a string dictionary, representing a partial lexicographic
// ordering of ancient astronauts' dictionary. Given a string s, return 
// whether it's a lexicographically sorted string according to this ancient
// astronaut dictionary.

// Example
//    inputs => dictionary = "acb"
//              s = "aaaa h ccc i bbb"
//    returns => true

//    inputs => dictionary = "acb"
//              s = "aaaacccbc"
//    returns => false


/** Function checks if a given string is lexicographically sorted given
 *  an "alien" dictionary
 * 
 * @param {*} dictionary is a string representing a partial lexicographic 
 *            ordering of ancient astronauts' dictionary
 * @param {*} s is a string
 * 
 * Time complexity: O(N) where N is the length of s
 * Space complexity: O(1) assuming dictMap would have 26 keys at most
 */
function isSorted(dictionary, s){
  let d = null; // pointer for dictionary
  let previous = null; // keep track of previous index
  let dictMap = {}; // store dictionary letter and index

  // Create dictionary hash map
  for (let i = 0; i < dictionary.length; i++){
    const char = dictionary[i];
    dictMap[char] = i;
  }

  // Loop through letters of s
  for (let i = 0; i < s.length; i++){
    const char = s[i];

    // If letter is in dictionary, update pointers
    if (char in dictMap){
      previous = d;
      d = dictMap[char];
    }
    
    // If new letter comes before previous in dictionary then s is out of order
    if (d < previous){
      return false;
    }
  }

  return true;
}

// Test Cases
const dictionary = "acb";
const s1 = "aaaa h ccc i bbb";
const s2 = "aaaacccbc";

console.assert(isSorted(dictionary, s1) === true);
console.assert(isSorted(dictionary, s2) === false);
