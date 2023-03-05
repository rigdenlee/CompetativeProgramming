// Problem Description
// Given a non-negative number represented as an array of digits, add 1 to the number ( increment the number represented by the digits ).

// The digits are stored such that the most significant digit is at the head of the list.
// NOTE: Certain things are intentionally left unclear in this question which you should practice asking the interviewer. For example: for this problem, the following are some good questions to ask :
// Q: Can the input have 0's before the most significant digit. Or, in other words, is 0 1 2 3 a valid input?
// A: For the purpose of this question, YES
// Q: Can the output have 0's before the most significant digit? Or, in other words, is 0 1 2 4 a valid output?
// A: For the purpose of this question, NO. Even if the input has zeroes before the most significant digit.

// Problem Constraints
// 1 <= size of the array <= 1000000


module.exports = {
  //param A : array of integers
  //return a array of integers
  plusOne: function (A) {
    let carry = 1
    for (let i = A.length - 1; i >= 0; i--) {
      let sum = A[i] + carry
      if (sum >= 10) {
        A[i] = (sum) % 10
        carry = (sum) / 10
      } else {
        A[i] = sum
        carry = 0
      }
    }

    if (carry > 0) {
      A.unshift(carry)
    }

    let j = 0
    let finalArr = [...A]
    while (A[j] == 0) {
      finalArr.shift()
      j++
    }

    return finalArr
  }
};