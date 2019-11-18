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
//sol1
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

//sol2
var isSubtree = function(s, t) {
  const str1 = traverse(s);
  const str2 = traverse(t);

  return str1.indexOf(str2) != -1;
};

var traverse = function(root) {
  if (root == null) return "null";
  return (
    "#" + root.val + " " + traverse(root.left) + " " + traverse(root.right)
  );
};
