function solution(m) {
  if (m.length === 0 || m[0].length === 0) return [];

  let dir = 0;
  let output = [];
  let left = 0;
  let right = m[0].length - 1;
  let top = 0;
  let bottom = m.length - 1;

  while (top <= bottom && left <= right) {
      if (dir === 0) {
          for (let r = top; r <= bottom; r++) {
              output.push(m[r][left]);
          }
          left++;
      } else if (dir === 1) {
          for (let c = left; c <= right; c++) {
              output.push(m[bottom][c]);
          }
          bottom--;
      } else if (dir === 2) {
          for (let r = bottom; r >= top; r--) {
              output.push(m[r][right]);
          }
          right--;
      } else {
          for (let c = right; c >= left; c--) {
              output.push(m[top][c]);
          }
          top++;
      }
      dir = (dir + 1) % 4;
  }
  return output;
}