class Solution {
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> res = new ArrayList<>();
        dfs(nums, new ArrayList<>(), res, new boolean[nums.length]);
        return res;
    }
    private void dfs(int[] nums, List<Integer> cur, List<List<Integer>> res, boolean[] used){
        if(nums.length == cur.size()) res.add(new ArrayList<>(cur));
        
        for(int i = 0; i < nums.length; i++){
            if(used[i] || i > 0 && nums[i] == nums[i-1] && !used[i - 1]) continue;
            used[i] = true; 
            cur.add(nums[i]);
            dfs(nums, cur, res, used);
            used[i] = false; 
            cur.remove(cur.size() - 1);
        }
    }
}