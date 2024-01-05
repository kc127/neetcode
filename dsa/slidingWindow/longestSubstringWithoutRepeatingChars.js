/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest = 0;
  let uniqueChars = new Set();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
      while (uniqueChars.has(s[right])) {
          uniqueChars.delete(s[left]);
          left++;
      }
      uniqueChars.add(s[right]);
      longest = Math.max(longest, uniqueChars.size);
  }
  return longest;
};



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;
  let longest = 0;
  let uniqueChars = new Set();
  let left = 0;
  let right = 0;
  for (right = 0; right < s.length; right++) {
      let char = s[right];
      if (!uniqueChars.has(char)) {
          uniqueChars.add(char);
      } else {
          longest = Math.max(longest, right - left);
          uniqueChars.delete(s[left]);
          left++;
          right--;
      }
  }
  longest = Math.max(longest, right - left);
  return longest === 0 ? uniqueChars.size : longest;
};