/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false;
  }
  let counter = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
      counter[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < t.length; i++) {
      counter[t.charCodeAt(i) - 97]--;
  }

  for (let count of counter) {
      if (count !== 0) {
          return false;
      }
  }
  return true;
};