// Problem Description
// Given 4 array of integers A, B, C and D of same size, find and return the maximum value of | A [ i ] - A [ j ] | + | B [ i ] - B [ j ] | + | C [ i ] - C [ j ] | + | D [ i ] - D [ j ] | + | i - j| where i != j and |x| denotes the absolute value of x.

// Problem Constraints
// 2 <= length of the array A, B, C, D <= 100000
// -106 <= A[i] <= 106

// Input Format
// The arguments given are the integer arrays A, B, C, D.

// Output Format
// Return the maximum value of | A [ i ] - A [ j ] | + | B [ i ] - B [ j ] | + | C [ i ] - C [ j ] | + | D [ i ] - D [ j ] | + | i - j|


module.exports = {
  //param A : array of integers
  //param B : array of integers
  //param C : array of integers
  //param D : array of integers
  //return an integer
  solve: function (A, B, C, D) {
    const n = A.length;
    let max = Number.MIN_VALUE;
    const cal = (val) => {
      let Xmax = -Number.MAX_VALUE,
        Ymax = -Number.MAX_VALUE,
        Xmin = Number.MAX_VALUE,
        Ymin = Number.MAX_VALUE;
      for (let i = 0; i < n; i++) {
        const x = eval(val) - i,
          y = eval(val) + i;
        Xmax = Math.max(Xmax, x);
        Xmin = Math.min(Xmin, x);
        Ymax = Math.max(Ymax, y);
        Ymin = Math.min(Ymin, y);
      }
      return Math.max(max, Xmax - Xmin, Ymax - Ymin);
    }
    const comb = ['A[i]+B[i]+C[i]+D[i]', 'A[i]+B[i]+C[i]-D[i]', 'A[i]+B[i]-C[i]+D[i]', 'A[i]-B[i]+C[i]+D[i]',
      'A[i]-B[i]-C[i]+D[i]', 'A[i]-B[i]+C[i]-D[i]', 'A[i]+B[i]-C[i]-D[i]', 'A[i]-B[i]-C[i]-D[i]'
    ]
    for (let i = 0; i < 8; i++) {
      max = cal(comb[i]);
    }
    return max;
  }
};