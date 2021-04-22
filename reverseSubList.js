"use strict";

// Given the head of a LinkedList and two positions 'p' and 'q', 
// reverse the LinkedList from position 'p' to 'q'

// Example
//    1 -> 2 -> 3 -> 4 -> 5, p = 2, q = 4
//    returns => 1 -> 4 -> 3 -> 2 -> 5

class Node {
  constructor (value, next = null){
    this.value = value;
    this.next = next;
  }
}

/** Function returns a reversed sublist of a LinkedList
 *  Takes in p and q indexes for LinkedList
 *  Returns head of reversed LinkedList
 *  
 *  Time complexity: O(N) where N is the number of nodes
 *  Space complexity: O(1)
 */
function reverseSubList(head, p, q){
  if (p === q) return head;

  let current = head;
  let previous = null;
  let i = 0;

  // Interested in three parts: 
  // 1) part before index 'p'
  // 2) part between 'p' and 'q'
  // 3) part after index 'q'

  // Skip 'p - 1' nodes, current will point to 'p'th node
  while (current !== null && i < p - 1){
    previous = current;
    current = current.next;
    i++;
  }

  // Grab the nodes for each section to connect later
  const lastNodeFirstPart = previous;
  const lastNodeSecondPart = current;
  let next = null;

  // Reverse nodes between 'p' and 'q'
  i = 0;
  while (current !== null && i < q - p + 1){
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
    i++;
  }

  // connect secondpart with first part
  if (lastNodeFirstPart !== null){
    lastNodeFirstPart.next = previous;
  } else {
    // if p === 1, change first node (head) of LinkedList
    head = previous;
  }

  // connect with last part
  lastNodeSecondPart.next = current;

  return head;
}

// Test Case
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(reverseSubList(head, 2, 4));
