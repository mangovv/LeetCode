/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  const res = [];
  dfs(candidates, target, 0, [], res, new Array(candidates.length));
  return res;
};
var dfs = function(nums, remain, index, cur, res, used) {
  if (remain < 0) return;
  if (remain == 0) res.push(cur.slice());

  for (let i = index; i < nums.length; i++) {
    if (i > 0 && !used[i - 1] && nums[i - 1] == nums[i]) continue;
    used[i] = true;
    cur.push(nums[i]);
    dfs(nums, remain - nums[i], i + 1, cur, res, used);
    used[i] = false;
    cur.pop(nums[i]);
  }
};
