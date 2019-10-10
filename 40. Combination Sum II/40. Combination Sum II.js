/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let res = [];
  getComb2(candidates, target, res, [], 0);
  return res;
};

const getComb2 = function(nums, target, res, current, pos) {
  if (target < 0) return;
  else if (target == 0) res.push(current.slice());
  else {
    for (let i = pos; i < nums.length; i++) {
      if (i > pos && nums[i] == nums[i - 1]) continue; //skip duplicates
      current.push(nums[i]);
      getComb2(nums, target - nums[i], res, current, i + 1);
      current.pop();
    }
  }
};
