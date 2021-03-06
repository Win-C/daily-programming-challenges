"use strict";

// Given the head of a Singly LinkedList write a method to modify the 
// LinkedList such that the nodes from the second half of the LinkedList
// are inserted alternately to the nodes from the first half in reverse
// order. 
// For example< if the LinkedList has nodes 1->2->3->4->5->6->null, method
// should return 1->6->2->5->3->4->null
// Your algorithm should not use any extra space and the input LinkedList
// should be modified in-place.

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

function reorder(head){
  if (head === null || head.next === null){
    return;
  }

  // find the middle of the LinkedList
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null){
    slow = slow.next;
    fast = fast.next.next;
  }

  // slow pointer is now pointing to the middle node
  let headSecondHalf = reverse(slow); // reverse the second half
  let headFirstHalf = head;

  // rearrange to produce the LinkedList in the required order
  while (headFirstHalf !== null && headSecondHalf !== null){
    let temp1 = headFirstHalf.next;
    headFirstHalf.next = headSecondHalf;
    headFirstHalf = temp1;

    let temp2 = headSecondHalf.next;
    headSecondHalf.next = headFirstHalf;
    headSecondHalf = temp2;
  }

  // set the next of the last node to null
  if (headFirstHalf !== null){
    headFirstHalf.next = null;
  }
}

/** Helper function that reverses the LinkedList */
function reverse(head){
  let prev = null;
  while (head !== null){
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

// Test Cases
var head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);
head.next.next.next.next.next = new Node(12);
reorder(head);

let temp = head;

while (temp !== null){
  console.log(temp.value);
  temp = temp.next;
}
