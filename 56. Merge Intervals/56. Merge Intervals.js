/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  ans = [];

  intervals.sort((a, b) => a[0] - b[0]);
  let i = 0,
    j = 0;
  while (i < intervals.length) {
    let end = intervals[j][1];
    while (j < intervals.length && intervals[j][0] <= end) {
      end = Math.max(end, intervals[j][1]);
      j++;
    }
    ans.push([intervals[i][0], end]);
    i = j;
  }
  return ans;
};
