// Given an array A of size N. Rearrange the given array so that A[i] becomes A[A[i]] with O(1) extra space.

// Constraints:
// 1 <= N <= 5×104
// 0 <= A[i] <= N - 1

// The elements of A are distinct
// Input Format
// The argument A is an array of integers

module.exports = {
  //param A : array of integers
  //return nothing
  arrange: function (A) {
    const n = A.length;
    for (let i = 0; i < n; i++) {
      A[i] += (A[A[i]] % n) * n;
    }
    for (let i = 0; i < n; i++) {
      A[i] = Math.floor(A[i] / n);
    }
    return A;
  }
};