/*

Given a string, return the index of the first occurrence of a target string. Return -1 if the input string does not contain the target string.

Examples:

Given a string: "hello", target: "ll" // returns 2
Given a string: "formation", target: "afor" // returns -1
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string string

[input] string target

[output] integer

index

*/

function solution(string, target) {
  if (target.length > string.length) return -1;
  let n = string.length;
  let m = target.length;


  for (let i = 0; i < n; i++) {
      if (string[i] === target[0]) {
          if (string.slice(i, i+m) === target) {
              return i;
          }
      }
  }
  return -1;
}
