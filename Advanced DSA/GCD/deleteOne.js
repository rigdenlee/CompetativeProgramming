// Problem Description
// Given an integer array A of size N. You have to delete one element such that the GCD(Greatest common divisor) of the remaining array is maximum.
// Find the maximum value of GCD.

// Problem Constraints
// 2 <= N <= 105
// 1 <= A[i] <= 109

// Input Format
// First argument is an integer array A.

// Output Format
// Return an integer denoting the maximum value of GCD.

module.exports = {
  //param A : array of integers
  //return an integer
  solve: function (A) {
    let n = A.length

    function gcd(a, b) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    const pfGcd = []; // pfGcd[i] stores gcd of first i elements of arr
    const sfGcd = []; // sfGcd[i] stores gcd of last n-i elements of arr
    pfGcd[0] = A[0];
    sfGcd[n - 1] = A[n - 1];

    for (let i = 1; i < n; i++) {
      pfGcd[i] = gcd(pfGcd[i - 1], A[i]);
    }
    for (let i = n - 2; i >= 0; i--) {
      sfGcd[i] = gcd(sfGcd[i + 1], A[i]);
    }

    let maxGCD = 0;
    for (let i = 0; i < n; i++) {
      let gcdWithoutElem;
      if (i === 0) {
        gcdWithoutElem = sfGcd[1];
      } else if (i === n - 1) {
        gcdWithoutElem = pfGcd[n - 2];
      } else {
        gcdWithoutElem = gcd(pfGcd[i - 1], sfGcd[i + 1]);
      }
      maxGCD = Math.max(maxGCD, gcdWithoutElem);
    }
    return maxGCD;
  }
};