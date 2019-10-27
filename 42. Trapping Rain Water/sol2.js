/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let left = 0,
    right = height.length - 1;
  let lMax = 0,
    rMax = 0;
  let ans = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] <= lMax) ans += lMax - height[left];
      else lMax = height[left];
      left++;
    } else {
      if (height[right] <= rMax) ans += rMax - height[right];
      else rMax = height[right];
      right--;
    }
  }
  return ans;
};
