import java.util.HashMap;
import java.util.Map;
class Solution {
    private class TireNode{
        String word;
        boolean isEnd;
        Map<Character, TireNode> children;
        
        public TireNode(){
            this.word = "";
            this.isEnd = false;
            this.children = new HashMap<>();
        }
    }
    
    TireNode root = new TireNode();
    String ans = "";
    int max = 0;
    
    public String longestWord(String[] words) {
        for(String str : words){
            insert(str);
        }
        dfs(root, 0);
        return ans;
    }
    
    private void insert(String str){
        TireNode cur = root;
        for(char ch : str.toCharArray()){
            TireNode child = cur.children.get(ch);
            if(child == null){
                child = new TireNode();
                cur.children.put(ch, child);
            }
            cur = child;
        }
        cur.isEnd = true;
        cur.word = str;
    }
    
    
    private void dfs(TireNode node, int height){
        if(node.children.size() == 0) return;
        for(TireNode child : node.children.values()){
            if(child.isEnd){
                if(ans.length() == 0) ans = child.word;
                if(height > max || (height == max && ans.compareTo(child.word) > 0)){
                    max = height;
                    ans = child.word;
                }
                dfs(child, height + 1);  
            } 
        }
    }
}