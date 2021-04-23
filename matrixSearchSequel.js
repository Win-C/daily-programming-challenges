"use strict";

// Given a two-dimensional integer matrix, where every row
// and column is sorted in ascending order, return whether
// an integer target exists in the matrix.
// This should be done in O(n+m) time.

// Example
// matrix = [
//           [1, 3, 9],
//           [2, 5, 10],
//           [5, 7, 13]
//          ]
// output => true

// Algorithm:
// Start with cell in top right corner
// 1) Check if the value is equal to target
//    a) if yes, return true
//    b) if no, check if target is less than value
//      i) if yes, move left to next cell
//      ii) if no, move downward to next cell
// Repeat steps

function matrixSearch(matrix, target) {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    const value = matrix[row][col];

    if (value === target) return true;

    if (target < value) {
      col--;
    } else {
      row++;
    }
  }

  return false;
}

// Test Cases
const matrix = [
  [1, 3, 9],
  [2, 5, 10],
  [5, 7, 13]
];
console.assert(matrixSearch(matrix, 7) === true);
