/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const obj = {};
  obj[0] = 1;
  let sum = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    let target = sum - k;
    if (target in obj) {
      count += obj[target];
    }

    if (sum in obj) {
      obj[sum]++;
    } else obj[sum] = 1;
  }
  return count;
};
