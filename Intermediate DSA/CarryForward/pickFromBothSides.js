// Problem Description
// You are given an integer array A of size N.
// You have to perform B operations. In one operation, you can remove either the leftmost or the rightmost element of the array A.
// Find and return the maximum possible sum of the elements that were removed after B operations.
// NOTE: Suppose B = 4, and array A contains 10 elements, then
// You can remove the first four elements or can remove the last four elements, or can remove 1 from front and 3 from the back, etc. You need to return the maximum possible sum of elements you can remove.

// Problem Constraints
// 1 <= N <= 105
// 1 <= B <= N
// -103 <= A[i] <= 103

// Input Format
// First argument is an integer array A.
// Second argument is an integer B.

// Output Format
// Return an integer denoting the maximum possible sum of elements you removed.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  solve: function (A, B) {
    let n = A.length
    let pfSum = [A[0]]
    let sfSum = [A[n - 1]]
    for (let i = 1; i < n; i++) {
      pfSum[i] = pfSum[i - 1] + A[i]
    }

    for (let i = n - 1; i > 0; i--) {
      sfSum[n - i] = sfSum[n - i - 1] + A[i - 1]
    }

    let maxSum = Math.max(pfSum[B - 1], sfSum[B - 1])
    for (let j = 1; j < B; j++) {
      let index = B - j - 1
      let sum = pfSum[j - 1] + sfSum[index]
      if (sum > maxSum) {
        maxSum = sum
      }
    }
    return maxSum
  }
};