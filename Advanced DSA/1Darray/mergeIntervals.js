// Problem Description
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
// You may assume that the intervals were initially sorted according to their start times.

// Problem Constraints
// 0 <= |intervals| <= 105

// Input Format
// First argument is the vector of intervals
// second argument is the new interval to be merged

// Output Format
// Return the vector of intervals after merging

module.exports = {
  /**
   * Interval: [start, end]
   * 
   * param A: intervals, a list of Intervals
   * return :a list of Intervals
   */
  solve: function (intervals, new_interval) {
    let l = new_interval[0]
    let r = new_interval[1]
    let result = []
    for (let i = 0; i < intervals.length; i++) {
      if (intervals[i][1] < l) {
        result.push([intervals[i][0], intervals[i][1]])
      } else if (intervals[i][0] > r) {
        result.push([l, r])
        for (let j = i; j < intervals.length; j++) {
          result.push([intervals[j][0], intervals[j][1]])
        }
        return result
      } else {
        l = Math.min(l, intervals[i][0])
        r = Math.max(r, intervals[i][1])
      }
    }

    result.push([l, r])
    return result
  },
};