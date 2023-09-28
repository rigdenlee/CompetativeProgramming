// Problem Description
// Design and implement a Linked List data structure.
// A node in a linked list should have the following attributes - an integer value and a pointer to the next node.

// It should support the following operations:

// insert_node(position, value) - To insert the input value at the given position in the linked list.
// delete_node(position) - Delete the value at the given position from the linked list.
// print_ll() - Print the entire linked list, such that each element is followed by a single space (no trailing spaces).
// Note:

// If an input position does not satisfy the constraint, no action is required.
// Each print query has to be executed in a new line.

// Problem Constraints
// 1 <= value <= 105
// 1 <= position <= n where, n is the size of the linked-list.

// Input Format
// First line contains an integer denoting number of cases, let's say t. Next t line denotes the cases.

// Output Format
// When there is a case of print_ll(), Print the entire linked list, such that each element is followed by a single space.

// There should not be any trailing space.

// NOTE: You don't need to return anything.

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS

class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  insert_node(pos, no) {
    let n = new LinkedList(no);
    if (!head) head = n;
    else if (pos == 1) {
      let temp = head;
      head = n;
      n.next = temp;
    } else {
      let t = head;
      while (pos > 2) {
        pos--;
        t = t.next;
      }
      let temp = t.next;
      t.next = n;
      n.next = temp;
    }
    return;
  }

  delete_node(pos) {
    if (!head.next) head = new LinkedList();
    else if (pos == 1) {
      let next = head.next;
      head.next = null;
      head = next;
    } else {
      let temp = head;
      while (pos > 2 && temp.next) {
        temp = temp.next;
        pos--;
      }
      if (temp.next) {
        let next = temp.next.next;
        temp.next.next = null;
        temp.next = next;
      }
    }
    return;
  }

  print_ll() {
    let temp = head;
    let st = "";
    while (temp != null) {
      if (temp.next == null) st += temp.val;
      else st += temp.val + " ";
      temp = temp.next;
    }

    console.log(st);
    return;
  }
}
let head;
