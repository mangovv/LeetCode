/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0,
    j = 0;
  const set = new Set();
  let ans = 0;

  while (i < s.length && j < s.length) {
    if (set.has(s.charAt(j))) set.delete(s.charAt(i++));
    else {
      set.add(s.charAt(j++));
      ans = Math.max(ans, j - i);
    }
  }
  return ans;
};
