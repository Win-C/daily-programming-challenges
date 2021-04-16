"use strict";

// Given a binary tree, where every node value is a Digit from 1-9.
// Find the sum of all the numbers which are formed from root to
// leaf paths.

// For example consider the following Binary Tree:
//          6
//       /    \
//      3      5
//    /  \      \
//   2   5       4
//      / \
//     7  4
// There are 4 leaves, hence 4 root to leaf paths:
// Path             Number
// 6->3->2          632
// 6->3->5->7       6357
// 6->3->5->4       6354
// 6->5->4          654
// Answer = 632 + 6357 + 6354 + 654 = 13997


class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {

  /** Function return sum of all root to leaf paths
  *   Time complexity of O(N) where N is the number of nodes in binary tree
  */ 
  getTreePathSums(curr, val = 0){
    // Base Case
    if (!curr) return 0;

    // Update val by shifting digits to the left
    val = (val * 10 + curr.val);

    // If current node is leaf, return the current value of val
    if (!curr.left && !curr.right){
      return val;
    }

    // Recurse sum of values for left and right subtree
    return (this.getTreePathSums(curr.left, val) + 
            this.getTreePathSums(curr.right, val));
  }
}

// Test Case
let tree = new BinaryTree();
let root = new Node(6);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.right = new Node(4);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

console.log(tree.getTreePathSums(root));