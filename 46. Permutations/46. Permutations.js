/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  dfs(nums, [], res);
  return res;
};

var dfs = function(nums, cur, res) {
  if (cur.length == nums.length) res.push(cur.slice());

  for (let i = 0; i < nums.length; i++) {
    if (cur.includes(nums[i])) continue;
    cur.push(nums[i]);
    dfs(nums, cur, res);
    cur.pop(nums[i]);
  }
};
