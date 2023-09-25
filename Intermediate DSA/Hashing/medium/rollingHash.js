// Problem Description
// Given two string A and B of length N and M respectively consisting of lowercase letters. Find the number of occurrences of B in A.

// Problem Constraints
// 1 <= M <= N <= 105

// Input Format
// Two argument A and B are strings

// Output Format
// Return an integer denoting the number of occurrences of B in A

module.exports = {
  //param A : string
  //param B : string
  //return an integer
  solve: function (A, B) {
    // ACTUAL ROLLING HASH ALGO
    // function hashingAlgo(st) {
    //   let primeNo = 97;
    //   let firstHashedValue =
    //     st.charCodeAt(0) * Math.pow(primeNo, st.length - 1);
    //   let hashedValue = firstHashedValue;
    //   for (let i = 1; i < st.length; i++) {
    //     let code = st.charCodeAt(i);
    //     hashedValue += code * Math.pow(primeNo, st.length - i - 1);
    //   }

    //   return {
    //     first: firstHashedValue,
    //     result: hashedValue,
    //   };
    // }

    // let count = 0;
    // const searchHash = hashingAlgo(B).result;
    // let subString = A.substring(0, B.length);
    // let { first, result } = hashingAlgo(subString);
    // if (result == searchHash) {
    //   count++;
    // }

    // for (let i = 1; i <= A.length - B.length; i++) {
    //   result = (result - first) * 97 + A.charCodeAt(i + B.length - 1);
    //   first = A.charCodeAt(i) * Math.pow(97, B.length - 1);
    //   if (result == searchHash) {
    //     count++;
    //   }
    // }

    // return count;

    let n = A.length;
    let m = B.length;
    let prime = 31;
    let mod = 1e9 + 7;

    let p_pow = new Array(n);
    p_pow[0] = 1;
    for (let i = 1; i < n; i++) {
      p_pow[i] = (p_pow[i - 1] * prime) % mod;
    }
    let h = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
      h[i + 1] =
        (h[i] + (A.charCodeAt(i) - "a".charCodeAt(0) + 1) * p_pow[i]) % mod;
    }

    let hash_B = 0;
    for (let i = 0; i < m; i++) {
      hash_B =
        (hash_B + (B.charCodeAt(i) - "a".charCodeAt(0) + 1) * p_pow[i]) % mod;
    }

    let ans = 0;
    for (let i = 0; i + m - 1 < n; i++) {
      let curr_hash = (h[i + m] + mod - h[i]) % mod;
      if (curr_hash == (hash_B * p_pow[i]) % mod) ans += 1;
    }

    return ans;
  },
};
