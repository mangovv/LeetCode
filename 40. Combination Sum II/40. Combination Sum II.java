class Solution {
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> res = new ArrayList<>();
        List<Integer> list =  new ArrayList<>();
        getComb2(candidates,target, res, list, 0);
        return res;       
    }
    
    private void getComb2(int[]nums, int target, List<List<Integer>> res, List<Integer> current, int pos){
        if(target < 0) return;
        else if(target == 0) res.add(new ArrayList<>(current));
        else{
            for(int i = pos; i < nums.length; i++){      
                current.add(nums[i]);
                getComb2(nums,target - nums[i], res, current, i + 1);
                current.remove(current.size() - 1);
                while(i < nums.length - 1 && nums[i] == nums[i + 1]){
                        i++;
                }
            }
        }        
    }
}