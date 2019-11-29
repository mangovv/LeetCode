/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const res = [0];
  dfs(n, 0, res);
  return res;
};

var dfs = function(n, cur, res) {
  if (res.length == 1 << n) return;

  for (let i = 0; i < n; i++) {
    let mask = 1 << i;
    let el = cur ^ mask;
    if (!res.includes(el)) {
      res.push(el);
      dfs(n, el, res);
    }
  }
};
