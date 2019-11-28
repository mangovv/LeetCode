/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = [];
  dfs(nums, 0, [], res);
  return res;
};

var dfs = function(nums, start, cur, res) {
  if (cur.length >= 2) res.push(cur.slice());
  let set = new Set();
  for (let i = start; i < nums.length; i++) {
    if (i > 0 && nums[i] < cur[cur.length - 1]) continue;
    if (set.has(nums[i])) continue;
    set.add(nums[i]);
    cur.push(nums[i]);
    dfs(nums, i + 1, cur, res);
    cur.pop(nums[i]);
  }
};
