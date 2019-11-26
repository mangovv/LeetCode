/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);
  dfs(nums, 0, [], res);
  return res;
};

var dfs = function(nums, index, cur, res) {
  res.push(cur.slice());

  for (let i = index; i < nums.length; i++) {
    cur.push(nums[i]);
    dfs(nums, i + 1, cur, res);
    cur.pop(nums[i]);
    while (i < nums.length && nums[i] == nums[i + 1]) i++;
  }
};
