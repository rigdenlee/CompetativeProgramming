// Problem Description
// You are given an integer A, print 1 to A using using recursion.

// Problem Constraints
// 1 <= A <= 104

// Input Format
// First argument A is an integer.

// Output Format
// Print A space - separated integers 1 to A.
//   Note: There should be exactly one space after each integer.After printing all the integers, print a new line

function solve(A) {
  let returnS = ''
  function printInteger(num, currentNum) {
    if (currentNum == num) {
      returnS += `${num} `
      return
    }
    returnS += `${currentNum} `
    currentNum++
    printInteger(num, currentNum)
    return
  }

  printInteger(A, 1)
  console.log(returnS)
}

solve(10)