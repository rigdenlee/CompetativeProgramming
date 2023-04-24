// Given a binary string A. It is allowed to do at most one swap between any 0 and 1. Find and return the length of the longest consecutive 1’s that can be achieved.

// Input Format
// The only argument given is string A.
// Output Format

// Return the length of the longest consecutive 1’s that can be achieved.
// Constraints
// 1 <= length of string <= 1000000
// A contains only characters 0 and 1.

module.exports = {
  //param A : string
  //return an integer
  solve: function (A) {
    let n = A.length;
    let count_one = 0;

    // count total number of ones for the guard and can swap logic below
    for (let i = 0; i < n; i++) {
      if (A[i] === "1") {
        count_one++;
      }
    }

    // if all are one return the count
    if (count_one === n) return count_one;

    let max_consec = 0,
      l, r, consec

    for (let i = 0; i < n; i++) {
      // for each 0 count the 1's on left and right
      if (A[i] === "0") {
        l = 0, r = 0
        for (let j = i - 1; j >= 0; j--) {
          if (A[j] === "1") {
            l++;
            continue;
          }
          break;
        }
        for (let j = i + 1; j < n; j++) {
          if (A[j] === "1") {
            r++;
            continue;
          }
          break;
        }

        // count the max of consec 1's it can provide by swapping itself

        // at the least any 1 on right or left can be used to swap this current 0 (A[i])
        // which will connect the segments on l + r
        consec = l + r

        // if consec is less than count_one which means
        // there exists another 1 somewhere else in the array, swap it with that
        if (consec < count_one) {
          consec++
        }

        max_consec = Math.max(max_consec, consec)
      }
    }

    return max_consec
  }
};