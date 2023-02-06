// Problem Description
// Given an array A of N integers.

// Find the length of the longest subarray in the array which sums to zero.


// Problem Constraints
// 1 <= N <= 105
//   - 109 <= A[i] <= 109


// Input Format
// Single argument which is an integer array A.


// Output Format
// Return an integer.


function longestSubArrayZero(A) {
  let sum = BigInt(0)
  const pfArr = A.map(el => {
    sum += BigInt(el)
    return sum
  })

  const hashmap = {}
  for (let i = 0; i < pfArr.length; i++) {
    if (pfArr[i] in hashmap) {
      hashmap[pfArr[i]].push(i)
    } else {
      hashmap[pfArr[i]] = [i]
    }
  }

  const hashSet = Array.from(new Set(pfArr))
  let maxDistance = 0
  for (let j = 0; j < hashSet.length; j++) {
    const length = hashmap[hashSet[j]].length
    if (hashmap[hashSet[j]].length > 1) {
      const tempDistance = hashmap[hashSet[j]][length - 1] - hashmap[hashSet[j]][0]
      if (maxDistance < tempDistance) {
        maxDistance = tempDistance
      }
    }

    // If there is a 0 in prefix sum array then consider this -
    if (hashSet[j] == 0) {
      const length = hashmap[hashSet[j]].length
      const tempDistance = hashmap[hashSet[j]][length - 1] + 1
      if (maxDistance < tempDistance) {
        maxDistance = tempDistance
      }
    }
  }

  return maxDistance
}

A = [1, -2, 1, 2]
longestSubArrayZero(A)

// Time and Space Complexity = Both O(n)