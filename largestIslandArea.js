"use strict";

// Given a two-dimensional integer matrix of 1s and 0s. A 1 represents
// land and 0 represents water, so an island is a group of 1s that are
// neighboring whose perimeter is surrounded by water. You can assume
// that the edges of the matrix are surrounded by water.
// Return the area of the largest island in matrix. 

// Example
// matrix = [
//            [0, 0, 0, 1, 1, 1, 1],
//            [0, 0, 0, 0, 0, 0, 0],
//            [0, 1, 1, 1, 1, 1, 0],
//            [0, 0, 1, 1, 0, 0, 0],
//            [0, 0, 0, 0, 0, 1, 1],
//            [0, 0, 0, 0, 0, 0, 0],
//          ]
// Returns 7

/** Function finds the largest island area
 * 
 * @param {*} matrix is an array of arrays
 * @returns area of the largest island
 * Time complexity: O(N * M) where N is the num of rows and
 * M is the num of columns
 */
function findLargestIslandArea(matrix){
  let largestIsland = 0;

  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){
      if (matrix[row][col] === 1){
        largestIsland = Math.max(
          largestIsland, checkSurroundingArea(matrix, row, col)
        );
      }
    }
  }

  return largestIsland;
}

/** Helper function to check surrounding area and add to sum */
function checkSurroundingArea(matrix, row, col){
  let sum = matrix[row][col];
  matrix[row][col] = 0;  // flip to avoid double counting

  // Check up, and if equal to 1, recurse
  if (row > 0 && matrix[row - 1][col] === 1){
    sum += checkSurroundingArea(matrix, row - 1, col);
  }
  // Check down, and if equal to 1, recurse
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1){
    sum += checkSurroundingArea(matrix, row + 1, col);
  }
  // Check left, and if equal to 1, recurse
  if (col > 0 && matrix[row][col - 1] === 1){
    sum += checkSurroundingArea(matrix, row, col - 1);
  }
  // Check right, and if equal to 1, recurse
  if (col< matrix[row].length - 1 && matrix[row][col + 1] === 1){
    sum += checkSurroundingArea(matrix, row, col + 1);
  }
  
  return sum;
}

// Test Case
const matrix = [
  [0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0]
]
console.assert(findLargestIslandArea(matrix) === 7);
