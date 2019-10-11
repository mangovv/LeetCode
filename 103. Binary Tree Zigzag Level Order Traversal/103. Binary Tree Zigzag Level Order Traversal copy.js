/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * ans.length represents the number of layers
 * for each layer use forloop to output nodes in current layer
 */
var zigzagLevelOrder = function(root) {
  const ans = [];
  if (root == null) return ans;

  const q = [];
  q.push(root);

  while (q.length != 0) {
    let currNum = q.length;
    let list = [];
    let level = ans.length;

    for (let i = 0; i < currNum; i++) {
      let currNode = q.shift();
      if (level % 2 == 0) list.push(currNode.val);
      else list.unshift(currNode.val);
      if (currNode.left != null) q.push(currNode.left);
      if (currNode.right != null) q.push(currNode.right);
    }
    ans.push(list);
  }
  return ans;
};
