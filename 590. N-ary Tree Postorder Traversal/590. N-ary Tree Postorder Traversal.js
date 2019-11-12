/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const res = [];
  traverse(root, res);
  return res;
};

var traverse = function(root, res) {
  if (root == null) return;

  for (let child of root.children) {
    traverse(child, res);
  }
  res.push(root.val);
};
