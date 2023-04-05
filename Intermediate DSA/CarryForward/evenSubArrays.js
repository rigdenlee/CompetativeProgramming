// Problem Description
// You are given an integer array A.

// Decide whether it is possible to divide the array into one or more subarrays 
// of even length such that the first and last element of all subarrays will be even.
// Return "YES" if it is possible; otherwise, return "NO" (without quotes).

// Problem Constraints
// 1 <= |A|, A[i] <= 106

// Input Format
// The first and the only input argument is an integer array, A.

// Output Format
// Return a string "YES" or "NO" denoting the answer.

module.exports = {
  //param A : array of integers
  //return a strings
  solve: function (A) {
    if (A.length % 2 != 0) {
      return 'NO'
    }

    if (A[0] % 2 == 0 && A[A.length - 1] % 2 == 0) {
      return 'YES'
    } else {
      return 'NO'
    }
  }
};