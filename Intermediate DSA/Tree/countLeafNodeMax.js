// Problem Description
// Given the root of a tree A with each node having a certain value, find the count of nodes with more value than all its ancestor.

// Problem Constraints
// 1 <= Number of Nodes <= 200000
// 1 <= Value of Nodes <= 2000000000

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = {
  //param A : root node of tree
  //return an integer
  solve: function (A) {
    function traverseNode(nod, rootData, count) {
      if (nod == null) {
        return count
      }

      if (nod.data > rootData) {
        count++
        rootData = nod.data
      }

      count = traverseNode(nod.left, rootData, count)
      count = traverseNode(nod.right, rootData, count)
      return count
    }

    return traverseNode(A, null, 0)
  }
};