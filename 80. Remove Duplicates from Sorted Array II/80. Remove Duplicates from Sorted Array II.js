/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 0,
    fast = 1;
  let count = 1;
  while (slow < nums.length && fast < nums.length) {
    if (nums[slow] == nums[fast]) {
      if (++count <= 2) nums[++slow] = nums[fast++];
      else fast++;
    } else {
      nums[++slow] = nums[fast++];
      count = 1;
    }
  }
  return slow + 1;
};
