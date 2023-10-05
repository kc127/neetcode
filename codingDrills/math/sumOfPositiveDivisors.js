/*

 Given a positive integer n, determine if it equals to the sum of its positive divisors excluding n itself. A divisor is a number that can divide n evenly without any remainder.

Examples:

Given: 6, returns true
// 6 = 1 + 2 + 3 = 6
[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] integer n

[output] boolean

*/

function solution(n) {
  if (n <= 1) return false;

  let sum = 1;
  for (let i = 2; i < n; i++) {
      console.log(3%i, i)
      if (n % i === 0) {
          sum += n/i;
      }
  }

  return sum === n;
}
