/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < nums.length) {
      swap(nums, nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) return i + 1;
  }
  return nums.length + 1;
};

var swap = function(nums, val) {
  while (val != nums[val - 1]) {
    let i = nums[val - 1];
    nums[val - 1] = val;
    if (i > nums.length) break;
    val = i;
  }
};
