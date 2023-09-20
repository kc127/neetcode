/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (haystack.length < needle.length) return -1;

  let haystackLen = haystack.length;
  let needleLen = needle.length;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
      let j = 0;
      for (j = 0; j < needle.length; j++) {
          if (haystack[i + j] !== needle[j]) {
              break;
          }
      }
      if (j === needle.length) {
          return i;
      }
  }
  return -1;
};