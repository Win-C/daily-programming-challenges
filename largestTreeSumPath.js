"use strict";

// Given a binary tree root, return the largest sum of any
// path between any two nodes.

// Example
//        -6
//       /  \
//      5    4
//          / \
//         7  12
//        / \
//       4  8
//      /
//     2
// Returns => 31
// as a result of 8 + 7 + 4 + 12 = 31

class Tree {
  constructor (val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** Function finds the largest tree sum path for a binary tree
 *  using depth-first-search (DFS)
 *  Takes in the root node
 *  Returns the sum of the largest tree path
 * 
 *  Time complexity: O(N) where N is the number of nodes in the tree
 */
function findLargestTreeSumPath(root){
  let maxSum = 0;

  function getTreeSumPath(node, pathSum = 0){
    if (!node) return 0;

    let left = getTreeSumPath(node.left, pathSum);
    let right = getTreeSumPath(node.right, pathSum);

    maxSum = Math.max(maxSum, node.val + left + right);

    return Math.max(node.val + left, node.val + right);
  }

  getTreeSumPath(root);

  return maxSum;
}

// Test Case
let root = new Tree(-6);
root.left = new Tree(5);
root.right = new Tree(4);
root.right.left = new Tree(7);
root.right.right = new Tree(12);
root.right.left.left = new Tree(4);
root.right.left.right = new Tree(8);
root.right.left.left.left = new Tree(2);

console.log(findLargestTreeSumPath(root));