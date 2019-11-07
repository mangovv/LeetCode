/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
  let sum = 0;
  function trans(root) {
    if (root === null) return;
    trans(root.right);
    root.val += sum;
    sum = root.val;
    trans(root.left);
  }
  trans(root);
  return root;
};
