// Problem Description
// You are given A which is the head of a linked list.Also given is the value B and position C.Complete the function that should insert a new node with the said value at the given position.

//   Notes:
// In case the position is more than length of linked list, simply insert the new node at the tail only.
// In case the pos is 0 or less, simply insert the new node at head only.
//   Follow 0 - based indexing for the node numbering.

// Problem Constraints
// 1 <= size of linked list <= 105

// 1 <= value of nodes <= 109

// 1 <= B <= 109

// 0 <= C <= 105

// Input Format
// The first argument A is the head of a linked list.

// The second argument B is an integer which denotes the value of the new node

// The third argument C is an integer which denotes the position of the new node

// Output Format
// Return the head of the linked list

// With Out using Recursion (With while loop)
function insertNode(head, value, position) {
  let newNode = {
    data: value,
    next: null
  };

  if (position <= 0) {
    newNode.next = head;
    return newNode;
  }

  let current = head;
  let index = 0;
  while (current.next !== null && index < position - 1) {
    current = current.next;
    index++;
  }

  newNode.next = current.next;
  current.next = newNode;

  return head;
}

function insertNodeWithRecursion(head, value, position) {
  if (head === null || position <= 0) {
    let newNode = {
      data: value,
      next: head
    };
    return newNode;
  }

  head.next = insertNodeWithRecursion(head.next, value, position - 1);
  return head;
}


let A = 1
let B = 3
let C = 1
return insertNode(A, B, C)