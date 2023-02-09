// Problem Description
// Given a number A, we need to find the sum of its digits using recursion.

// Problem Constraints
// 1 <= A <= 109

function sumOfDigits(num) {
  if (num % 10 == num) {
    return parseInt(num)
  }
  return sumOfDigits(num / 10) + parseInt(num % 10)
}

sumOfDigits(123)