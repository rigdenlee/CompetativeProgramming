// Problem Description
// Given three integers A, B, and C, where A represents n, B represents r, and C represents m, find and return the value of nCr % m where nCr % m = (n!/((n-r)!*r!))% m.
// x! means factorial of x i.e. x! = 1 * 2 * 3... * x.

// Problem Constraints
// 1 <= A * B <= 106
// 1 <= B <= A
// 1 <= C <= 106

// Input Format
// The first argument given is integer A ( = n).
// The second argument given is integer B ( = r).
// The third argument given is integer C ( = m).

// Output Format
// Return the value of nCr % m.

module.exports = {
  //param A : integer
  //param B : integer
  //param C : integer
  //return an integer
  solve: function (A, B, C) {
    let arr = new Array(A + 1).fill(new Array(B + 1).fill(null))
    for (let i = 0; i <= A; i++) {
      let previousArr = []
      if (i > 0) {
        previousArr = [...arr[i - 1]]
      }
      for (let j = 0; j <= B; j++) {
        if (j == 0) {
          arr[i][j] = 1
        } else if (j === i) {
          arr[i][j] = 1
        } else if (j > i) {
          arr[i][j] = 0
        } else {
          arr[i][j] = (previousArr[j - 1] % C + previousArr[j] % C) % C
        }
      }
    }
    return arr[A][B] % C
  }
};