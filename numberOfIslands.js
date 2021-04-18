"use strict";

// Given a two-dimensional integer matrix of 1s and 0s, return the
// number of "islands" in the matrix. A 1 represents land and 0 represents
// water, so an island is a group of 1s that are neighboring whose
// perimeter is surrounded by water. 
// Note: Neighbors can only be directly horizontal or vertical, not 
// diagonal.

// Example #1:
// matrix = [
//            [1, 1],
//            [1, 0],
//          ]
// Returns 1

// Example #2:
// matrix = [
//            [1, 0, 0, 0, 0],
//            [0, 0, 1, 1, 0],
//            [0, 1, 1, 0, 0],
//            [0, 0, 0, 0, 0],
//            [1, 1, 0, 0, 1],
//            [1, 1, 0, 0, 1],
//          ]
// Returns 4

// Example #3:
// matrix = [
//            [0, 1],
//            [1, 0],
//          ]
// Returns 2

/** Function counts the number of islands
 * 
 * @param {*} matrix is an array of arrays
 * @returns number of islands in matrix
 */
function getNumIslands(matrix){
  let numIslands = 0;

  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){
      if (matrix[row][col] === 1){
        numIslands++;
        flipFoundIsland(matrix, row, col);
      }
    }
  }

  return numIslands;
}

/** Helper function to flip entire island */
function flipFoundIsland(matrix, row, col){
  matrix[row][col] = 0;

  // check up and if equal to 1, recurse
  if (row > 0 && matrix[row - 1][col] === 1){
    flipFoundIsland(matrix, row - 1, col);
  }
  // check down and if equal to 1, recurse
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1){
    flipFoundIsland(matrix, row + 1, col);
  }
  // check left and if equal to 1, recurse
  if (col > 0 && matrix[row][col - 1] === 1){
    flipFoundIsland(matrix, row, col - 1);
  }
  // check right and if equal to 1, recurse
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1){
    flipFoundIsland(matrix, row, col + 1);
  }
}

// Test Cases
const matrix1 = [
  [1, 1],
  [1, 0]
];
const matrix2 = [
  [1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 1]
];
const matrix3 = [
  [0, 1],
  [1, 0]
]

console.assert(getNumIslands(matrix1) === 1);
console.assert(getNumIslands(matrix2) === 4);
console.assert(getNumIslands(matrix3) === 2);
