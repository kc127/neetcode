/*
'''
❓ PROMPT
Given a string that contains exactly 1 pair of parentheses, compute recursively a new string made of only the parentheses and their contents, so "xyz(abc)123" yields "(abc)".

Example(s)
parenBit("xyz(abc)123") == "(abc)"
parenBit("x(hello)") == "(hello)"
parenBit("(xy)1") == "(xy)"
parenBit("") == ""


🔎 EXPLORE
List your assumptions & discoveries:
1. empty string or null => yes, return empty string
2. no invalid input e.g parenBit("(xyz(xya))") == "" NOT a valid input
3. input string is case insensitive e.g "xyz(XYz)", doesn't matter


Insightful & revealing test cases:


🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Iterative Approach: String Traversal using a loop
Time: O()
Space: O()

Traverse the string
- if curr char is a opening bracket, store the index
  => keep moving forward to find a closing bracket, store the index
  => when found, return the slice of the input string from open to close index


📆 PLAN
🛠️ IMPLEMENT
🧪 VERIFY

*/
function parenBitIterative(word) {
  if (word.length < 2) return "";

  let openBracketIdx = 0;
  let closeBracketIdx = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === '(') {
      openBracketIdx = i;
    }
    if (word[i] === ')' && openBracketIdx < i) {
      closeBracketIdx = i;
      break;
    }
  }
  return word.slice(openBracketIdx, closeBracketIdx + 1);
}

function parenBitRecursive(word, i = 0, open = 0, close = 0) {
  if (word < 2) return "";
  if (i >= word.length) {
    return word.slice(open, close + 1);
  }
  if (word[i] === '(') {
    open = i;
  }
  if (word[i] === ')' && open < i) {
    close = i;
  }
  return parenBitRecursive(word, i + 1, open, close)
}

function parenBitRecursiveBetter(word, l = 0, r = word.length - 1) {
  if (word[l] === '(' && word[r] === ')') {
    return word.slice(l, r + 1);
  }
  l = word[l] === '(' ? l : l + 1;
  r = word[r] === ')' ? r : r - 1;

  return parenBitRecursiveBetter(word, l, r);
}

// Recommended: only slice when the desired substring is identified.
function parenBit(word) {
  function helper(l, r) {
    if (word[l] === '(' && word[r] === ')') {
      return word.slice(l, r + 1);
    }
    return helper(
      word[l] === '(' ? l : l + 1,
      word[r] === ')' ? r : r - 1,
    );
  }

  return helper(0, word.length - 1);
}

// console.log(parenBit("xyz(abc)123") == "(abc)")
// console.log(parenBit("x(hello)") == "(hello)")
// console.log(parenBit("(xy)1") == "(xy)")
// console.log(parenBit("") == "")

// console.log(parenBit("xyz(abc)123") === "(abc)")
// console.log(parenBit("x(hello)") === "(hello)")
// console.log(parenBit("(xy)1") === "(xy)")
// console.log(parenBit("not really (possible)") === "(possible)")
// console.log(parenBit("(abc)") === "(abc)")
// console.log(parenBit("(abc)xyz") === "(abc)")
// console.log(parenBit("(abc)x") === "(abc)")
// console.log(parenBit("(x)") === "(x)")
// console.log(parenBit("()") === "()")
// console.log(parenBit("res (ipsa) loquitor") === "(ipsa)")
// console.log(parenBit("hello(not really)there") === "(not really)")
// console.log(parenBit("ab(ab)ab") === "(ab)")

console.log(parenBitRecursiveBetter("xyz(abc)123") == "(abc)")
console.log(parenBitRecursiveBetter("x(hello)") == "(hello)")
console.log(parenBitRecursiveBetter("(xy)1") == "(xy)")


console.log(parenBitRecursiveBetter("xyz(abc)123") === "(abc)")
console.log(parenBitRecursiveBetter("x(hello)") === "(hello)")
console.log(parenBitRecursiveBetter("(xy)1") === "(xy)")
console.log(parenBitRecursiveBetter("not really (possible)") === "(possible)")
console.log(parenBitRecursiveBetter("(abc)") === "(abc)")
console.log(parenBitRecursiveBetter("(abc)xyz") === "(abc)")
console.log(parenBitRecursiveBetter("(abc)x") === "(abc)")
console.log(parenBitRecursiveBetter("(x)") === "(x)")
console.log(parenBitRecursiveBetter("()") === "()")
console.log(parenBitRecursiveBetter("res (ipsa) loquitor") === "(ipsa)")
console.log(parenBitRecursiveBetter("hello(not really)there") === "(not really)")
console.log(parenBitRecursiveBetter("ab(ab)ab") === "(ab)")