/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const set = new Set();

  for (num of nums) {
    set.add(num);
  }

  for (let i = 0; i < nums.length + 1; i++) {
    if (!set.has(i)) return i;
  }
};
