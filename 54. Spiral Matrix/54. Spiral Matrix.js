/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const ans = [];
  if (matrix.length == 0) return ans;

  let r1 = 0,
    r2 = matrix.length - 1;
  let c1 = 0,
    c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    for (let j = c1; j <= c2; j++) ans.push(matrix[r1][j]);
    for (let i = r1 + 1; i <= r2; i++) ans.push(matrix[i][c2]);
    if (r1 == r2 || c1 == c2) break;
    for (j = c2 - 1; j > c1; j--) ans.push(matrix[r2][j]);
    for (i = r2; i > r1; i--) ans.push(matrix[i][c1]);
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return ans;
};
