/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let res = root.val;
  let min = Number.MAX_SAFE_INTEGER;
  function search(root) {
    if (root == null) return;
    if (Math.abs(root.val - target) < min) {
      min = Math.abs(root.val - target);
      res = root.val;
    }

    if (target < root.val) root = root.left;
    else root = root.right;
    search(root);
  }
  search(root);
  return res;
};
