"use strict";

// Given a binary tree root, return the leftmost node's value 
// on each level of tree as a list
//
// Example 1:
//      0
//     / \
//    5  2
//        \
//         1
// returns => [0, 5, 1]

class Tree {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/** Function that traverses a binary tree
 *  Takes in root node of tree
 *  Returns a list of leftmost node values
 * 
 *  Time complexity: O(N) where N is the number of nodes
 *  Space complexity: O(N)
 */
function getLeftValsTree(root) {
  // Fail fast if root is null
  if (!root) return [];

  let queue = [[root, 0]]; // use an array to implement a queue
  let leftVals = [];

  while (queue.length) {
    const [node, level] = queue.pop();

    if (level === leftVals.length) leftVals.push(node.val);
    if (node.right) queue.push([node.right, level + 1]);
    if (node.left) queue.push([node.left, level + 1]);
  }

  return leftVals;
}

// Test Case
let root = new Tree(0);
root.left = new Tree(5);
root.right = new Tree(2);
root.right.right = new Tree(1);

console.log(getLeftValsTree(root));