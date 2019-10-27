/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let ans = nums[0] + nums[1] + nums[nums.length - 1];

  for (let i = 0; i < nums.length - 1; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      let sum = nums[start] + nums[end] + nums[i];
      if (sum < target) start++;
      else end--;
      if (Math.abs(sum - target) < Math.abs(ans - target)) {
        ans = sum;
      }
    }
  }
  return ans;
};
