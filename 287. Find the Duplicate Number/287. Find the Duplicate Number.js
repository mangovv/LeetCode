/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let fast = nums[0];
  let slow = nums[0];

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (fast != slow);

  fast = nums[0];
  while (fast != slow) {
    fast = nums[fast];
    slow = nums[slow];
  }
  return slow;
};
