// Problem Description
// You are given an array A of N elements. You have to make all elements unique. To do so, in one step you can increase any number by one.
// Find the minimum number of steps.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <= 109

// Input Format
// The only argument given is an Array A, having N integers.

// Output Format
// Return the minimum number of steps required to make all elements unique.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let N = A.length;
    A.sort((a, b) => a - b);
    let count = 0;
    for (let i = 1; i < N; i++) {
      if (A[i - 1] >= A[i]) {
        count += A[i - 1] + 1 - A[i];
        A[i] = A[i - 1] + 1;
      }
    }
    return count;
  }
};
