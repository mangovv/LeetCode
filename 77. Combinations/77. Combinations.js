/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const res = [];
  dfs(n, k, 1, [], res);
  return res;
};

var dfs = function(n, k, start, cur, res) {
  if (cur.length == k) res.push(cur.slice());

  for (let i = start; i <= n; i++) {
    cur.push(i);
    dfs(n, k, i + 1, cur, res);
    cur.pop(i);
  }
};
