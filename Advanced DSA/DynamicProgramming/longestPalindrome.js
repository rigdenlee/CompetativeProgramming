// Problem Description
// Given a string A of size N, find and return the longest palindromic substring in A.
// Substring of string A is A[i...j] where 0 <= i <= j < len(A)
// Palindrome string:
// A string which reads the same backwards.More formally, A is palindrome if reverse(A) = A.
// Incase of conflict, return the substring which occurs first( with the least starting index).

// Problem Constraints
// 1 <= N <= 6000

// Input Format
// First and only argument is a string A.

// Output Format
// Return a string denoting the longest palindromic substring of string A.

module.exports = {
  //param A : string
  //return a strings
  longestPalindrome: function (A) {
    let n = A.length;
    let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));
    let maxLength = 1;
    let start = 0;
    // every substring of length 1 is a palindrome
    for (let i = 0; i < n; i++) {
      dp[i][i] = true;
    }

    // check substrings of length 2 or more
    for (let len = 2; len <= n; len++) {
      for (let i = 0; i <= n - len; i++) {
        let j = i + len - 1;
        if (A[i] == A[j]) {
          if (len == 2 || dp[i + 1][j - 1]) {
            dp[i][j] = true;
            if (len > maxLength) {
              maxLength = len;
              start = i;
            }
          }
        }
      }
    }

    return A.substring(start, start + maxLength);
  }
};
