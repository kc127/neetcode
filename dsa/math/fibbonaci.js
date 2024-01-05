function solution(n) {
  let fibNMinus1 = 0;
  let fibNMinus2 = 1;
  let fibN = 1;
  for (let i = 2; i <= n; i++) {
      fibN = fibNMinus1 + fibNMinus2;
      fibNMinus1 = fibNMinus2;
      fibNMinus2 = fibN
  }
  return fibN;
}
