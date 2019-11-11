/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  const res = [];
  traverse(root, res);
  return res;
};

var traverse = function(root, res) {
  if (root == null) return;
  traverse(root.left, res);
  traverse(root.right, res);
  res.push(root.val);
};
