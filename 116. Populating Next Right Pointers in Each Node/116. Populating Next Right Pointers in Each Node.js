/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  const dummy = new Node(0);
  let p = dummy;
  let r = root;

  while (r != null && r.left != null) {
    p.next = r.left;
    p = p.next;
    p.next = r.right;
    p = p.next;

    r = r.next;
    if (r == null) {
      r = dummy.next;
      p = dummy;
      dummy.next = null;
    }
  }
  return root;
};
