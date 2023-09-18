/*

Q. Given a square matrix with each row sorted and consist of either 0 or 1, find the first row from the top with the maximum number of 1s. If none, return -1. Return the ordinal of the row, so if the first row is the answer, return 1.

*/

function solution(m) {

  if (m.length === 0 || m[0].length === 0) return -1;
  let rowWithMostOnes = -1;
  let maxOneCount = 0;
  for (let r = 0; r < m.length; r++) {
      let oneCount = 0;
      for (let c = 0; c < m[0].length; c++) {
          if (m[r][c] === 1) oneCount++;
      }
      if (oneCount > maxOneCount) {
          maxOneCount = oneCount;
          rowWithMostOnes = r;
      }
  }
  return rowWithMostOnes === -1 ? -1 : rowWithMostOnes + 1;
}
