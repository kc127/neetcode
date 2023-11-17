/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longestSubStr = "";
  let left = 0;
  let right = 0;
  let charSet = new Set();

  while (left < s.length && right < s.length) {
      if (!charSet.has(s[right])) {
          charSet.add(s[right]);
          longestSubStr = Math.max(longestSubStr, charSet.size);
          right++;
      } else {
          charSet.delete(s[left]);
          left++;
      }
  }
  return longestSubStr;
};