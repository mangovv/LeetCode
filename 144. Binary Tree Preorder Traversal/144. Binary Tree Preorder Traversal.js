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
var preorderTraversal = function(root) {
  const res = [];
  function traverse(root) {
    if (root == null) return;
    res.push(root.val);
    traverse(root.left);
    traverse(root.right);
  }
  traverse(root);
  return res;
};
