// Problem Description
// Given a vector A of non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// Problem Constraints
// 1 <= |A| <= 100000

// Input Format
// First and only argument is the vector A

// Output Format
// Return one integer, the answer to the question

module.exports = {
  //param A : array of integers
  //return an integer
  trap: function (A) {
    let n = A.length
    let pfmArr = [...A]
    let sfmArr = [...A]
    let max = Number.MIN_SAFE_INTEGER
    for (let i = 0; i < n; i++) {
      if (pfmArr[i] > max) {
        pfmArr[i] = pfmArr[i]
        max = pfmArr[i]
      } else {
        pfmArr[i] = max
      }
    }

    max = Number.MIN_SAFE_INTEGER
    for (let i = n - 1; i >= 0; i--) {
      if (sfmArr[i] > max) {
        sfmArr[i] = sfmArr[i]
        max = sfmArr[i]
      } else {
        sfmArr[i] = max
      }
    }

    let ans = 0
    for (let i = 1; i < (n - 1); i++) {
      let support = Math.min(pfmArr[i - 1], sfmArr[i + 1])
      let waterTrapped = support - A[i]

      if (waterTrapped > 0) {
        ans += waterTrapped
      }
    }

    return ans
  }
};