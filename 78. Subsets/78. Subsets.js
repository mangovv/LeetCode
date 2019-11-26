/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  dfs(nums, 0, [], res);
  return res;
};

var dfs = function(nums, index, cur, res) {
  let ans = cur.slice();
  res.push(ans);

  for (let i = index; i < nums.length; i++) {
    cur.push(nums[i]);
    dfs(nums, i + 1, cur, res);
    cur.pop(nums[i]);
  }
};
