// Problem Description
// Given a 2D Matrix A of dimensions N*N, we need to return the sum of all possible submatrices.

// Problem Constraints
// 1 <= N <=30

// 0 <= A[i][j] <= 10
// Input Format
// Single argument representing a 2-D array A of size N x N.

// Output Format
// Return an integer denoting the sum of all possible submatrices in the given matrix.

module.exports = {
  //param A : array of array of integers
  //return an integer
  solve: function (A) {
    // top_left => (i + 1) * (j + 1)
    // top_left => (m - j) * (n - i)
    let totalSum = 0;
    let col = A[0].length
    let row = A.length
    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        let contri = (i + 1) * (j + 1) * (row - j) * (col - i)
        totalSum += contri * A[i][j]
      }
    }

    return totalSum
  }
};