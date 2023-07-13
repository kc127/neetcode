// non-effecient solution

var searchMatrix = function(matrix, target) {
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === target) return true;
    }
  }
  return false;
};

// efficient solution

// O(r + c) where r is the number of rows and c is the number of columns
function searchMatrix(matrix, target) {
  const rows = matrix.length;
  const columns = matrix[0].length;

  let r = 0, c = columns - 1;
  while (r < rows && c >= 0) {
    const val = matrix[r][c];
    if (val === target) return true;
    if (val < target) {
      r++;
    } else {
      c--;
    }
  }
  return false;
}