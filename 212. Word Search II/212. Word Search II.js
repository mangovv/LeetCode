/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
class TrieNode {
  constructor() {
    this.children = new Map();
    this.word = null;
  }
}
var findWords = function(board, words) {
  const root = buildTrie(words);

  const res = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, i, j, root, res);
    }
  }
  return res;
};

var dfs = function(board, i, j, p, res) {
  let c = board[i][j];
  if (!p.children.has(c) || c == "#") return;

  p = p.children.get(c);
  if (p.word != null) {
    res.push(p.word);
    p.word = null;
    if (p.children.size == 0) return;
  }

  board[i][j] = "#";
  if (i > 0) dfs(board, i - 1, j, p, res);
  if (j > 0) dfs(board, i, j - 1, p, res);
  if (i < board.length - 1) dfs(board, i + 1, j, p, res);
  if (j < board[0].length - 1) dfs(board, i, j + 1, p, res);

  board[i][j] = c;
};

var buildTrie = function(words) {
  const root = new TrieNode();
  words.forEach(str => {
    let cur = root;
    for (let c of str) {
      if (!cur.children.has(c)) {
        cur.children.set(c, new TrieNode());
      }
      cur = cur.children.get(c);
    }
    cur.word = str;
  });
  return root;
};
