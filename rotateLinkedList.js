"use strict";

// Given the head of a Singly LinkedList and a number 'k',
// rotate the LinkedList to the right by 'k' nodes. 

// Example #1:
//    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, k = 3
//    returns =>
//    4 -> 5 -> 6 -> 1 -> 2 -> 3 -> null

// Example #2:
//    1 -> 2 -> 3 -> 4 -> 5 -> null, k = 8
//    returns =>
//    3 -> 4 -> 5 -> 1 -> 2 -> null

class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

function rotateLinkedList(head, k){
  if(k <= 1 || head === null) return head;

  // find the length and the last node of the list
  let lastNode = head;
  let listLength = 1;
  while(lastNode.next !== null){
    lastNode = lastNode.next;
    listLength++;
  }

  // connect the last node with the head to make it a circular list
  lastNode.next = head;
  // no need to do rotations more than the length of the list
  k %= listLength; 

  let skipLength = listLength - k;
  let lastNodeRotatedList = head;
  for (let i = 0; i < skipLength - 1; i++){
    lastNodeRotatedList = lastNodeRotatedList.next;
  }

  // lastNodeRotatedList.next is pointing to the sublist of 'k'ending nodes
  head = lastNodeRotatedList.next;
  lastNodeRotatedList.next = null;
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(rotateLinkedList(head, 3));
