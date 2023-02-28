// Maximum Absolute Difference

// Problem Description
// You are given an array of N integers, A1, A2, .... AN.
// Return the maximum value of f(i, j) for all 1 ≤ i, j ≤ N. f(i, j) is defined as |A[i] - A[j]| + |i - j|, where |x| denotes absolute value of x.

// Problem Constraints
// 1 <= N <= 100000
// -109 <= A[i] <= 109

module.exports = {
  //param A : array of integers
  //return an integer
  maxArr: function (A) {
    let ans;
    let Xmax = Number.MIN_SAFE_INTEGER
    let Ymax = Number.MIN_SAFE_INTEGER
    let Xmin = Number.MAX_SAFE_INTEGER
    let Ymin = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < A.length; i++) {
      let Xr = A[i] + i;
      Xmax = Math.max(Xmax, Xr)
      Xmin = Math.min(Xmin, Xr)
      let Yr = A[i] - i;
      Ymax = Math.max(Ymax, Yr)
      Ymin = Math.min(Ymin, Yr)
    }
    return Math.max(Xmax - Xmin, Ymax - Ymin)
  }
};