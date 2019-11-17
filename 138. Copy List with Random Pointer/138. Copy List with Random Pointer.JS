/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  const map = new Map();
  return copy(head, map);
};

var copy = function(node, map) {
  if (node == null) return null;
  if (map.has(node)) return map.get(node);

  const newNode = new Node(node.val);
  map.set(node, newNode);

  newNode.next = copy(node.next, map);
  newNode.random = copy(node.random, map);

  return newNode;
};
