/**
 * @param {number[][]} grid
 * @return {number}
 */
var numDistinctIslands = function(grid) {
  const set = new Set();
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == "1") {
        let res = { path: "" };
        dfs(grid, i, j, res, "0");
        set.add(res.path);
      }
    }
  }
  return set.size;
};

var dfs = function(grid, i, j, res, d) {
  if (
    i >= 0 &&
    j >= 0 &&
    i < grid.length &&
    j < grid[0].length &&
    grid[i][j] == "1"
  ) {
    grid[i][j] = "0";
    res.path += d;
    dfs(grid, i + 1, j, res, "1");
    dfs(grid, i, j + 1, res, "2");
    dfs(grid, i - 1, j, res, "3");
    dfs(grid, i, j - 1, res, "4");
    res.path += "0";
  }
};
