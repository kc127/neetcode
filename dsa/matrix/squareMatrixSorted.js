/*

Q. Given a square matrix with each row sorted and consist of either 0 or 1, return the index of the first row from the top with the minimum positive number of 1s. If no rows have even a single 1, return -1.

[execution time limit] 4 seconds (js)

[memory limit] 1 GB

[input] array.array.integer m

[output] integer

*/

function solution(m) {
  if (m.length === 0 || m[0].length === 0) return -1;
  let mintotalOnes = Infinity;
  let minRow = -1;
  for (let i = 0; i < m.length; i++) {
      let currTotalOnes = 0;
      for (let j = 0; j < m[0].length; j++) {
          if (m[i][j] === 1) currTotalOnes++;
      }
      if (currTotalOnes !== 0 && currTotalOnes < mintotalOnes) {
          mintotalOnes = currTotalOnes;
          minRow = i;
      }
  }
  return  minRow;
}
