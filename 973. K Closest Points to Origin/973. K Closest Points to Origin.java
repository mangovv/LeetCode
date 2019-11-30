import java.util.Comparator;
import java.util.PriorityQueue;
class Solution {
    class DisComparator implements Comparator<int[]> {
        public int compare(int[] p1, int[] p2) {
          return (p1[0] * p1[0] + p1[1] * p1[1]) - (p2[0] * p2[0] + p2[1] * p2[1]);
      }
        
    }
  
      public int[][] kClosest(int[][] points, int K) {
          PriorityQueue<int[]> pq=new PriorityQueue<>(new DisComparator());
          int[][] res = new int[K][2];
          for(int[] p : points) pq.add(p);
          for(int i = 0; i < K; i++) res[i] = pq.poll();
          
          return res;
      }
  }
                  