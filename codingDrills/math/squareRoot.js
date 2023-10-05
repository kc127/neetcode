/*

 Given a non-negative integer, return its square root. Since the return type is an integer truncate any decimal digits and return only the integer part of the square root. Do not use built-in functions or operators to solve this problem (e.g. pow() or sqrt()).

Examples:

Given 4 // returns 2
Given 5 // returns 2 (actual square root value is 2.23606...)

*/

function solution(num) {
  if (num <= 1) return num;
  let sqrt = 1;

  let i = 2;
  let j = num;
  while (i <= j) {
      let mid = i + (j - i)/2;
      sqrt = mid * mid;
      if (sqrt === num) {
          return mid;
      } else if (sqrt < num) {
          i = mid + 1;
      } else {
          j = mid - 1;
      }
  }
  return sqrt;
}