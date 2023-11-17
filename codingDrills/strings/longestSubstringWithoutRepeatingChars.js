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

// official solution

function lengthOfLongestSubstring(s) {
    const seen = {};
    let start = 0;
    let longest = 0;
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
      if (char in seen) {
        start = Math.max(start, seen[char] + 1);
      }
      seen[char] = end;
      longest = Math.max(longest, end - start + 1);
    }
    return longest;
  }