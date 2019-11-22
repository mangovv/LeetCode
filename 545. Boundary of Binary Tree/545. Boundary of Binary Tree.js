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
var boundaryOfBinaryTree = function(root) {
  if (root == null) return [];

  const res = [];
  res.push(root.val);
  if (!root.left && !root.right) return res;

  getLeftSide(root.left, res);
  getBottom(root, res);
  const right = [];
  getRightSide(root.right, right);

  return [...res, ...right.reverse()];
};

var getLeftSide = function(root, res) {
  if (root == null) return;
  if (root.left || root.right) res.push(root.val);
  if (root.left) getLeftSide(root.left, res);
  else getLeftSide(root.right, res);
};

var getBottom = function(root, res) {
  if (root == null) return;
  if (!root.left && !root.right) res.push(root.val);
  getBottom(root.left, res);
  getBottom(root.right, res);
};

var getRightSide = function(root, res) {
  if (root == null) return;
  if (root.left || root.right) res.push(root.val);
  if (root.right) getRightSide(root.right, res);
  else getRightSide(root.left, res);
};
