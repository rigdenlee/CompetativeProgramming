// Problem Description
// Find the Bth smallest element in given array A .
// NOTE: Users should try to solve it in less than equal to B swaps.

// Problem Constraints
// 1 <= |A| <= 100000
// 1 <= B <= min(|A|, 500)
// 1 <= A[i] <= 109

// Input Format
// The first argument is an integer array A.
// The second argument is integer B.

// Output Format
// Return the Bth smallest element in given array.

module.exports = {
  //param A : array of integers
  //param B : integer
  //return an integer
  kthsmallest: function (A, B) {
    function swap(arr, i, j) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    for (let i = 0; i < B; i++) {
      let cMin = A[i]
      let index = i

      for (let j = i + 1; j < A.length; j++) {
        if (A[j] < cMin) {
          cMin = A[j]
          index = j
        }
      }

      swap(A, i, index)
    }

    return A[B - 1]
  }
};