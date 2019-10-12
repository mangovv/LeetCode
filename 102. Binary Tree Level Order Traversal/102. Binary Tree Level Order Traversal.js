/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Recursion（dfs)
 * Record the level of each node and directly add to the corresponding list
 */
var levelOrder = function(root) {
  let ans = [];
  if (root == null) return ans;
  traversal(root, 0, ans);
  return ans;
};

var traversal = function(node, level, ans) {
  if (ans.length <= level) {
    ans.push([]);
  }
  ans[level].push(node.val);

  if (node.left != null) traversal(node.left, level + 1, ans);
  if (node.right != null) traversal(node.right, level + 1, ans);
};
