class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> ans = new ArrayList<>();
        if(matrix.length == 0) return ans;
        
        int R = matrix.length;
        int C = matrix[0].length;
        boolean[][]seen = new boolean[R][C];
        int[]dr = {0, 1, 0, -1};
        int[]dc = {1, 0, -1, 0};
        
        int c = 0, r = 0, di = 0;
        for(int i = 0; i < R * C; i++){
            ans.add(matrix[r][c]);
            seen[r][c] = true;
            int nextr = r + dr[di];
            int nextc = c + dc[di];
            
            if(nextr >= 0 && nextr < R && nextc >= 0 && nextc < C && !seen[nextr][nextc]){
                r = nextr;
                c = nextc;
            }else{
                di = (di + 1) % 4;
                r += dr[di];
                c += dc[di];
            }
           
        }
         return ans;
    }
}