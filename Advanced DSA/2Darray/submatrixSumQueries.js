// Problem Description
// Given a matrix of integers A of size N x M and multiple queries Q, for each query, find and return the submatrix sum.
// Inputs to queries are top left (b, c) and bottom right (d, e) indexes of submatrix whose sum is to find out.

// NOTE:
// Rows are numbered from top to bottom, and columns are numbered from left to right.
// Sum may be large, so return the answer mod 109 + 7.

// Problem Constraints
// 1 <= N, M <= 1000
// -100000 <= A[i] <= 100000
// 1 <= Q <= 100000
// 1 <= B[i] <= D[i] <= N
// 1 <= C[i] <= E[i] <= M

// Input Format
// The first argument given is the integer matrix A.
// The second argument given is the integer array B.
// The third argument given is the integer array C.
// The fourth argument given is the integer array D.
// The fifth argument given is the integer array E.
// (B[i], C[i]) represents the top left corner of the i'th query.
// (D[i], E[i]) represents the bottom right corner of the i'th query.

// Output Format
// Return an integer array containing the submatrix sum for each query.

module.exports = {
  //param A : array of array of integers
  //param B : array of integers
  //param C : array of integers
  //param D : array of integers
  //param E : array of integers
  //return a array of integers
  solve: function (A, B, C, D, E) {
    const result = []
    let mod = Math.pow(10, 9) + 7
    for (let i = 0; i < A.length; i++) {
      let sum = 0
      for (let j = 0; j < A[0].length; j++) {
        sum = sum + A[i][j] % mod
        A[i][j] = sum % mod

      }
    }
    for (let i = 0; i < A[0].length; i++) {
      let sum = 0
      for (let j = 0; j < A.length; j++) {
        sum = sum + A[j][i] % mod
        A[j][i] = sum % mod
      }
    }

    for (let q = 0; q < B.length; q++) {
      const a1 = B[q] - 1
      const b1 = C[q] - 1
      const a2 = D[q] - 1
      const b2 = E[q] - 1
      let sum = A[a2][b2]
      if (a1 > 0) {
        sum -= A[a1 - 1][b2]
      }

      if (b1 > 0) {
        sum -= A[a2][b1 - 1]
      }

      if (a1 > 0 && b1 > 0) {
        sum += A[a1 - 1][b1 - 1]
      }
      sum = sum % mod
      result.push((sum + mod) % mod)
    }
    return result
  }
};