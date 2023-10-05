/*

Q. Given a square matrix with a minimum odd length of 3 on each side, sum numbers in cross positions.

*/

function solution(m) {
  if (m.length === 0 || m[0].length === 0) {
      return 0;
  }
  let midRow = Math.floor(m.length/2);
  let midCol = Math.floor(m[0].length/2);
  let crossPosSum = 0;
  console.log(midRow, midCol)
  for (let i = 0; i < m.length; i++) {
      for (let j = 0; j < m[0].length; j++) {
          if (j === midCol || i === midRow) {
              console.log(m[i][j])
              crossPosSum += m[i][j];
          }
      }
  }
  return crossPosSum;
}

/*

  00  01 02
  10  11 12
  20  21 22

*/