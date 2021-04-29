"use strict";

// Given a binary tree root, return the largest absolute difference
// between any node and its descendants. 

// Example 
//      0
//     / \
//    4   2
//       / \
//      1   7
//     / \
//    6   3
// Returns => 7

// Algorithm: Use depth first search to grab value for each node and
//  descendants in the binary tree. 
//  Keep track of max and min values found for each branch
//  Return the absolute difference between max and min

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** Function finds the absolute difference between TreeNode and its 
 *  descendants.
 * 
 * @param {*} node from binary tree
 * @param {*} currMax max value for current branch
 * @param {*} currMin min value for current branch
 * 
 * returns absolute difference
 * 
 * Time complexity: O(N) where N is the number of nodes on the tree
 * Space complexity: O(N) for the recursive stack
 */
function findMaxDiff(root) {
  if(!root) return 0;

  function findMaxDiffRecursive(node, currMax, currMin){
    if (!node) return currMax - currMin;

    currMax = Math.max(currMax, node.val);
    currMin = Math.min(currMin, node.val);

    let left = findMaxDiffRecursive(node.left, currMax, currMin);
    let right = findMaxDiffRecursive(node.right, currMax, currMin);

    return Math.max(left, right);
  }
  return findMaxDiffRecursive(root, root.val, root.val);
}

// Test Case
let root = new TreeNode(0);
root.left = new TreeNode(4);
root.right = new TreeNode(2);
root.right.left = new TreeNode(1);
root.right.left.left = new TreeNode(6);
root.right.left.right = new TreeNode(3);
root.right.right = new TreeNode(7);

console.assert(findMaxDiff(root) === 7);