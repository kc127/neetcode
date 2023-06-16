/**
 * leetcode easy #1614
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let stack = [];
  let max = -Infinity;

  for (let i = 0; i < s.length; i++) {
      let curr = s[i];
      if (curr === '(') {
          stack.push(curr);
      }
      if (curr === ')') {
          stack.pop();
      }
      max = Math.max(max, stack.length);
  }
  return max;
};