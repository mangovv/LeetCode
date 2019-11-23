import java.util.LinkedList;
import java.util.Queue;
class MovingAverage {
    Queue<Integer> q;
    int size;
    double avg;
    /** Initialize your data structure here. */
    public MovingAverage(int size) {
        this.size = size;
        this.q = new LinkedList<>();
    }
    
    public double next(int val) {
        if(this.size > q.size()){
            q.offer(val);
            int sum = 0;
            for(int num : q){
                sum += num;
            }
            avg = (double) sum / q.size();
        }else{
            int head = q.poll();
            double minus = (double) head /this.size;
            q.offer(val);
            double add = (double) val / this.size;
            avg = avg - minus + add;
        }
        return avg;
    }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * MovingAverage obj = new MovingAverage(size);
 * double param_1 = obj.next(val);
 */