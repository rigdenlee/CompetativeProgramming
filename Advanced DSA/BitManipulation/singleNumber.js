// Problem Description
// Given an array of integers A, every element appears twice except for one. Find that integer that occurs once.
// NOTE: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Problem Constraints
// 1 <= |A| <= 2000000
// 0 <= A[i] <= INTMAX

// Input Format
// The first and only argument of input contains an integer array A.

// Output Format
// Return a single integer denoting the single element.

module.exports = {
  //param A : array of integers
  //return an integer
  singleNumber: function (A) {
    let n = A.length
    let unique = BigInt(0)
    for (let i = 0; i < n; i++) {
      unique = unique ^ BigInt(A[i])
    }
    return Number(unique)
  }
};