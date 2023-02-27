// Problem Description
// Given the root of a binary tree A. Return the sum of all the nodes of the binary tree.

// Problem Constraints
// 1 <= Number of nodes in A <= 104
// 1 <= value of each node <= 104

// Definition for a  binary tree node
//    function TreeNode(data){
//      this.data = data
//      this.left = null
//      this.right = null
//    }

module.exports = { 
 //param A : root node of tree
 //return an integer
	solve : function(A){
        function sumOfNodes(node, sum) {
            if (node == null) {
                return sum
            }

            sum += node.data
            sum = sumOfNodes(node.left, sum)
            sum = sumOfNodes(node.right, sum)
            return sum
        }

        return sumOfNodes(A, 0)
	}
};
