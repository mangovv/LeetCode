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
var findBottomLeftValue = function(root) {
  const res = {
    max: 0,
    ans: root.val
  };
  traverse(root, 0, res);
  return res.ans;
};

var traverse = function(root, level, res) {
  if (root == null) return;
  traverse(root.left, level + 1, res);
  traverse(root.right, level + 1, res);
  if (level > res.max) {
    res.max = level;
    res.ans = root.val;
  }
};
