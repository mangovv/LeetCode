/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (root == null) return;
  flatten(root.left);
  flatten(root.right);

  let temp = root.right;
  if (root.left != null) {
    root.right = root.left;
    root.left = null;
  }

  if (temp != null && temp != root.right) {
    while (root.right != null) {
      root = root.right;
    }
    root.right = temp;
  }
};
