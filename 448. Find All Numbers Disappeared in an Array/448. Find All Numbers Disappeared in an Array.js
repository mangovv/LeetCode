/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const ans = [];
  for (let i = 0; i < nums.length; i++) swap(nums, nums[i]);

  for (let i = 0; i < nums.length; i++) {
    if (i + 1 != nums[i]) ans.push(i + 1);
  }
  return ans;
};

var swap = function(nums, val) {
  while (val != nums[val - 1]) {
    let i = nums[val - 1];
    nums[val - 1] = val;
    val = i;
  }
};
