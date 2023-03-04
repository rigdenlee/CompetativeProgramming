// Problem Description
// You are given two lowercase strings A and B each of length N. Return 1 if they are anagrams to each other and 0 if not.

// Note : Two strings A and B are called anagrams to each other if A can be formed after rearranging the letters of B.
// Problem Constraints
// 1 <= N <= 105
// A and B are lowercase strings

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    for (let char of A) {
      if (B.includes(char)) {
        B = B.replace(char, '')
      } else {
        return 0
      }
    }
    return 1
  }
};