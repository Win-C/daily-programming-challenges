"use strict";

// Given the root to a binary tree root, return whether
// it is symmetric.

//         0
//       /  \
//      2    2
//     / \  / \
//    5  1 1  5
// => true

//      1
//     / \
//    2   3
// => false

/** Function determines if a tree is symmetric
 * 
 * @param {*} root 
 * @returns boolean - true if the tree is symmetric and false otherwise
 * 
 * Time complexity: O(N) where N is the number of nodes in the tree
 */
function isSymmetricBinaryTree(root){
  if(!root) return true;

  return isMirror(root, root);
}

function isMirror(node1, node2){
  if(!node1 && !node2) return true;

  if(!node1 || !node2) return false;

  return (node1.val === node2.val
      && isMirror(node1.left, node2.right)
      && isMirror(node1.right, node2.left));
}