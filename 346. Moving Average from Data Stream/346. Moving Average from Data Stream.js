/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
  this.size = size;
  this.q = [];
  this.avg = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
  if (this.size > this.q.length) {
    this.q.push(val);
    let sum = 0;
    for (let num of this.q) sum += num;
    this.avg = sum / this.q.length;
  } else {
    let head = this.q.shift();
    let minus = head / this.size;
    this.q.push(val);
    let add = val / this.size;
    this.avg = this.avg - minus + add;
  }
  return this.avg;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
