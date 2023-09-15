var searchMatrix = function(matrix, target) {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let left = 0;
  let right = (rowLen * colLen) - 1;
  while (left <= right){
      let midIdx = Math.floor((left + right)/2);
      let row = Math.floor(midIdx / colLen);
      let col = midIdx % colLen;

      if (matrix[row][col] === target) {
        return true;
      } else if (matrix[row][col] < target) {
        left = midIdx + 1;

      } else {
        right = midIdx - 1;
      }
  }
  return false;
};


function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let r = 0, c = columns - 1;
  while (r < rows && c >= 0) {
    const val = matrix[r][c];
    console.log(val)
    if (val === target) return true;
    if (val < target) {
      r++;
    } else {
      c--;
    }
  }
  return false;
}
