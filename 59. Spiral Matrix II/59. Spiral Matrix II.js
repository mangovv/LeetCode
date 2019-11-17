/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }
  let count = 0,
    num = 1,
    N = n * n;
  while (num <= N) {
    let i = count,
      j = count;
    for (; j < n; j++) res[i][j] = num++;
    j--, i++;
    for (; i < n; i++) res[i][j] = num++;
    j--, i--;
    for (; j >= count; j--) res[i][j] = num++;
    j++, i--;
    for (; i > count; i--) res[i][j] = num++;
    count++, (n = n - 1);
  }
  return res;
};

/**
 * @param {number} n
 * @raeturn {number[][]}
 */
var generateMatrix = function(n) {
  const res = new Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = new Array(n);
  }

  let num = 1,
    N = n * n;
  const direct = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let r = 0,
    c = -1,
    d = 0;

  while (num <= N) {
    let currR = r + direct[d][0];
    let currC = c + direct[d][1];

    if (
      currR >= 0 &&
      currR < n &&
      currC >= 0 &&
      currC < n &&
      typeof res[currR][currC] == "undefined"
    ) {
      r = currR;
      c = currC;
      res[r][c] = num++;
    } else d = (d + 1) % 4;
  }
  return res;
};
