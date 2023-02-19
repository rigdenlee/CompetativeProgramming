// Problem Description
// Given an array A of N integers.Sort the array in increasing order of the value at the tens place digit of every number.

// If a number has no tens digit, we can assume value to be 0.
// If 2 numbers have same tens digit, in that case number with max value will come first
// Solution should be based on comparator.

// Problem Constraints
// 1 <= N <= 105
// 1 <= A[i] <= 109


module.exports = {
  //param A : array of integers
  //return a array of integers
  solve: function (A) {
    return A.sort((a, b) => {
      let numberA = Number(a)
      let numberB = Number(b)
      const tensA = Math.floor(numberA / 10) % 10 || 0; // Get the tens place digit of a, or 0 if it doesn't have one
      const tensB = Math.floor(numberB / 10) % 10 || 0; // Get the tens place digit of b, or 0 if it doesn't have one
      if (tensA !== tensB) {
        return tensA - tensB; // Sort by increasing tens place digit
      } else {
        return numberB - numberA; // If same tens place digit, sort by decreasing value
      }
    })
  }
};
