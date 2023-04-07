// Problem Description
// You are given two matrices A & B of equal dimensions and you have to check whether two matrices are equal or not.
// NOTE: Both matrices are equal if A[i][j] == B[i][j] for all i and j in the given range.

// Problem Constraints
// 1 <= A.size(), B.size() <= 1000
// 1 <= A[i].size(), B[i].size() <= 1000
// 1 <= A[i][j], B[i][j] <= 1000

// Input Format
// First argument is vector of vector of integers representing matrix A.

// Second argument is vector of vector of integers representing matrix B.

// Output Format
// Return 1 if both matrices are equal or return 0.

module.exports = {
  //param A : array of array of integers
  //param B : array of array of integers
  //return an integer
  solve: function (A, B) {
    let rowLength = A.length
    let colLength = A[0].length

    for (let i = 0; i < rowLength; i++) {
      for (let j = 0; j < colLength; j++) {
        if (A[i][j] !== B[i][j]) {
          return 0
        }
      }
    }

    return 1
  }
};