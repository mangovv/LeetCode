/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let sum = 0;
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = findMax(height, 0, i);
    let rightMax = findMax(height, i + 1, height.length);
    if (leftMax > height[i] && rightMax > height[i]) {
      let minMax = Math.min(leftMax, rightMax);
      sum += minMax - height[i];
    }
  }
  return sum;
};

const findMax = function(height, start, end) {
  let max = height[start];
  for (let i = start; i < end; i++) {
    max = Math.max(max, height[i]);
  }
  return max;
};
