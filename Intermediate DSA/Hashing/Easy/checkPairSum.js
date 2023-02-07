// Given an Array of integers B, and a target sum A.
// Check if there exists a pair(i, j) such that Bi + Bj = A and i != j.

// Problem Constraints
// 1 <= Length of array B <= 103
// 0 <= Bi <= 109
// 0 <= A <= 109


function checkPairSum(A, B) {
  // Creating a hashmap for storing frequency of each element
  let hashmap = {}
  for (let i = 0; i < B.length; i++) {
    if (B[i] in hashmap) {
      hashmap[B[i]]++
    } else {
      hashmap[B[i]] = 1
    }
  }

  const hashset = Array.from(new Set(B))
  for (let j = 0; j < hashset.length; j++) {
    let clonedMap = { ...hashmap }
    const searchVal = BigInt(A) - BigInt(hashset[j])
    clonedMap[hashset[j]] = clonedMap[hashset[j]] - 1
    if (searchVal in clonedMap && clonedMap[searchVal] > 0) {
      return 1
    }
    hashmap = clonedMap
  }

  return 0
}

const A = 100
const B = [23, 52, 95, 29, 9, 47, 49, 55, 96, 4]
checkPairSum(A, B)