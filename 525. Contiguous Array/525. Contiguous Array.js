/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  const map = {};
  map[0] = -1;
  let sum = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] == 1 ? 1 : -1;

    if (sum in map) max = Math.max(max, i - map[sum]);
    else map[sum] = i;
  }
  return max;
};
