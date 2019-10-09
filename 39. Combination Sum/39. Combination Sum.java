class Solution {
    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        
        List<List<Integer>> res = new ArrayList<>();
        getComb(res,new ArrayList<>(),target,0,candidates);
        return res;
    }
    
    private void getComb(List<List<Integer>> res, List<Integer> current, int target, int pos, int[] candidates ){
        System.out.println(target);
        if(target == 0) res.add(new ArrayList<>(current));   //copy arrayList
        else if(target < 0) return;
        else{
            for(int i = pos; i < candidates.length; i++){
                current.add(candidates[i]);
                getComb(res,current,target - candidates[i],i,candidates);
                current.remove(current.size() - 1);
            }
            
        }
    }
    
}