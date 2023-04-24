// Problem Description
// Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.

// Problem Constraints
// -1010 <= A[i], B[i] <= 1010

// Input Format
// First Argument is a 1-D array representing A.
// Second Argument is also a 1-D array representing B.

// Output Format
// Return a 1-D vector which you got after merging A and B.

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    let n = A.length
    let m = B.length
    let C = new Array(n + m).fill(null)
    let p1 = 0,
      p2 = 0,
      p3 = 0
    while (p1 < n && p2 < m) {
      if (A[p1] <= B[p2]) {
        C[p3] = A[p1]
        p1++;
        p3++;
      } else {
        C[p3] = B[p2]
        p2++;
        p3++;
      }
    }

    while (p1 < n) {
      C[p3] = A[p1]
      p1++;
      p3++;
    }

    while (p2 < m) {
      C[p3] = B[p2]
      p2++;
      p3++;
    }

    return C
  }
};