/*
// Definition for a Node.
class Node {
    public int val;
    public Node next;
    public Node random;

    public Node() {}

    public Node(int _val,Node _next,Node _random) {
        val = _val;
        next = _next;
        random = _random;
    }
};
*/
class Solution {
    public Node copyRandomList(Node head) {
        Map<Node, Node> map = new HashMap<>();
        Node p = head;
        while(p != null){
            Node newNode = new Node(p.val);
            map.put(p, newNode);
            p = p.next;
        }
        
        p = head;
        while(p != null){
            Node newNode = map.get(p);
            newNode.next = map.get(p.next);
            newNode.random = map.get(p.random);
            p = p.next;
        }
        return map.get(head);
    }
}