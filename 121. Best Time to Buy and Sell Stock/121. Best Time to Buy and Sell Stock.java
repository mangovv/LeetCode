class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length == 0) return 0;
        
        int min = prices[0], max = 0, sum = 0;
        for(int i = 1; i < prices.length; i++){
            sum = prices[i] - min;
            min = Math.min(min, prices[i]);
            max = Math.max(max, sum);
        }
        return max;
    }
}