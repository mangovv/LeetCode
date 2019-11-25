/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const res = [];
  dfs(s, 0, "", 0, res);
  return res;
};

var dfs = function(s, index, str, count, res) {
  if (count > 4) return;
  if (count == 4 && index == s.length) res.push(str);

  for (let i = 1; i < 4; i++) {
    let sub = s.substring(index, index + i);
    if (!isVaild(sub)) continue;
    dfs(s, index + i, str + sub + (count == 3 ? "" : "."), count + 1, res);
  }
};

var isVaild = function(str) {
  //console.log(parseInt(str));
  if (str[0] == "0" && str.length > 1) return false;
  if (str.length == 3 && parseInt(str) > 255) return false;
  return true;
};
