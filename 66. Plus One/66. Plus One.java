class Solution {
    public int[] plusOne(int[] digits) {
        int n = digits.length;
        digits[n - 1] += 1;
        
        for(int i = n - 1; i >= 0; i--){
            if(digits[i] == 10){
                digits[i] = 0;
                if(i == 0){
                    int[]ans = new int[n + 1];
                    ans[0] = 1;
                    digits = ans;
                }else digits[i - 1] += 1;
                
            }else break;
        }
        return digits;
    }
}