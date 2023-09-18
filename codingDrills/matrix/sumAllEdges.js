function solution(m) {
  let sum = 0;

  for (let r = 0; r < m.length; r++) {
      for (let c = 0; c < m[0].length; c++) {
          if (r === 0 || r === m.length - 1) {
              sum += m[r][c]
          } else if (c === 0 || c === m[0].length - 1) {
              sum += m[r][c];
          }
      }
  }
  return sum;
}
