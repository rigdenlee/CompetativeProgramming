// Problem Description
// You are given a singly linked list having head node A.You need to print the linked list in reverse order.
//   Note : - The node values must be space separated.You must give a newline after printing all the nodes.

// Problem Constraints
// 1 <= Length of linked list <= 105
// 1 <= Value of each linked list node <= 109

// Input Format
// First and only argument is a linked - list node A.

// Output Format
// Print the linked list in reverse order

// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  solve: function (A) {
    function reverse(head, revNode) {
      if (head.next == null) {
        revNode += `${head.data} `
        return revNode;
      }

      revNode += reverse(head.next, revNode)
      revNode += `${head.data} `
      return revNode
    }

    console.log(reverse(A, ''))
  }
};
