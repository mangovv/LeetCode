/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 * use another queue to store layer information of each node
 */
class Solution {
    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if (root == null) return ans;
             
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
             
        Queue<Integer> level = new LinkedList<>();
        level.offer(0);
 
        while(!q.isEmpty()){
            int currLevel = level.poll();
            
            if(ans.size() <= currLevel) ans.add(new ArrayList<>());
            TreeNode currentNode = q.poll();
            
            if(currLevel % 2 == 0){
               ans.get(currLevel).add(currentNode.val);
            }else{
               ans.get(currLevel).add(0,currentNode.val); 
            }
            
            if(currentNode.left != null){
                q.add(currentNode.left);
                level.add(currLevel + 1);
            }
            if(currentNode.right != null){
                q.add(currentNode.right);
                level.add(currLevel + 1);
            }
        }
        return ans;
    }
}