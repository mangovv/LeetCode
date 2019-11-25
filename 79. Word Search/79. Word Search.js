/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  let n = word.length - 1;
  let index = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, index, n)) return true;
    }
  }
  return false;
};

var dfs = function(board, word, i, j, index, n) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) return false;
  let c = board[i][j];
  if (index == n && word[index] == c) return true;

  if (word[index] != c || word[index] == "#") return false;

  board[i][j] = "#";

  let res =
    dfs(board, word, i - 1, j, index + 1, n) ||
    dfs(board, word, i, j - 1, index + 1, n) ||
    dfs(board, word, i + 1, j, index + 1, n) ||
    dfs(board, word, i, j + 1, index + 1, n);
  board[i][j] = c;

  return res;
};
