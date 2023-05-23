// Problem Description
// Given an array of integers A, sort the array into a wave-like array and return it.
// In other words, arrange the elements into a sequence such that

// a1 >= a2 <= a3 >= a4 <= a5..... 
// NOTE: If multiple answers are possible, return the lexicographically smallest one.

// Problem Constraints
// 1 <= len(A) <= 106
// 1 <= A[i] <= 106

// Input Format
// The first argument is an integer array A.
// Output Format
// Return an array arranged in the sequence as described.

module.exports = {
  //param A : array of integers
  //return a array of integers
  wave: function (A) {
    A.sort((a, b) => a - b)

    for (let i = 1; i < A.length; i += 2) {
      let temp = A[i]
      A[i] = A[i - 1]
      A[i - 1] = temp
    }

    return A
  }
};