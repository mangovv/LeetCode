/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const set = new Set(["a", "e", "i", "o", "u"]);

  let l = 0,
    r = s.length - 1;
  s = s.split("");

  while (l < r) {
    if (set.has(s[l].toLowerCase()) && set.has(s[r].toLowerCase())) {
      let temp = s[r];
      s[r] = s[l];
      s[l] = temp;
      l++;
      r--;
    } else if (!set.has(s[l].toLowerCase())) l++;
    else r--;
  }
  return s.join("");
};
