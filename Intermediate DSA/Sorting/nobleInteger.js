// Problem Description
// Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals p.

// Problem Constraints
// 1 <= | A | <= 2 * 105
//   - 108 <= A[i] <= 108

// Input Format
// First and only argument is an integer array A.

// Output Format
// Return 1 if any such integer p is present else, return -1.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    A = A.sort((a, b) => {
      if (Number(a) > Number(b)) {
        return 1
      }
      if (Number(b) > Number(a)) {
        return -1
      }
      return 0
    })

    let n = A.length
    for (let i = 0; i < n; i++) {
      if (A[i] != A[i + 1]) {
        if (n - i - 1 == A[i]) {
          return 1
        }
      }
    }
    return -1
  }
};
