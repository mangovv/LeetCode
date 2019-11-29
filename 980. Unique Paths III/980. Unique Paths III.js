/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
  let num = 0;
  const res = { sr: 0, sc: 0, er: 0, ec: 0, count: 0 };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != -1) num++;
      if (grid[i][j] == 1) {
        res.sr = i;
        res.sc = j;
      }
      if (grid[i][j] == 2) {
        res.er = i;
        res.ec = j;
      }
    }
  }
  dfs(grid, res.sr, res.sc, num, res);
  return res.count;
};

var dfs = function(grid, i, j, num, res) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length) return;
  num--;
  if (num < 0) return;
  if (num == 0 && i == res.er && j == res.ec) {
    res.count++;
    return;
  }
  if (grid[i][j] == 0 || grid[i][j] == 1) {
    grid[i][j] = 3;
    dfs(grid, i + 1, j, num, res);
    dfs(grid, i, j + 1, num, res);
    dfs(grid, i - 1, j, num, res);
    dfs(grid, i, j - 1, num, res);
    grid[i][j] = 0;
  }
};
