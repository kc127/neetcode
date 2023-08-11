/*
'''
❓ PROMPT
This exercise is great for building a solid understanding of working with complex data structures.

Write functions that take a multidimensional array as input and then output a single dimensional array. Start with the elements in increasing _row major_ order, meaning the first row from beginning to end, then the second row, etc. Then move on to _column major_, which is the first column from beginning to end and then the second, etc.

You can use this template to get started:

function template(matrix) {
  const result = [];

  // Your code here.

  return result;
}

As a final challenge, do additional versions where each row is output backward but the rows are in order and similarly for columns. There are actually 4 different variations for both row and column major, so 8 total. Do you see why?

Example(s)
let matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]
];




🛠️ IMPLEMENT
function linearizeRowMajor(matrix) {
function linearizeColumnMajor(matrix) {

def linearizeRowMajor(matrix: list[list[int]]) -> list[int]:
def linearizeColumnMajor(matrix: list[list[int]]) -> list[int]:

*/

function linearizeRowMajor(matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result.push(matrix[i][j])
    }
  }
  console.log(result)
  return result;
}

function linearizeColumnMajor(matrix) {
  let result = [];

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      result.push(matrix[i][j])
    }
  }

  console.log(result)
  return result;
}

// let matrix = [
//   [ 1,  2,  3,  4,  5],
//   [ 6,  7,  8,  9, 10],
//   [11, 12, 13, 14, 15]
// ];

let matrix = [[]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([]))

matrix = [[1]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1]))

matrix = [[1, 2, 3]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,2,3]))

matrix = [
  [1],
  [4],
  [7]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,4,7]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,7]))

matrix = [
  [1, 2, 3],
  [4, 5, 6]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3,4,5,6]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,2,5,3,6]))

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3,4,5,6,7,8,9]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,4,7,2,5,8,3,6,9]))

matrix = [
  [ 1,  2,  3,  4,  5],
  [ 6,  7,  8,  9, 10],
  [11, 12, 13, 14, 15]];
console.log(JSON.stringify(linearizeRowMajor(matrix))
=== JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))
console.log(JSON.stringify(linearizeColumnMajor(matrix))
=== JSON.stringify([1,6,11,2,7,12,3,8,13,4,9,14,5,10,15]))

// official solution 

function linearizeRowMajor(matrix) {
  const result = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      result.push(matrix[r][c]);
    }
  }

  return result;
}

function linearizeColumnMajor(matrix) {
  const result = [];

  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length; r++) {
        result.push(matrix[r][c]);
    }
  }

  return result;
}