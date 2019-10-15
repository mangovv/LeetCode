/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxDis = 0;

  for (let i = 0; i < nums.length; i++) {
    if (maxDis < i) return false;

    maxDis = Math.max(maxDis, i + nums[i]);

    if (maxDis >= nums.length - 1) return true;
  }
};
