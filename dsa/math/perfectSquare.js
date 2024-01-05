/*

Given a number, determine if it is a perfect square.

Examples:

Given: num = 1 // returns true
Given: num = 4 // returns true
Given: num = 9 // returns true
Given: num = 10 // returns false
[execution time limit] 4 seconds (js)


*/
function solution(num) {
  if (num === 1) return true;

  for (let i = 2; i < num; i++) {
      if (i * i === num) {
          return true;
      }
  }
  return false;
}
