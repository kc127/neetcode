/*
'''
Tax Calculator

You are given a list of tax brackets, where each bracket is defined by a range of taxable income and a marginal tax rate. Your task is to write a function that takes in a taxable income and returns the amount of tax payable on that income based on the given tax brackets.

Write a function `calculate_tax(taxable_income: float, brackets: List[Tuple[float, float, float]]) -> float` that takes the following parameters:

`taxable_income`: a float representing the amount of taxable income
`brackets`: a list of tuples, where each tuple contains three floats: the lower limit of the bracket (exclusive), the upper limit of the bracket (inclusive), and the marginal tax rate for that bracket. The first tuple should represent the lowest bracket and have a lower limit of 0 and an upper limit greater than 0.

The function should return the total amount of tax payable on the taxable_income, calculated as the sum of the tax payable for each bracket.

[Optional]: How would you account for deductions? What about tax credits?

Further reading: https://www.nerdwallet.com/article/taxes/federal-income-tax-brackets


EXAMPLE(S)
Example 1:
If the taxable income is $80,000 and the tax brackets are:
`[(0, 10000, 0.10), (10000, 30000, 0.15), (30000, 60000, 0.25), (60000, float('inf'), 0.35)]`

The function should return 18500, which is calculated as follows:

The first $10,000 is taxed at 10%, which is $1,000
The next $20,000 is taxed at 15%, which is $3,000
The next $30,000 is taxed at 25%, which is $7,500
The remaining $20,000 is taxed at 35%, which is $7,000
The total tax payable is $1,000 + $3,000 + $7,500 + $7,000 = $18,500


  [0, 10000, 0.10],
  input > 0
  input <= 10000

Example 2:

taxable_income = 20000
brackets = [[30000, 40000, 0.20]]

return 0

Approach:
- IF income > lower limit
  - if income < upper limit
  - if income > upper limit
- IF income < lower limit
  -

- set total tax amount to be 0
- iterate through brackets
  - in each bracket [0, 10000, 0.10] [10000, 30000, 0.15]
  - if income (15000) is greater than lower limit (0) of current bracket
    - calculate the remaining_tax_income = tax income - lower limit (15000-0)
    - if tax income(15000) is greater or equal than upper limit (10000)
      - calculate the tax amount +=  (percentage * (upper - lower)) (0.1*10000)
    - if it is smaller than upper limit
      - calculate the tax amount += (percentage * (remaining_tax_income - lower))
return total tax amount

*/

function calculate_tax(taxable_income, brackets) {
  let totalTaxAmt = 0;
  let remainingTaxAmt = 0;

  for (let bracket of brackets) {
    let lowerLimit = bracket[0];
    let upperLimit = bracket[1];
    let taxRate = bracket[2];

    if (taxable_income > lowerLimit) {
      remainingTaxAmt = taxable_income - lowerLimit;
      if (taxable_income >= upperLimit) {
         totalTaxAmt += (taxRate * (upperLimit - lowerLimit));
      } else {
        totalTaxAmt += (taxRate * remainingTaxAmt);
      }
    }
  }

  return totalTaxAmt;
}


let brackets = [[0, 10000, 0.10]];
console.log(calculate_tax(5000, brackets), 500);
console.log(calculate_tax(10000, brackets), 1000);
console.log(calculate_tax(15000, brackets), 1000);

brackets = [
    [0, 10000, 0.10],
    [10000, 30000, 0.15],
    [30000, 60000, 0.25],
    [60000, Infinity, 0.35],
];
// console.log(calculate_tax(5000, brackets), 500);
console.log(calculate_tax(15000, brackets), 1750); // 1000 + (15000-10000)*0.15
console.log(calculate_tax(35000, brackets), 5250);
console.log(calculate_tax(80000, brackets), 18500);

brackets = [[0, Infinity, 0.10]];
console.log(calculate_tax(50000, brackets), 5000);
console.log(calculate_tax(100000, brackets), 10000);
console.log(calculate_tax(150000, brackets), 15000);

brackets = [];
console.log(calculate_tax(50000, brackets), 0);


/** Official Solution */

function calculate_tax(taxable_income, brackets) {
  let tax = 0;
  for (const [lower, upper, rate] of brackets) {
      if (taxable_income <= lower) {
          break;
      } else if (taxable_income <= upper) {
          tax += (taxable_income - lower) * rate;
          break;
      } else {
          tax += (upper - lower) * rate;
      }
  }
  return Math.round(tax * 100) / 100;
}