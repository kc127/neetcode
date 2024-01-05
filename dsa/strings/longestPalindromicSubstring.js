/*

Given a string, find the longest palindromic substring. You may assume there is only one longest substring.

Examples:

Given a string: "babe" // returns"bab"
Given a string: "aefez" // returns "efe"
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] string string

[output] string

longest palindromic substring

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = [0,0];

  for (let i = 0; i < s.length; i++) {
      let oddPal = checkPal(i-1, i + 1, s);
      let evenPal = checkPal(i, i + 1, s);

      let oddPalLen = oddPal[1] - oddPal[0];
      let evenPalLen = evenPal[1] - evenPal[0];

      if (oddPalLen > evenPalLen) {
          if (longest[1] - longest[0] < oddPalLen) {
              longest = oddPal;
          }
      } else {
          if (longest[1] - longest[0] < evenPalLen) {
              longest = evenPal;
          }
      }
  }
  return s.slice(longest[0], longest[1]);
};

var checkPal = function(i, j, str) {
  while (i >= 0 && i < str.length && j >= 0 && j < str.length && str[i] === str[j]) {
      i--;
      j++;
  }
  return [i+1, j];
}