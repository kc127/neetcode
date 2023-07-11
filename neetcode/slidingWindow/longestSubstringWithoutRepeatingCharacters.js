/*
Longest Substring Without Repeating Characters

substr = is a contiguous block of characters in a string

s = "abcabcbb" returns 3
     abc
      bca
       cab
          abc
s = "bbbbbbb" returns 1

s = "bxbbbb" returns 2


  a b c a b c b b
              l
                r

  set = a, b, c
  bestScore = max (bestScore, set size)

  traverse the input string with right
     if char at right is not in the charSet
        add it
        increment right by 1
      else
         compute bestScore by taking the max betn bestScore vs charSet size
         remove char at left from charSet
         increment left by 1

*/
function lengthOfLongestSubstring(str) {
  let left = 0;
  let right = 0;
  let charSet = new Set();
  let bestScore = 0;

  while (right < str.length && left < str.length) {
    if (!charSet.has(str[right])) {
      charSet.add(str[right]);
      bestScore = Math.max(bestScore, charSet.size);
      right++;
    } else {
      charSet.delete(str[left]);
      left++;
    }
  }
  return bestScore;
}

console.log(lengthOfLongestSubstring("abcabcbb") === 3);
console.log(lengthOfLongestSubstring("bbbbbbb") === 1);
console.log(lengthOfLongestSubstring("bbbbbbxb") === 2);
console.log(lengthOfLongestSubstring("") === 0);
console.log(lengthOfLongestSubstring("b") === 1);
