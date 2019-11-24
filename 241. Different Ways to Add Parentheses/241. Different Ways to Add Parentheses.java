import java.util.ArrayList;
import java.util.List;
class Solution {
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i<input.length(); i++) {
            char ch = input.charAt(i);
            if(ch == '+' || ch == '-' || ch == '*'){
                List<Integer> left = diffWaysToCompute(input.substring(0,i));
                List<Integer> right = diffWaysToCompute(input.substring(i+1,input.length()));
                for(int l : left){
                    for(int r :right){
                        res.add(helper(l, r, ch));
                    }
                }
            }
            
        }
        if (res.size() == 0) res.add(Integer.valueOf(input));
        return res; 
    }
    private int helper(int m, int n, char op){
        if(op == '+') return m + n;
        else if(op == '-') return m - n;
        else return m * n;
        
    }
}