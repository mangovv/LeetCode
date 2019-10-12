/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 * BFS Queue
 * In each level, q.size()--> number of nodes
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> ans = new ArrayList<>();
        if(root == null) return ans;
        
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        
        while(! q.isEmpty()){
            int nums = q.size();
            List<Integer> list = new ArrayList<>();
            for(int i = 0; i < nums; i++){
                TreeNode curr = q.poll();
                list.add(curr.val);
                if(curr.left != null) q.offer(curr.left);
                if(curr.right != null) q.offer(curr.right);
            }
            ans.add(list);
        }
        return ans; 
    }
}