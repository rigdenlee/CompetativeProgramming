// Count unique elements
// Problem Description
// You are given an array A of N integers. Return the count of elements with frequncy 1 in the given array.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <= 109
// Input Format
// First argument A is an array of integers.

// Output Format
// Return an integer.

module.exports = { 
  //param A : array of integers
  //return an integer
   solve : function(A) {
         const frequencyMap = new Map();
         for (let i = 0; i < A.length; i++) {
             if (!frequencyMap.get(A[i])) {
                 frequencyMap.set(A[i], 1);
             } else {
                 let count = frequencyMap.get(A[i]) +1
                 frequencyMap.set(A[i], count);
             }
         }
         let uniqueCount = 0
         const uniqueEl = new Set(A)
         for (const item of uniqueEl) {
             if (frequencyMap.get(item) == 1) {
                 uniqueCount++
             }
         }
         return uniqueCount
   }
 };
 