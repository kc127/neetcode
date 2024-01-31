/*
Question :

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

- 1 <= s.length <= 30
- s consists of lowercase English letters, digits, and square brackets '[]'.
- s is guaranteed to be a valid input.
- All the integers in s are in the range [1, 300].


Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Input: s = "1[a]"
return "a"

Input: s = "", output = ""


Variation :
Input: s = [c[b[a]]]
output:  cba


Approach:

    opening brackets = {
      order: index
      1: 2
      2: 5
    }


         i
              j

    "a"

    k(acxcx)

    5a 6b 7c

      time complexity: O(max(k)*n)
      space: O(k), O(n), O(n*k)

  add str.slice(i+2,j)
first [] => k = 3
second [] => k = 2

plain-english:

  kStack = [3,2]
  let charArr = [];
  iterate over input string
    if curr char is an integer
      update k


 "32[a2[cx]]"
    i
    j

    2[c3[a]]

*/
function decodeString(str) {
  let kStack = [];
  let strStack = [];
  let j = 0;
  let decodedStr = ""; // cxcx
  while (i < str.length) {
    // store k
    j = i;
    while (j < str.length && isNumber(str[j])) {
      j++;
    }
    let number = Number(str.slice(i,j));
    kStack.push(number);
    // store substr
    i = j; // pointing an opening bracket
    if (str[i] !== "[") break;
    // keep moving k until j is no longer pointing to a char
    // j points to [,],number
    while (j < str.length && isAlpha(str[j])) {
      j++;
    }
    strStack.push(str.slice(i+1,j));

    // checks for closing bracket
    if (str[j] === "]") {
      let newStr = strStack.pop() + decodedStr;
      let newK = kStack.pop();
      let result = ""
      for (let k = 0; k <= newK;k++) {
        result += newStr; // ab newStr abab abababab
      }
      decodedStr = newStr;
    }

    i = j;
  }
  return decodedStr;
}

/* optimal approach with
 time : O(max k * n)
 space: O(m + n);

 */

 Approach:

  1) Idea 1: Linear Scan + Data Structure ??

    3[acc1[x]]
          i
    currK = ""
    currStr = "x"
    kStack = 3,1
    strStack = "",acc

    str[i] = number
      append to currK
    str[i] = char
      append to currStr
    str[i] = [
      add currK to kStack
      add currStr to strStack
      reset currK, currStr
    str[i] = ] (decoding process)
      let k = pop from kStack
      let str = pop from strStack

      loop from 1 to k to build currStr

      currStr = str + currStr





*/

function decodeString(str) {
  let kStack = [];
  let strStack = [];
  let currK = "";
  let currStr = "";
  let i = 0;
  while (i < str.length) {
    if (isNumber(str[i])) {
      currK += str[i];
    } else if (isAlpha(str[i])) {
      currStr += str[i];
    } else if (str[i] === "[") {
      kStack.push(currK);
      strStack.push(currStr);
      currK = "";
      currStr = "";
    } else if (str[i] === "]") {
      let k = kStack.pop();
      let decodedStr = "";
      for (let j = 0; j < k; j++) {
        decodedStr += currStr;
      }
      currStr = strStack.pop() + decodedStr;
    }
    i++;
  }
  return currStr;
}

function isNumber(ch) {
  return (ch >= "0" && ch <= "9");
}

function isAlpha(ch) {
  return (ch >= "a" && ch <= "z");
}

console.log(decodeString("3[a]2[bc]"), "aaabcbc");

/*
feedback:
-
*/


// follow ups :


// BFS/DFS approach on trees / coloured/uncoloured graphs : detection cycle of graph
// LinkedList  : Add two numbers
// Stack
// Greedy algorithm : https://leetcode.com/problems/gas-station/description/

// https://leetcode.com/problems/distribute-coins-in-binary-tree/description/

// https://leetcode.com/problems/brace-expansion/

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/description/
