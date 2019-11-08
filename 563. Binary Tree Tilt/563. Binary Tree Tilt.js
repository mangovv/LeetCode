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
var findTilt = function(root) {
  const res = { tilt: 0 };
  traverse(root, res);
  return res.tilt;
};

var traverse = function(root, res) {
  if (root == null) return 0;
  let left = traverse(root.left, res);
  let right = traverse(root.right, res);
  res.tilt += Math.abs(left - right);
  return left + right + root.val;
};
