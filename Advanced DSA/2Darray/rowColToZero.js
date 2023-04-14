// Problem Description
// You are given a 2D integer matrix A, make all the elements in a row or column zero if the A[i][j] = 0. Specifically, make entire ith row and jth column zero.

// Problem Constraints
// 1 <= A.size() <= 103
// 1 <= A[i].size() <= 103
// 0 <= A[i][j] <= 103

// Input Format
// First argument is a vector of vector of integers.(2D matrix).

// Output Format
// Return a vector of vector after doing required operations.

// Example Input
// Input 1:
// [1,2,3,4]
// [5,6,7,0]
// [9,2,0,4]


// Example Output
// Output 1:
// [1,2,0,0]
// [0,0,0,0]
// [0,0,0,0]

module.exports = {
  //param A : array of array of integers
  //return a array of array of integers
  solve: function (A) {
    let row = A.length
    let col = A[0].length

    let colList = []
    let rowList = []
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (A[i][j] == 0) {
          colList.push(j)
          rowList.push(i)
        }
      }
    }

    colList.forEach(col => {
      for (let i = 0; i < row; i++) {
        A[i][col] = 0
      }
    })

    rowList.forEach(row => {
      for (let j = 0; j < col; j++) {
        A[row][j] = 0
      }
    })

    return A
  }
};