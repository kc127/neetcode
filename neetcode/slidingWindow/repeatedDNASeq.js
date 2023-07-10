/*
Given a string, s, that represents a DNA subsequence, and a number k return all the contiguous subsequences (substrings) of length k that occur more than once in the string. The order of the returned subsequences does not matter. If no repeated substring is found, the function should return an empty set.

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

/** O(n) solution 1 */

function findRepeatedSequences(s, k) {
  let subFreq = {};
  let set = new Set();
  let sub = [];
  for (let i = 0; i < s.length; i++) {
      sub.push(s[i]);
      while (sub.length === k) {
          subFreq[sub.join('')] = (subFreq[sub.join('')] || 0) + 1;
          sub.shift();
      }
  }
  for (let sub in subFreq) {
      if (subFreq[sub] >= 2) {
          set.add(sub);
      }
  }
  return Array.from(set);
}

