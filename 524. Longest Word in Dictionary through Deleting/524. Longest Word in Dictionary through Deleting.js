/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
var findLongestWord = function(s, d) {
  d.sort((a, b) =>
    b.length != a.length ? b.length - a.length : a.localeCompare(b)
  );

  for (let str of d) {
    if (isSubsequence(str, s)) return str;
  }
  return "";
};

var isSubsequence = function(s, t) {
  let p1 = 0,
    p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    let c1 = s.charAt(p1),
      c2 = t.charAt(p2);
    if (c1 == c2) {
      p1++;
      p2++;
    } else p2++;
  }
  return p1 == s.length;
};
