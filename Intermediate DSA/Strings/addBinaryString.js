// Problem Description
// Given two binary strings A and B.Return their sum(also a binary string).

// Problem Constraints
// 1 <= length of A <= 105
// 1 <= length of B <= 105
// A and B are binary strings

// Input Format
// The two argument A and B are binary strings.

// Output Format
// Return a binary string denoting the sum of A and B

module.exports = {
  //param A : string
  //param B : string
  //return a strings
  addBinary: function (A, B) {
    let arrA = A.split("").reverse()
    let arrB = B.split("").reverse()
    const reverseA = arrA.join("");
    const reverseB = arrB.join("");
    const aLength = arrA.length
    const bLength = arrB.length
    let result = ""
    let carry = 0;
    let maxLength = aLength >= bLength ? aLength : bLength;

    for (let i = 0; i < maxLength; i++) {
      let numberA = 0
      let numberB = 0
      if (reverseA.charAt(i) == "") {
        numberA = 0
      } else {
        numberA = Number(reverseA.charAt(i))
      }
      if (reverseB.charAt(i) == "") {
        numberB = 0
      } else {
        numberB = Number(reverseB.charAt(i))
      }
      const sum = numberA + numberB + carry
      if (sum == 3) {
        carry = 1
        result += 1
      } else if (sum == 2) {
        carry = 1
        result += 0
      } else if (sum == 1) {
        result += 1
        carry = 0
      } else {
        result += 0
        carry = 0
      }
    }
    if (carry == 1) {
      result += 1
    }
    return result.split("").reverse().join("")
  }
};
