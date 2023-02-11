// Problem Description
// You are given the head of a linked list A and an integer B, check if there is any node which contains this value B.
//   Return 1 if such a node is present else return 0.

// Problem Constraints
// 1 <= size of linked list <= 105
// 1 <= value of nodes <= 109
// 1 <= B <= 109

// Input Format
// The first argument A is the head of a linked list.
// The second arguement B is an integer.

// Output Format
// Return 1 if such a node is present otherwise return 0.


// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
  //param A : head node of linked list
  //param B : integer
  //return an integer
  solve: function (A, B) {
    function check(nod) {
      if (nod.data == B) {
        return 1
      }
      if (nod.next == null) {
        return 0
      }
      return check(nod.next)
    }
    return check(A)
  }
};
