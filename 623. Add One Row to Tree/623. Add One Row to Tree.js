/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
  if (d == 1) {
    const node = new TreeNode(v);
    node.left = root;
    root = node;
    return root;
  }
  traverse(root, 1, v, d);
  return root;
};

var traverse = function(root, level, v, d) {
  if (level >= d) return;
  if (root == null) return;
  if (level == d - 1) {
    const lNode = new TreeNode(v),
      rNode = new TreeNode(v);
    (lNode.left = root.left), (rNode.right = root.right);
    (root.left = lNode), (root.right = rNode);
  }
  traverse(root.left, level + 1, v, d);
  traverse(root.right, level + 1, v, d);
};
