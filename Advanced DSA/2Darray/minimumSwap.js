// Problem Description
// Given an array of integers A and an integer B, find and return the minimum number of swaps required to bring all the numbers less than or equal to B together.
// Note: It is possible to swap any two elements, not necessarily consecutive.

// Problem Constraints
// 1 <= length of the array <= 100000
// -109 <= A[i], B <= 109

// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer B.

// Output Format
// Return the minimum number of swaps.


module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let numberOfElementsLessThanB = 0
    for (let i = 0; i < A.length; i++) {
      if (A[i] <= B) {
        numberOfElementsLessThanB++
      }
    }

    let badElements = 0
    for (let i = 0; i < numberOfElementsLessThanB; i++) {
      if (A[i] > B) {
        badElements++
      }
    }

    let ans = badElements
    let s = 1
    let e = numberOfElementsLessThanB

    while (e < A.length) {
      if (A[s - 1] <= B) {
        badElements++
      }
      if (A[e] <= B) {
        badElements--
      }
      if (badElements < ans) {
        ans = badElements
      }
      s++
      e++
    }
    return ans
  }
};