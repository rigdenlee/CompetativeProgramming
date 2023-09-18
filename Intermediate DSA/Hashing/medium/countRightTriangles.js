// Problem Description
// Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in 2D Cartesian plane.

// Find and return the number of unordered triplets (i, j, k) such that (A[i], B[i]), (A[j], B[j]) and (A[k], B[k]) form a right-angled triangle with the triangle having one side parallel to the x-axis and one side parallel to the y-axis.
// NOTE: The answer may be large so return the answer modulo (109 + 7).

// Problem Constraints
// 1 <= N <= 105
// 0 <= A[i], B[i] <= 109

// Input Format
// The first argument given is an integer array A.
// The second argument given is the integer array B.

// Output Format
// Return the number of unordered triplets that form a right angled triangle modulo (109 + 7).

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let N = A.length - 1;
    const mod = Math.pow(10, 9) + 7;

    const hashmap1 = new Map();
    const hashmap2 = new Map();
    // building a frequency map
    for (let i = 0; i <= N; i++) {
      if (hashmap1.has(A[i])) {
        hashmap1.set(A[i], hashmap1.get(A[i]) + 1);
      } else {
        hashmap1.set(A[i], 1);
      }

      if (hashmap2.has(B[i])) {
        hashmap2.set(B[i], hashmap2.get(B[i]) + 1);
      } else {
        hashmap2.set(B[i], 1);
      }
    }

    let ans = 0;
    for (let i = 0; i <= N; i++) {
      let x = hashmap1.get(A[i]) - 1;
      let y = hashmap2.get(B[i]) - 1;

      ans = ((((x % mod) * y) % mod) % mod) + ans;
    }
    return ans;
  },
};
