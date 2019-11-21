import java.util.HashMap;
import java.util.Map;
class LRUCache {
    class DLinkedNode{
        int key;
        int value;
        DLinkedNode pre;
        DLinkedNode next;
    }
    private void addNode(DLinkedNode node){
        node.next = head.next;
        node.pre = head;
        
        head.next.pre = node;
        head.next = node;   
    }
    
    private void removeNode(DLinkedNode node){
        node.pre.next = node.next;
        node.next.pre = node.pre;
    }
    
    private void moveToHead(DLinkedNode node){
        removeNode(node);
        addNode(node);
    }
    
    private DLinkedNode popTail(){
        DLinkedNode node = tail.pre;
        removeNode(node);
        return node;
    }
    
    private int count;
    private int capacity;
    private DLinkedNode head;
    private DLinkedNode tail;
    private Map<Integer, DLinkedNode> map = new HashMap<>();

    public LRUCache(int capacity) {
        this.count = 0;
        this.capacity = capacity;
        
        head = new DLinkedNode();
        tail = new DLinkedNode();
        head.pre = null;
        head.next = tail;
        tail.next = null;
        tail.pre = head;
        
    }
    
    public int get(int key) {
        DLinkedNode node = map.get(key);
        if(node != null){
            moveToHead(node);
            return node.value;
        }
        else return -1;
    }
    
    public void put(int key, int value) {
        DLinkedNode node = map.get(key);
        if(node == null){
            node = new DLinkedNode();
            node.key = key;
            node.value = value;
            
            addNode(node);
            map.put(key, node);
            
            count++;
            if(count > capacity){
                DLinkedNode LRU = popTail();
                map.remove(LRU.key);
                count--;
            }  
        }else{
            node.value = value;
            moveToHead(node); 
        } 
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */