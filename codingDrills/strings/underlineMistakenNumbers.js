/*
You're holding a silent auction with 650 bidders, assigning each bidder a numbered sign between 1-650. A person raises their sign when they want to make an offer.

However, they sometimes hold the sign upside-down, and the auctioneer
mistakes their number for a different number. For example, bidder #6
raises their sign upside-down and could be mistaken for bidder #9.

Write a function that underlines all numbers from 1-650 that can be
misinterpreted for another number within that range when rotated 180 degrees.

EXAMPLES
The number 6 should be underlined because it can be misinterpreted for the number 9 and vice versa.

Approach
1 Exclude numbers with non-flippable digits
2 Exclude numbers that are divisible by 10
3 Exclude numbers that equal themselves when flipped
4 Exclude numbers that are above the upper bound

*/

function underlineMistakenNumbers(upperBound) {
  let numsThatAreFlippable = [];
  let num = 1;

  while (num <= upperBound) {
    if (num % 10 !== 0 && isFlippable(num)) {
      numsThatAreFlippable.push(num);
    }
    num++;
  }

  return numsThatAreFlippable;
}

/*
 * HELPER FUNCTION: to check if given number can be flipped or not
 * @params: integer
 * returns boolean
 */
function isFlippable(num) {
  let numToStr = num.toString();
  let numsThatAreNonFlippable = ['2', '3', '4', '5', '7'];
  let numsThatEqualThemselves = ['0', '1', '8'];

  for (let char of numToStr) {
    if (numsThatAreNonFlippable.includes(char)) {
      return false;
    }
    if (numsThatEqualThemselves.includes(char) && new Set(numToStr).size === 1) {
      return false;
    }
  }

  let flippedNum = flipNum(num);
  return (flippedNum <= 650 && flippedNum !== num) ? true : false;
}


/*
 * HELPER FUNCTION: to get flipped version of number containing 0, 1, 6, 8 and 9
 * @params: integer
 * returns integer
 */
function flipNum(num) {
  let flippedNum = [];
  let validNums = {'0':'0', '1':'1', '6':'9', '8':'8', '9':'6'}
  let numToStr = num.toString();

  for (let i = numToStr.length - 1; i >= 0; i--) {
    flippedNum.push(validNums[numToStr[i]]);
  }

  return parseInt(flippedNum.join(''));
}



const results = underlineMistakenNumbers(650)
console.log(results.length === 20)
console.log(JSON.stringify(results.sort((a, b) => a - b))
=== JSON.stringify([
  6, 9, 16, 18, 19, 61, 66, 68, 81, 86, 89,
  91, 98, 99, 109, 119, 161, 191, 601, 611]))
