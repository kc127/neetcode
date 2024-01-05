function solution(matrix1, matrix2) {
  let output = [];
  let innerCol = 0;
  let outerRow = 0;
  for (let i = 0; i < matrix1[0].length; i++) {
      let newRow = [];
      while (innerCol < matrix2[0].length) {
          let sum = 0;
          for (let j = 0; j < matrix2.length; j++) {
              sum += matrix1[outerRow][i] * matrix2[j][innerCol];
          }
          newRow.push(sum);
          innerCol++;
      }
      output.push(newRow);
      innerCol = 0;
      outerRow++;

  }
  return output;
}
