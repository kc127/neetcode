/*
https://leetcode.com/problems/build-an-array-with-stack-operations/description/?envType=daily-question&envId=2023-11-03
*/
/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  let stack = [];
  let ops = [];
  let j = 0;
  for (let i = 1; i <= n && j < target.length; i++) {
      stack.push(i);
      ops.push("Push");
      if (i !== target[j]) {
          stack.pop(i);
          ops.push("Pop");
      } else {
          j++;
      }
  }
  return ops;
};