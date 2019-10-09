/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * backtracking
 */
var combinationSum = function(candidates, target) {
  let res = [];
  let current = [];
  getComb(res, current, candidates, target, 0);
  return res;
};

const getComb = function(res, current, nums, target, pos) {
  if (target < 0) return;
  else if (target == 0) res.push(current.slice());
  //copy array
  else {
    for (let i = pos; i < nums.length; i++) {
      current.push(nums[i]);
      getComb(res, current, nums, target - nums[i], i);
      current.pop();
    }
  }
};
