// Problem Description
// You are given a string A of lowercase English alphabets. Rearrange the characters of the given string A such that there is no boring substring in A.

// A boring substring has the following properties:
// Its length is 2.
// Both the characters are consecutive, for example - "ab", "cd", "dc", "zy" etc.(If the first character is C then the next character can be either (C+1) or (C-1)).
// Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.

// Problem Constraints
// 1 <= |A| <= 105
// Input Format
// The only argument given is a string A.
// Output Format
// Return 1 if it is possible to rearrange the letters of A such that there are no boring substrings in A else, return 0.

// Example Input
// Input 1:
//  A = "abcd"
// Input 2:
//  A = "aab"
// Example Output
// Output 1:
//  1
// Output 2:
//  0
// Example Explanation
// Explanation 1:
//  String A can be rearranged into "cadb" or "bdac"
// Explanation 2:
//  No arrangement of string A can make it free of boring substrings.

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let smallest_even;
    let largest_even;
    let smallest_odd;
    let largest_odd;

    for (let i = 0; i < A.length; i++) {
      let code = A.charCodeAt(i);
      if (code % 2 == 0) {
        if (smallest_even == undefined || smallest_even > code) {
          smallest_even = code;
        }

        if (largest_even == undefined || largest_even < code) {
          largest_even = code;
        }
      } else {
        if (smallest_odd == undefined || smallest_odd > code) {
          smallest_odd = code;
        }

        if (largest_odd == undefined || largest_odd < code) {
          largest_odd = code;
        }
      }
    }

    // smallest smallest, largest largest comparision
    if (
      (smallest_even + 1 != largest_odd && smallest_even - 1 != largest_odd) ||
      (smallest_even + 1 != smallest_odd &&
        smallest_even - 1 != smallest_odd) ||
      (largest_even + 1 != largest_odd && largest_even - 1 != largest_odd) ||
      (largest_even + 1 != smallest_odd && largest_even - 1 != smallest_odd)
    ) {
      return 1;
    }

    return 0;
  },
};
