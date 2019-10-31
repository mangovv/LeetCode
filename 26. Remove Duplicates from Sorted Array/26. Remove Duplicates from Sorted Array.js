/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let fast = 0,
    slow = 0;
  while (slow < nums.length && fast < nums.length) {
    if (nums[slow] == nums[fast]) fast++;
    else nums[++slow] = nums[fast++];
  }
  return slow + 1;
};
