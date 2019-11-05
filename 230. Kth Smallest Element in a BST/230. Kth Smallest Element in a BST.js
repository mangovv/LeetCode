/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
  const res = {
    count: 0,
    result: Number.MIN_SAFE_INTEGER
  };

  traverse(root, k, res);
  return res.result;
};

function traverse(root, k, res) {
  if (root == null) return;
  traverse(root.left, k, res);
  res.count++;
  if (res.count == k) res.result = root.val;
  traverse(root.right, k, res);
}
