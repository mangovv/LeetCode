class Solution {
    public int maxSubArray(int[] nums) {
        int max = nums[0];
        int temp = nums[0];
        int i = 1;
        
        while(i < nums.length){
            if(temp < 0){
                temp = nums[i++];
            }else{
                temp += nums[i++];  
            }       
            max = Math.max(temp,max);
        } 
        return max;
    }
}