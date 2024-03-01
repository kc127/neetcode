/*
678 Valid Parenthesis String

Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

The following rules define a valid string:

Any left parenthesis '(' must have a corresponding right parenthesis ')'.
Any right parenthesis ')' must have a corresponding left parenthesis '('.
Left parenthesis '(' must go before the corresponding right parenthesis ')'.
'*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string

*/

var checkValidString = function(s) {
  let leftBalance = 0;
  for (let ch of s) {
      if (ch === "(" || ch === "*") {
          leftBalance++;
      } else {
          leftBalance--;
      }
      if (leftBalance < 0) return false;
  }
  if (leftBalance === 0) return true;

  let rightBalance = 0;
  for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] === ")" || s[i] === "*") {
          rightBalance++;
      } else {
          rightBalance--;
      }
      if (rightBalance < 0) return false;
  }

  return true;
};
