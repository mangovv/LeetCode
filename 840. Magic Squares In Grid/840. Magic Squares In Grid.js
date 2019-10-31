/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  const R = grid.length;
  const C = grid[0].length;
  let count = 0;

  for (let i = 0; i < R - 2; i++) {
    for (let j = 0; j < C - 2; j++) {
      if (isMagic(grid, i, j)) count++;
    }
  }
  return count;
};

var isMagic = function(grid, r, c) {
  const set = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let temp = grid[r + i][c + j];
      if (set.has(temp) || temp > 9 || temp < 1) return false;
      else set.add(temp);
    }
  }
  let sum1 = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];
  let sum2 = grid[r + 1][c] + grid[r + 1][c + 1] + grid[r + 1][c + 2];
  let sum3 = grid[r + 2][c] + grid[r + 2][c + 1] + grid[r + 2][c + 2];

  let sum4 = grid[r][c] + grid[r + 1][c] + grid[r + 2][c];
  let sum5 = grid[r][c + 1] + grid[r + 1][c + 1] + grid[r + 2][c + 1];
  let sum6 = grid[r][c + 2] + grid[r + 1][c + 2] + grid[r + 2][c + 2];

  let sum7 = grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2];
  let sum8 = grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c];

  return (
    sum1 == sum2 &&
    sum2 == sum3 &&
    sum3 == sum4 &&
    sum4 == sum5 &&
    sum5 == sum6 &&
    sum6 == sum7 &&
    sum7 == sum8
  );
};
