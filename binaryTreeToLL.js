"use strict";

// Given a binary tree root, convert it to a singly linked list using an
// inorder traversal

// inorder traversal = traversing a tree by:
//    1. Recursively traversing the left subtree
//    2. Visiting the root node
//    3. Recursively traversing the right subtree

// Example
//      2
//    /  \
//   1    4
//       /
//      3
// Returns LinkedList of 1->2->3->4

class Tree {
  constructor (val, left = null, right = null){
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class LLNode {
  constructor (val, next = null){
    this.val = val;
    this.next = next;
  }
}

/** Function turns a binary tree into a linked list
 * 
 * @param {*} root node of a binary tree
 * @returns linked list with inorder traversal
 * 
 * Time complexity: O(N) where N is the number of nodes
 */
function binaryTreeToLL(root){
  if (!root) return null;

  let linkedList = null;
  let currNode = null;

  function inOrderTraversal(node){
    if (node.left) inOrderTraversal(node.left);

    const newNode = new LLNode(node.val);

    if (!linkedList){
      linkedList = newNode;
      currNode = newNode;
    } else {
      currNode.next = newNode;
      currNode = newNode;
    }

    if (node.right) inOrderTraversal(node.right);
  }

  inOrderTraversal(root);
  return linkedList;
}