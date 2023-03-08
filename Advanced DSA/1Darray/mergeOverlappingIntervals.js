// Problem Description
// Given a collection of intervals, merge all overlapping intervals.

// Problem Constraints
// 1 <= Total number of intervals <= 100000.

// Input Format
// First argument is a list of intervals.

// Output Format
// Return the sorted list of intervals after merging all the overlapping intervals.

module.exports = {
  /**
   * Interval: [start, end]
   * 
   * param A: intervals, a list of Intervals
   * return :a list of Intervals
   */
  merge: function (A) {
    A.sort((a, b) => {
      return a[0] - b[0]
    })
    let l = A[0][0]
    let r = A[0][1]

    let result = []
    for (let i = 1; i < A.length; i++) {
      if (A[i][0] <= r) {
        r = Math.max(r, A[i][1])
      } else {
        result.push([l, r])
        l = A[i][0]
        r = A[i][1]
      }
    }

    result.push([l, r])
    return result
  }
};
