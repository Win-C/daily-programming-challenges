"use strict";

// Given a two-dimensional integer matrix of 1s and 0s where 0
// represents empty cell and 1 represents a block that forms a 
// shape, return the perimeter of the shape. 
// There is guaranteed to be exactly one shape, and the shape
// has no holes in it. 

// Example
// matrix = [
//            [0, 1, 1],
//            [0, 1, 0]
//          ]
// returns => 8

/** Function calculates the total perimeter of an island
 *  Takes in a matrix of n*m
 *  Returns the perimeter as an integer
 * 
 *  Time complexity: O(N*M) where n and m are the matrix dimensions
 *  Space complexity: O(1)
 */
function findIslandPerimeter(matrix){
  let totalPerimeter = 0;

  for (let row = 0; row < matrix.length; row++){
    for (let col = 0; col < matrix[row].length; col++){
      if (matrix[row][col] === 1){
        totalPerimeter += findPerimeter(matrix, row, col);
      }
    }
  }

  return totalPerimeter;
}

/** Helper function to calculate the perimeter for the cell */
function findPerimeter(matrix, row, col){
  let perimeter = 4;

  // check cell above and if it is equal to 1, reduce perimeter
  if (row > 0 && matrix[row - 1][col] === 1){
    perimeter--;
  }
  // check cell below and if it is equal to 1, reduce perimeter
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1){
    perimeter--;
  }
  // check cell to left and if it is equal to 1, reduce perimeter
  if (col > 0 && matrix[row][col - 1] === 1){
    perimeter--;
  }
  // check cell to right and if it is equal to 1, reduce perimeter
  if (col < matrix[row].length - 1 && matrix[row][col + 1] === 1){
    perimeter--;
  }

  return perimeter;
}

// Test Cases
const matrix = [
  [0, 1, 1],
  [0, 1, 0]
];
console.assert(findIslandPerimeter(matrix) === 8);