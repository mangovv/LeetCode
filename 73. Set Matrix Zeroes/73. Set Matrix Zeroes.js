/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const R = matrix.length;
  const C = matrix[0].length;
  let col0 = 1;

  for (let i = 0; i < R; i++) {
    //Only the original first column contains 0, the fist column will become 0 later.
    if (matrix[i][0] == 0) col0 = 0;
    for (let j = 1; j < C; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = R - 1; i >= 0; i--) {
    for (let j = C - 1; j >= 1; j--)
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    if (col0 == 0) matrix[i][0] = 0;
  }
};
