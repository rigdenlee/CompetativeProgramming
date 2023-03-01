// Common Elements
// Problem Description
// Given two integer arrays, A and B of size N and M, respectively. Your task is to find all the common elements in both the array.

// NOTE:
// Each element in the result should appear as many times as it appears in both arrays.
// The result can be in any order.

// Problem Constraints
// 1 <= N, M <= 105
// 1 <= A[i] <= 109

// Input Format
// First argument is an integer array A of size N.
// Second argument is an integer array B of size M.

// Output Format
// Return an integer array denoting the common elements.

// Do not write code to include libraries, main() function or accept any input from the console.
// Initialization code is already written and hidden from you. Do not write code for it again.
module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return a array of integers
  solve: function (A, B) {
    // Just write your code below to complete the function. Required input is available to you as the function arguments.
    // Do not print the result or any output. Just return the result via this function.
    const frequencyMapA = new Map();
    for (let i = 0; i < A.length; i++) {
      if (!frequencyMapA.get(A[i])) {
        frequencyMapA.set(A[i], 1);
      } else {
        let count = frequencyMapA.get(A[i]) + 1
        frequencyMapA.set(A[i], count);
      }
    }

    const frequencyMapB = new Map();
    for (let i = 0; i < B.length; i++) {
      if (!frequencyMapB.get(B[i])) {
        frequencyMapB.set(B[i], 1);
      } else {
        let count = frequencyMapB.get(B[i]) + 1
        frequencyMapB.set(B[i], count);
      }
    }

    const outputArr = []
    frequencyMapA.forEach((value, key, map) => {
      if (frequencyMapB.get(key)) {
        const arr = Array(Math.min(frequencyMapB.get(key), value)).fill(key)
        outputArr.push(...arr)
      }
    })

    return outputArr
  }
};