// Problem Description
// Given two arrays of integers A and B of size N each, where each pair (A[i], B[i]) for 0 <= i < N represents a unique point (x, y) in a 2-D Cartesian plane.
// Find and return the number of unordered quadruplet (i, j, k, l) such that (A[i], B[i]), (A[j], B[j]), (A[k], B[k]) and (A[l], B[l]) form a rectangle with the rectangle having all the sides parallel to either x-axis or y-axis.

// Problem Constraints
// 1 <= N <= 2000
// 0 <= A[i], B[i] <= 109

// Input Format
// The first argument given is the integer array A.
// The second argument given is the integer array B.

// Output Format
// Return the number of unordered quadruplets that form a rectangle.

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    let N = A.length - 1;
    let count = 0;

    const hashSet = new Set();
    // build a hashset
    for (let i = 0; i <= N; i++) {
      hashSet.add(`${A[i]}-${B[i]}`);
    }

    for (let i = 0; i <= N; i++) {
      for (let j = i + 1; j <= N; j++) {
        let x1 = A[i];
        let y1 = B[i];

        let x2 = A[j];
        let y2 = B[j];

        if (x1 == x2 || y1 == y2) continue;

        if (hashSet.has(`${x1}-${y2}`) && hashSet.has(`${x2}-${y1}`)) {
          count++;
        }
      }
    }

    return count / 2;
  },
};
