/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */

var BSTIterator = function(root) {
  this.stack = [];
  traverse(root, this.stack);
};
var traverse = function(root, stack) {
  if (root == null) return;
  stack.unshift(root);
  traverse(root.left, stack);
};
/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  let min = this.stack.shift();
  if (min.right) {
    traverse(min.right, this.stack);
  }
  return min.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
