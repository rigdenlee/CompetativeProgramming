// Problem Description
// Given an integer A, return the number of trailing zeroes in A! i.e., factorial of A.
// Note: Your solution should run in logarithmic time complexity.

// Problem Constraints
// 1 <= A <= 109

// Input Format
// First and only argument is a single integer A.

// Output Format
// Return a single integer denoting number of zeroes.

module.exports = {
  //param A : integer
  //return an integer
  trailingZeroes: function (A) {
    let ans1 = 0
    for (let i = Math.floor(A / 5); i >= 1; i = Math.floor(i / 5)) {
      ans1 += i
    }

    return ans1
  }
};

// TC: log5N