// Problem Description
// Say you have an array, A, for which the ith element is the price of a given stock on day i.
// If you were only permitted to complete at most one transaction (ie, buy one and sell one 
// share of the stock), design an algorithm to find the maximum profit.
// Return the maximum possible profit.

// Problem Constraints
// 0 <= len(A) <= 7e5
// 1 <= A[i] <= 1e7

// Input Format
// The first and the only argument is an array of integers, A.

// Output Format
// Return an integer, representing the maximum possible profit.

module.exports = {
  //param A : array of integers
  //return an integer
  maxProfit: function (A) {
    let n = A.length
    let minVal = A[0]
    let maxProfit = 0
    for (let i = 1; i < n; i++) {
      if (A[i] < minVal) {
        minVal = A[i]
        continue
      }
      const profit = A[i] - minVal
      if (profit > maxProfit) {
        maxProfit = profit
      }
    }

    return maxProfit
  }
};