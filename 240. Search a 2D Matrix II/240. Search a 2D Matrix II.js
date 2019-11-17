/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length == 0) return false;

  let i = matrix.length - 1,
    j = 0;

  while (i >= 0 && j < matrix[0].length) {
    if (matrix[i][j] < target) j++;
    else if (matrix[i][j] > target) i--;
    else return true;
  }
  return false;
};
