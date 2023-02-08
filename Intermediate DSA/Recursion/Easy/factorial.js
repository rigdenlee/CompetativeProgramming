// Problem Description
// Write a program to find the factorial of the given number A using recursion.

// Problem Constraints
// 0 <= A <= 12

function factorial(A) {
  function recursion(n) {
    if (n == 0) {
      return 1
    }

    return recursion(n - 1) * n
  }

  return recursion(A)
}

const A = 4
factorial(A)