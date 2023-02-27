// Problem Description
// You are given the root node of a binary tree A. You have to find the height of the given tree.
// A binary tree's height is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Problem Constraints
// 1 <= Number of nodes in the tree <= 105
// 0 <= Value of each node <= 109

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
	solve : function(A) {
        function treeHeight(node) {
            if (node == null) {
                return 0
            }

            const leftHeight = treeHeight(node.left) + 1
            const rightHeight = treeHeight(node.right) + 1
            if (leftHeight >= rightHeight) {
                return leftHeight
            } else {
                return rightHeight
            }
        }
        return treeHeight(A)
	}
};
