import java.util.*;
class Solution {
    private class TrieNode{
        Map<Character, TrieNode> children = new HashMap<>();
        String word;
    }
    private TrieNode root = new TrieNode();
    private List<String> res = new ArrayList<>();
    
    public List<String> findWords(char[][] board, String[] words) {
        for(String word : words){
            buildTrie(word);
        }
        for(int i = 0; i < board.length; i++){
            for(int j = 0; j < board[0].length; j++){
                backtracking(board, i , j, root);
            }
        }
        return res;
    }
    
    private void backtracking(char[][] board, int i, int j, TrieNode p){
        char c = board[i][j];
        p = p.children.get(c);
        if(c == '#' || p == null) return;
        if(p.word != null) {
            res.add(p.word);
            p.word = null;
            if(p.children.isEmpty()) return;
        };
        
        board[i][j] = '#';
        if(i > 0) backtracking(board, i - 1, j ,p);
        if(j > 0) backtracking(board, i, j -1, p);
        if(i < board.length - 1) backtracking(board, i + 1, j, p);
        if(j < board[0].length - 1) backtracking(board, i, j + 1, p);
        board[i][j] = c;
        
    }
    
    private void buildTrie(String str){
        TrieNode cur = root;
        for(char ch : str.toCharArray()){
            if(!cur.children.containsKey(ch)){
                cur.children.put(ch, new TrieNode());
            }
            cur = cur.children.get(ch);
        }
        cur.word = str;
        
    }
}