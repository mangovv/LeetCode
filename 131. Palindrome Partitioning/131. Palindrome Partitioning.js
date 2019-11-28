/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const res = [];
  dfs(s, 0, [], res);
  return res;
};

var dfs = function(s, start, cur, res) {
  if (start > s.length) return;
  if (start == s.length) res.push(cur.slice());

  for (let i = start; i < s.length; i++) {
    if (isVaild(s, start, i)) {
      cur.push(s.substring(start, i + 1));
      dfs(s, i + 1, cur, res);
      cur.pop();
    }
  }
};

var isVaild = function(s, l, r) {
  while (l < r) {
    if (s[l] != s[r]) return false;
    l++;
    r--;
  }
  return true;
};
