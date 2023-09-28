// Problem Description
// You are given two positive numbers A and B . You need to find the maximum valued integer X such that:
// X divides A i.e. A % X = 0
// X and B are co-prime i.e. gcd(X, B) = 1

// Problem Constraints
// 1 <= A, B <= 109

// Input Format
// First argument is an integer A.
// Second argument is an integer B.

// Output Format
// Return an integer maximum value of X as descibed above.

module.exports = {
  //param A : integer
  //param B : integer
  //return an integer
  cpFact: function (A, B) {
    function gcd(a, b) {
      while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
      }
      return a;
    }

    function checkCoPrime(a, b) {
      return gcd(a, b) === 1;
    }

    if (A == B) {
      return 1;
    }
    let factors = [];
    for (let i = 1; i * i <= A; ++i) {
      if (A % i == 0) {
        factors.push(i);
        factors.push(A / i);
      }
    }

    factors.sort((a, b) => {
      return b - a;
    });
    for (let fac of factors) {
      if (checkCoPrime(fac, B)) {
        return fac;
      }
    }
  },
};
