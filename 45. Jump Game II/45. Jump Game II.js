/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let step = 0;
  let maxDes = 0;
  let end = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    maxDes = Math.max(i + nums[i], maxDes);
    if (i == end) {
      end = maxDes;
      step++;
    }
  }
  return step;
};
