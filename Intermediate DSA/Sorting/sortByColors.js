// Problem Description
// Given an array with N objects colored red, white, or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent red, white, and blue, respectively.
//   Note: Using the library sort function is not allowed.

// Problem Constraints
// 1 <= N <= 1000000
// 0 <= A[i] <= 2

module.exports = {
  //param A : array of integers
  //return a array of integers
  sortColors: function (A) {
    return A.sort((a, b) => {
      return Number(a) - Number(b)
    })
  }
};
