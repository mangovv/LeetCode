/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let end = m + n - 1;

  while (p2 >= 0) {
    //终止条件是p2遍历完 如若n2中有数字比n1最小的小 就直接加到前面 此时p1保持-1
    //js数组索引为负数时为undefined 比较时为false
    nums1[end--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }
};
