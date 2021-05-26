"use strict";

// Given a string digits containing 2 to 9 inclusive, return
// in sorted lexicographic order all possible strings it could
// represent when mapping to letters on a phone dialpad.

function findPhonePermutations(digits){
  const dialpad = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }

  let result = [];

  if(!digits) return result;

  function recursivelyBuildStrings(path, index){
    if(path.length === digits.length){
      result.push(path.join(''));
      return;
    }

    const letters = dialpad[digits[index]];

    for(const letter of letters){
      path.push(letter);
      recursivelyBuildStrings(path, index + 1);
      path.pop();
    }
  }

  recursivelyBuildStrings([], 0);

  return result;  
}

const digits = "23";
console(findPhonePermutations(digits)); 
// returns ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]