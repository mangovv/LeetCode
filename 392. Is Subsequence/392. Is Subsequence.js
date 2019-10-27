/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let p1 = 0,
    p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    let c1 = s.charAt(p1);
    let c2 = t.charAt(p2);
    if (c1 == c2) {
      p1++;
      p2++;
    } else p2++;
  }
  return p1 == s.length;
};
