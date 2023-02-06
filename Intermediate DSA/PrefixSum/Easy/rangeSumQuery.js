// Problem Description
// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

// Problem Constraints
// 1 <= N, M <= 105
// 1 <= A[i] <= 109
// 0 <= L <= R < N

// Input Format
// The first argument is the integer array A.
// The second argument is the 2D integer array B.

// Output Format
// Return an integer array of length M where ith element is the answer for ith query in B.

function rangeSum(A, B) {
  let n = A.length
  for (let i = 0; i < n; i++) {
    if (i != 0) {
      A[i] = A[i] + A[i - 1]
    }
  }
  let q = B.length
  let output = []
  for (let j = 0; j < q; j++) {
    if (B[j][0] - 1 == 0) {
      output.push(Number(A[B[j][1] - 1]))
    } else {
      output.push(Number(A[B[j][1] - 1]) - Number(A[B[j][0] - 2]))
    }
  }
  return output
}

A = [1, 2, 3, 4, 5]
B = [[0, 3], [1, 2]]
rangeSum(A, B)