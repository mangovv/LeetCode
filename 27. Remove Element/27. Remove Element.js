/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = -1,
    fast = 0;
  while (slow < nums.length && fast < nums.length) {
    if (nums[fast] == val) fast++;
    else nums[++slow] = nums[fast++];
  }
  return slow + 1;
};
