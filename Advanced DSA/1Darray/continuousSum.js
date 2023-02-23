// Problem Description
// There are A beggars sitting in a row outside a temple.Each beggar initially has an empty pot.When the devotees come to the temple, they donate some amount of coins to these beggars.Each devotee gives a fixed amount of coin(according to their faith and ability) to some K beggars sitting next to each other.

// Given the amount P donated by each devotee to the beggars ranging from L to R index, where 1 <= L <= R <= A, find out the final amount of money in each beggar's pot at the end of the day, provided they don't fill their pots by any other means.
// For ith devotee B[i][0] = L, B[i][1] = R, B[i][2] = P, Given by the 2D array B

// Problem Constraints
// 1 <= A <= 2 * 105
// 1 <= L <= R <= A
// 1 <= P <= 103
// 0 <= len(B) <= 105

// Input Format
// The first argument is a single integer A.
// The second argument is a 2D integer array B.

// Output Format
// Return an array(0 based indexing) that stores the total number of coins in each beggars pot.

module.exports = {
  //param A : integer
  //param B : array of array of integers
  //return a array of integers
  solve: function (A, B) {
    const beggarsPot = Array(A).fill(0)
    let q = B.length

    for (let i = 0; i < q; i++) {
      let start = B[i][0] - 1
      let end = B[i][1] - 1
      let value = B[i][2]
      beggarsPot[start] += value
      if (end + 1 <= A - 1) {
        beggarsPot[end + 1] += -value
      }
    }

    // Prefix Sum
    for (let i = 1; i < A; i++) {
      beggarsPot[i] += beggarsPot[i - 1]
    }

    return beggarsPot
  }
};
