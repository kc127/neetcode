/*
❓ PROMPT
You are given four arrays representing two lists of operands, one list of operators, and a list of results. For any index, i, your task is to check to see if:

operands1[i] operators[i] operands2[i] = results[i]

For input arrays arrays like:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3]
results = [3, 0]

then the result of this function should be [true, false] since 1 + 2 = 3 and 2 - 3 ≠ 0.

The numbers will be integers, and the signs can be "+", "-", "*", "/". Round to the nearest whole number for division.

Example(s)
Given the following:

operands1 = [1, 2]
operators = ['+', '-']
operands2 = [2, 3]
results = [3, 0]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 2 - 3 = 0. This evaluation is False

We should return [True, False] as there are two operands in the input list.

Another Example:
operands1_1 = [1, 5, 2]
operators_1 = ['+', '-', '*']
operands2_1 = [2, 3, 4]
results_1 = [3, 2, 8]

At index 0, we have 1 + 2 = 3. This evaluation is True
At index 1, we have 5 - 3 = 2. This evaluation is True
At index 2 we have 2 * 4 = 8. This evaluation is True

We should return [True, True, True]

*/
function checkArithmericExpressions(operands1, operators, operands2, results) {

  let ops = ["+", "-", "*", "/"];
  let sol = [];
  for (let i = 0; i < operands1.length; i++) {
    if (ops.includes(operators[i])) {
      let ans = evaulate(operands1[i], operands2[i], operators[i]);
      if (ans !== results[i]) {
        sol.push(false);
      } else {
        sol.push(true);
      }
    }
  }

  return sol;

}

function evaulate(a, b, op) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === '*') {
    return a * b;
  } else {
    return Math.round(a/b);
  }
}

// Test Case 1: Basic arithmetic operations
let operands1 = [3, 5, 2, 9];
let operators = ['+', '-', '*', '/'];
let operands2 = [2, 3, 4, 3];
let results = [5, 2, 8, 3];
console.log(checkArithmericExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]

// Test Case 2: Incorrect results
operands1 = [3, 5, 2, 9];
operators = ['+', '-', '*', '/'];
operands2 = [2, 3, 4, 3];
results = [6, 1, 7, 4];
console.log(checkArithmericExpressions(operands1, operators, operands2, results));  // Output: [false, false, false, false]

// Test Case 3: Mixed correct and incorrect results
operands1 = [10, 15, 8, 12];
operators = ['-', '*', '+', '/'];
operands2 = [5, 3, 4, 4];
results = [5, 45, 12, 2];
console.log(checkArithmericExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, false]

// Test Case 4: Empty arrays
operands1 = [];
operators = [];
operands2 = [];
results = [];
console.log(checkArithmericExpressions(operands1, operators, operands2, results));  // Output: []

// Test Case 5: Division with rounding
operands1 = [7, 10, 15, 27];
operators = ['/', '/', '/', '/'];
operands2 = [2, 3, 4, 5];
results = [4, 3, 4, 5];
console.log(checkArithmericExpressions(operands1, operators, operands2, results));  // Output: [true, true, true, true]