// Problem Description
// Write a recursive function that checks whether string A is a palindrome or Not.
//   Return 1 if the string A is a palindrome, else return 0.
// Note: A palindrome is a string that's the same when read forward and backward.

// Problem Constraints
// 1 <= | A | <= 50000
// String A consists only of lowercase letters.

function isPalindrome(A) {
  let arrA = A.split('')
  function check(i, j, A) {
    if (i >= j) {
      return 1
    }

    if (A[i] == A[j]) {
      return check(i + 1, j - 1, A)
    } else {
      return 0
    }
  }

  return check(0, arrA.length - 1, arrA)
}

isPalindrome("naman")