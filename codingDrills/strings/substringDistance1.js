/* Substring Distance

Given a string and a non-empty substring *sub*, compute recursively the size of the largest substring which starts and ends with the given *sub* string and return its length, including the length of the substrings. When *sub* is multiple characters, they may overlap with each other and share characters.

Example(s)
strDist("catcowcat", "cat") == 9
strDist("catcowcat", "cow") == 3
strDist("cccatcowcatxx", "cat") == 9
strDist("ooowhwhwooo", "whw") == 5 */

function strDist(word, sub) {
  // base case 1
  if (word.length < sub.length) {
    return 0;
  }
  // base case 2 - all non-zero solutions must pass this base case
  if (word.slice(0, sub.length) === sub && word.slice(word.length - sub.length) === sub) {

    return word.length;
  }
  // recursive case 1: to remove one char at a time until the word begins with substr
  if (word.slice(0, sub.length) !== sub) {
    return strDist(word.slice(1), sub);
  }
  // recursive case 2: now that our word begins with substring, we need to remove any non-substr chars from the end of the word
  return strDist(word.slice(0, word.length - 1), sub);
}

console.log(strDist("catcowcat", "cat") == 9)
console.log(strDist("catcowcat", "cow") == 3)
console.log(strDist("cccatcowcatxx", "cat") == 9)
console.log(strDist("abccatcowcatcatxyz", "cat") == 12)
console.log(strDist("ooowhwhwooo", "whw") == 5)
console.log(strDist("xyx", "x") == 3)
console.log(strDist("xyx", "y") == 1)
console.log(strDist("xyx", "z") == 0)
console.log(strDist("z", "z") == 1)
console.log(strDist("x", "z") == 0)
console.log(strDist("", "z") == 0)
console.log(strDist("hiHellohihihi", "hi") == 13)
console.log(strDist("hiHellohihihi", "hih") == 5)
console.log(strDist("hiHellohihihi", "o") == 1)
console.log(strDist("hiHellohihihi", "ll") == 2)