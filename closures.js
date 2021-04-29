"use strict";

// Write a sum method which will work properly when invoked
// using either 1 or 2 arguments

// Example
//    sum(2, 3) => 5
//    sum(2)(3) => 5

function sum(x, y) {
  return (y !== undefined)
    ? x + y
    : function (y) {
      return x + y;
    };
}

// Test Cases
console.assert(sum(2, 3) === 5);
console.assert(sum(2)(3) === 5);



// Write a function called curriedAdd. If you give this function
// a number, it returns a new function to you. If you give this function
// no arguments, it returns the total of all the numbers you've passed 
// to it so far.

// Example:
//    curriedAdd() => 0
//    curriedAdd(1)(2)() => 3
//    curriedAdd(2)(8)(5)(1)() => 16

function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return addNext; // returns the AddNext function
  }
}

// Test Cases
console.assert(curriedAdd() === 0);
console.assert(curriedAdd(1)(2)() === 3);
console.assert(curriedAdd(2)(8)(5)(1)() === 16);
