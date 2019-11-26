/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  dfs(nums, [], res, new Array(nums.length));
  return res;
};

var dfs = function(nums, cur, res, used) {
  if (cur.length == nums.length) res.push(cur.slice());

  for (let i = 0; i < nums.length; i++) {
    if (used[i] || (i > 0 && !used[i - 1] && nums[i] == nums[i - 1])) continue;
    used[i] = true;
    cur.push(nums[i]);
    dfs(nums, cur, res, used);
    used[i] = false;
    cur.pop(nums[i]);
  }
};
