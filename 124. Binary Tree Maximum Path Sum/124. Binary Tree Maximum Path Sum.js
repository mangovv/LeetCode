/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  const res = { max: Number.MIN_SAFE_INTEGER };
  traverse(root, res);
  return res.max;
};

var traverse = function(root, res) {
  if (root == null) return 0;

  let left = Math.max(0, traverse(root.left, res));
  let right = Math.max(0, traverse(root.right, res));

  res.max = Math.max(res.max, left + right + root.val);
  return Math.max(left, right) + root.val;
};
