// Problem Description
// Given the array of strings A, you need to find the longest string S, which is the prefix of ALL the strings in the array.
// The longest common prefix for a pair of strings S1 and S2 is the longest string S which is the prefix of both S1 and S2.
// Example: the longest common prefix of "abcdefgh" and "abcefgh" is "abc".

// Problem Constraints
// 0 <= sum of length of all strings <= 1000000

module.exports = {
  //param A : array of strings
  //return a strings
  longestCommonPrefix: function (A) {
    if (A.length === 0) {
      return ""; // return an empty string if the input array is empty
    }
    let prefix = A[0]; // initialize the prefix to the first string in the array
    for (let i = 1; i < A.length; i++) {
      while (A[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, prefix.length - 1); // reduce the length of the prefix until it is a prefix of the current string
        if (prefix === "") {
          return ""; // return an empty string if there is no common prefix
        }
      }
    }
    return prefix; // return the longest common prefix
  }
};