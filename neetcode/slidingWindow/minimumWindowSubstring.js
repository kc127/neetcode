/*
Find the length of the smallest substring that contains all of the characters.

ABCZDACB, set = {A, B, C, D}
l
    r

charsEncountered =
letterMap =

ABCZD
BCZDA
CZDACB
ZDACB
DACB => solution

Approach:

Sliding Window Template

1. Create two pointers, a left (slow) and a right (fast)
2. Create a "best score found so far". (if max = small val, if min = big val)
3. Create a supporting data structure to track when we have found a valid substring
4. Create a while right < inputString.length
     5. If we don't have a candidate substring: increment right and update data structure
     6. If we have a candidate substring: increment left to chop off unnecessary letters while updating your data structure
     7. Update your best score if you now have a smaller string than those found previously
8. Return best score

*/

function smallestSubstr(str, subStr) {
  let left = 0;
  let right = 0;
  let bestScore = Infinity;
  let letterMap = {};
  let charsEncountered = 0;

  while (right < str.length || charsEncountered === subStr.length) {
    if (charsEncountered !== subStr.length) {
      let currRight = str[right];
      if (subStr.includes(currRight)) {
        letterMap[currRight] = (letterMap[currRight] || 0) + 1;
        if (letterMap[currRight] === 1) {
          charsEncountered++;
        }
      }
      right++;
    } else {
      let currLeft = str[left];
       if (letterMap[currLeft]) {
        letterMap[currLeft]--;
        if (letterMap[currLeft] === 0) {
          charsEncountered--;
        }
       }
       bestScore = Math.min(bestScore, right - left);
       left++;
    }
  }
  return bestScore;
}
// if we need to find the shortest string instead
function smallestSubstr(str, subStr) {
  let left = 0;
  let right = 0;
  let bestScore = Infinity;
  let letterMap = {};
  let charsEncountered = 0;
  let output = "";

  while (right < str.length || charsEncountered === subStr.length) {
    if (charsEncountered !== subStr.length) {
      let currRight = str[right];
      if (subStr.includes(currRight)) {
        letterMap[currRight] = (letterMap[currRight] || 0) + 1;
        if (letterMap[currRight] === 1) {
          charsEncountered++;
        }
      }
      right++;
    } else {
      let currLeft = str[left];
       if (letterMap[currLeft]) {
        letterMap[currLeft]--;
        if (letterMap[currLeft] === 0) {
          charsEncountered--;
        }
       }
       if (bestScore > right - left) {
        output = str.slice(left, right);
        bestScore = right - left;
       }


       left++;
    }
  }
  return output;
}
