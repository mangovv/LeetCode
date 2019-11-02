/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length) return false;

  const map1 = new Array(26).fill(0),
    map2 = new Array(26).fill(0);
  const code = "a".charCodeAt();
  for (let i = 0; i < s1.length; i++) {
    map1[s1[i].charCodeAt() - code]++;
    map2[s2[i].charCodeAt() - code]++;
  }

  let size = s1.length;
  for (let i = 0; i < s2.length - size; i++) {
    if (isMatch(map1, map2)) return true;
    map2[s2[i + size].charCodeAt() - code]++;
    map2[s2[i].charCodeAt() - code]--;
  }
  return isMatch(map1, map2);
};

var isMatch = function(map1, map2) {
  for (let i = 0; i < map1.length; i++) {
    if (map1[i] != map2[i]) return false;
  }
  return true;
};
