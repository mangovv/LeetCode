/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let max = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") max = Math.max(max, dfs(grid, i, j));
    }
  }
  return max;
};

var dfs = function(grid, i, j) {
  if (
    i >= 0 &&
    j >= 0 &&
    i < grid.length &&
    j < grid[0].length &&
    grid[i][j] == "1"
  ) {
    grid[i][j] = "0";

    return (
      1 +
      dfs(grid, i + 1, j) +
      dfs(grid, i, j + 1) +
      dfs(grid, i - 1, j) +
      dfs(grid, i, j - 1)
    );
  }
  return 0;
};
