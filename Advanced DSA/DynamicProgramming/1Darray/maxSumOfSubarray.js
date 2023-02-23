// Problem Description
// Find the contiguous non - empty subarray within an array, A of length N, with the largest sum.

// Problem Constraints
// 1 <= N <= 1e6
//   - 1000 <= A[i] <= 1000

// Input Format
// The first and the only argument contains an integer array, A.

// Output Format
// Return an integer representing the maximum possible sum of the contiguous subarray.

// Using Kadane’s Algorithm

module.exports = {
  //param A : array of integers
  //return an integer
  maxSubArray: function (A) {
    let n = A.length
    let carry = 0;
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
      let sum = carry + A[i];
      if (sum > max) {
        max = sum;
      }
      if (sum <= 0) {
        carry = 0;
      } else {
        carry = sum;
      }
    }

    return max;
  }
};