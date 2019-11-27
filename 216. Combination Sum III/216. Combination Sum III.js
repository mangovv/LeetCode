/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const res = [];
  dfs(k, n, 1, [], res);
  return res;
};

var dfs = function(k, remain, start, cur, res) {
  if (cur.length > k || remain < 0) return;
  if (cur.length == k && remain == 0) res.push(cur.slice());

  for (let i = start; i <= 9; i++) {
    cur.push(i);
    dfs(k, remain - i, i + 1, cur, res);
    cur.pop(i);
  }
};
