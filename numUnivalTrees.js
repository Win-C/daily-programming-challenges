"use strict";

// A univalue tree is a tree where all nodes under it have the same
// value. Given a binary tree root, return the number of univalue 
// subtrees.

// Example
//      0
//     / \
//    1  0
//      / \
//     1  0
//    / \
//   1  1
// output => 5

class Node{
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/** Function counts the nunber of unival trees given a binary tree root
 * 
 * @param {*} root 
 * @returns count of the number of unival trees
 * 
 * Time complexity: O(N) where N is every node
 * Space complexity: O(N) for the recursive stack
 */
function findNumUnivalTrees(root){
  let count = 0;

  /** Helper function to count the number of unival trees 
   *  Returns true if subtree is single value, false otherwise
  */
  function countUnivalTree(node){
    if(!node) return true;
    
    let isLeftUnivalTree = countUnivalTree(node.left);
    let isRightUnivalTree = countUnivalTree(node.right);

    if (!isLeftUnivalTree || !isRightUnivalTree) return false;

    if (node.left && node.val != node.left.val) return false;
    if (node.right && node.val != node.right.val) return false;
  
    count++;
    return true;
  }

  countUnivalTree(root);
  return count;
}


// Test Case
let root = new Node(5);
root.left = new Node(4);
root.right = new Node(5);
root.right.right = new Node(5);
root.left.left = new Node(4);
root.left.right = new Node(4);

console.assert(findNumUnivalTrees(root) === 5);