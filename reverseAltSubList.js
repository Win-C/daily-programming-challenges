"use strict";

// Given the head of a LinkedList and a number 'k', reverse
// every alternating 'k' sized sublist starting from the head.
// If, in the end, you are left with a sublist with less than
// 'k' elements, reverse it too. 

// Example
//  1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> null, k = 2
//  returns =>
//  2 -> 1 -> 3 -> 4 -> 6 -> 5 -> 7 -> 8 -> null

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

function reverseAltKElement(head, k){
  if (k <= 1 || head === null) return head;

  let current = head;
  let previous = null;
  while (current){ // break if we've reached the end of the list
    const lastNodePreviousPart = previous;
    // after reversing the LinkedList 'current' will become the last node of the sublist
    const lastNodeSubList = current;
    let next = null; // will be used to temporarily store the next node

    // reverse 'k' nodes
    let i = 0;
    while (current && i < k){
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
      i++;
    }

    // connect with the previous part
    if (lastNodePreviousPart){
      lastNodePreviousPart.next = previous;
    } else {
      head = previous;
    }

    // connect with the next part
    lastNodeSubList.next = current;

    // skip 'k' nodes
    i = 0;
    while(current && i < k){
      previous = current;
      current = current.next;
      i++;
    }
  }
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);

console.log(reverseAltKElement(head, 2));
