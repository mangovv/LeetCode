/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (s == null) return t == null;
  return equal(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

var equal = function(x, y) {
  if (x == null || y == null) return x == null && y == null;

  if (x.val == y.val) {
    return equal(x.left, y.left) && equal(x.right, y.right);
  } else return false;
};
