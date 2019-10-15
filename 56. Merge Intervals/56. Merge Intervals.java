class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals,new Comparator<int[]>() {
            @Override
            public int compare(int[] x, int[] y) {
                return x[0] < y[0] ? -1 : x[0] == y[0] ? 0 : 1;
            }
        });
        
        int i = 0, j = 0;
        List<int[]> ans = new ArrayList<>();
        
        while(i < intervals.length){
            int end = intervals[j][1];
            while(j < intervals.length && intervals[j][0] <= end){
                end = Math.max(end, intervals[j][1]);
                j++;
            }
            int[] interval = {intervals[i][0], end};
            ans.add(interval);
            i = j;
        }
        return ans.toArray(new int[ans.size()][]);
    }
}