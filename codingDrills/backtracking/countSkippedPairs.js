/*
'''
❓ PROMPT
We'll say that a "skipped pair" in a string is two instances of a char separated by a char. So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 skipped pairs -- 2 for A and 1 for x. Recursively compute the number of skipped pairs in the given string.

Example(s)
countSkippedPairs("axa") == 1
countSkippedPairs("axax") == 2
countSkippedPairs("aaa") == 1
countSkippedPairs("aAA") == 1
countSkippedPairs("a") == 0
countSkippedPairs(" ") == 0
countSkippedPairs("axbx") == 1


🔎 EXPLORE
List your assumptions & discoveries:
 1. case insensitive
 2. input can be empty or just 1 char long

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: String Traversal
Time: O(n)
Space: O(1)

"axa"

1. check if input length is at least 3 or more
1.1 Convert the input into lower case
2. Traverse the string
   str[i], str[i+1], str[i+2]
   check if str[i] === str[i+2] and str[i] !== str[i+1]
   if yes, increase number of pairs by 1
   if no, move forward


📆 PLAN
🛠️ IMPLEMENT
🧪 VERIFY
*/
function countSkippedPairsIterative(word) {
  if (word.length < 3) return 0;
  word = word.toLowerCase();
  let pairs = 0;
  for (let i = 0; i < word.length - 2; i++) {
    if (word[i] === word[i+2]) {
      pairs++;
    }
  }
  return pairs;
}

function countSkippedPairsRecursive(word) {
  // base case: when word length is less than 3
  if (word.length < 3) return 0;
  word = word.toLowerCase();
  // recursive case: when char at i and i + 2 are equal
  if (word[0] === word[2]) {
    return 1 + countSkippedPairsRecursive(word.slice(1));
  } else {
    return countSkippedPairsRecursive(word.slice(1));
  }
}

// console.log(countSkippedPairsIterative("axa") == 1)
// console.log(countSkippedPairsIterative("axax") == 2)
// console.log(countSkippedPairsIterative("aaa") == 1)
// console.log(countSkippedPairsIterative("aAA") == 1)
// console.log(countSkippedPairsIterative("a") == 0)
// console.log(countSkippedPairsIterative(" ") == 0)
// console.log(countSkippedPairsIterative("axbx") == 1)

console.log(countSkippedPairsRecursive("axa") == 1)
console.log(countSkippedPairsRecursive("axax") == 2)
console.log(countSkippedPairsRecursive("aaa") == 1)
console.log(countSkippedPairsRecursive("aAA") == 1)
console.log(countSkippedPairsRecursive("a") == 0)
console.log(countSkippedPairsRecursive(" ") == 0)
console.log(countSkippedPairsRecursive("axbx") == 1)

console.log(countSkippedPairsRecursive("axa") == 1)
console.log(countSkippedPairsRecursive("axax") == 2)
console.log(countSkippedPairsRecursive("axbx") == 1)
console.log(countSkippedPairsRecursive("hi") == 0)
console.log(countSkippedPairsRecursive("hihih") == 3)
console.log(countSkippedPairsRecursive("ihihhh") == 3)
console.log(countSkippedPairsRecursive("ihjxhh") == 0)
console.log(countSkippedPairsRecursive("") == 0)
console.log(countSkippedPairsRecursive("a") == 0)
console.log(countSkippedPairsRecursive("aa") == 0)
console.log(countSkippedPairsRecursive("aaa") == 1)
console.log(countSkippedPairsRecursive("aaaaaaaa") == 6)