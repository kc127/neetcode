/*

Given a positive decimal integer, convert it to a binary form.

Examples:

Given: 13, returns 1101

*/
function solution(n) {
  let rem = [];

  while (n) {
      let q = Math.floor(n / 2);
      let r = n % 2;
      rem.push(r);
      n = q;
  }
  let binary = rem.reverse().join('');
  return Number(binary);
}
