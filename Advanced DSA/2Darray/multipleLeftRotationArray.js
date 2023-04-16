// Problem Description
// Given an array of integers A and multiple values in B, which represents the number of times array A needs to be left rotated.

// Find the rotated array
// for each value and
// return the result in the from of a matrix where ith row represents the rotated array
// for the ith value in B.

// Problem Constraints
// 1 <= length of both arrays <= 2000 -10^9 <= A[i] <= 10^9 0 <= B[i] <= 2000

// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer array B.

// Output Format
// Return the resultant matrix.

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of array of integers
  solve: function (A, B) {
    const n = A.length;
    const result = [];

    for (let i = 0; i < B.length; i++) {
      const k = B[i] % n; // handle rotation greater than n
      const rotatedArray = A.slice(k).concat(A.slice(0, k));
      result.push(rotatedArray);
    }

    return result;
  }
};
