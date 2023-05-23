// Problem Description
// Write a function that takes an integer and returns the number of 1 bits it has.

// Problem Constraints
// 1 <= A <= 109

// Input Format
// First and only argument contains integer A
// Output Format
// Return an integer as the answer

module.exports = {
  //param A : integer
  //return an integer
  numSetBits: function (A) {
    let count = 0;
    while (A) {
      count += A & 1;
      A >>= 1;
    }
    return count;
  }
};