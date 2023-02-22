// Problem Description
// You are given the root node of a binary tree A.You have to find the number of nodes in this tree.

// Problem Constraints
// 1 <= Number of nodes in the tree <= 105
// 0 <= Value of each node <= 107



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
    function traverseNode(nod) {
      if (nod == null) {
        return 0
      }

      return traverseNode(nod.left) + traverseNode(nod.right) + 1
    }

    return traverseNode(A)
  }
};
