"use strict";

// An upside down number is one that appears the same when flipped
// 180 degrees. Given n, return all upside down numbers as strings
// whose length is n, sorted in lexicographic order.

function findUpsideDownNumber(n){
  let result = [];

  if(!n) return result;

  function recursivelyBuildStrings(currLength, length){
    if(currLength === 0) return [""];
    if(currLength === 1) return ["0", "1", "8"];

    let list = recursivelyBuildStrings(currLength - 2, length);
    let numberArr = [];

    for (let s of list){
      if(currLength !== length) numberArr.push("0" + s + "0");
      numberArr.push("1" + s + "1");
      numberArr.push("6" + s + "9");
      numberArr.push("8" + s + "8");
      numberArr.push("9" + s + "6");
    }

    return numberArr;
  }

  result = recursivelyBuildStrings(n, n);

  return result.sort((a, b) => Number(a) - Number(b));
}

console.log(findUpsideDownNumber(1)); // ["0", "1", "8"]
console.log(findUpsideDownNumber(2)); // ["11", "69", "88", "96"]
console.log(findUpsideDownNumber(3)); // ["101", "111", "181", "609", "619", "689", "808", "818", "888", "906", "916", "986"]