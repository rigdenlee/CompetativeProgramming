// Problem Description
// Given an array of integers A, calculate the sum of A [ i ] % A [ j ] for all possible i, j pairs. Return sum % (109 + 7) as an output.

// Problem Constraints
// 1 <= length of the array A <= 105
// 1 <= A[i] <= 103

// Input Format
// The only argument given is the integer array A.

// Output Format
// Return a single integer denoting sum % (109 + 7).


module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let N = A.length
    let sum = 0
    let mod = Math.pow(10, 9) + 7

    let freq = {}
    for (let j = 0; j < N; j++) {
      freq[A[j]] = freq[A[j]] ? freq[A[j]] + 1 : 1
    }

    // TC:- O(1) - Max iteration will be only 10^3 * 10^3
    for (let i in freq) {
      for (let j in freq) {
        if (i != j) {
          sum = (sum + ((i % j) * freq[i] * freq[j])) % mod
        }
      }
    }

    return sum
  }
};