/*
'''
Generate all plus & minus expressions that equals target

Given a string that contains only digits from 0 to 9, and an integer value, *target*. Print all expressions which evaluate to *target* using the plus(+) and minus(-) binary operators between the digits.

You will likely need a helper function to recurse. You can use a loop within your recursive function because we're not monsters.


EXAMPLE(S)
generateExprs("123", 6) == ['1 + 2 + 3']
generateExprs("125", 7) == ['12 - 5']
generateExprs("420", 420) == ['420']
generateExprs("1210", 2) == ['1 + 2 - 1 + 0','1 + 2 - 1 - 0','12 - 10']


FUNCTION SIGNATURE
function generateExprs(seq, target) {
def generateExprs(seq: str, target: int) -> None:
'''


Target runtime and space complexity

Time: O(3n) where n is the length of the sequence. 3 recursive paths at each index: adding, subtracting, and merging the digit to make a larger number.
Space: O(n) because the stack can reach n recursive frames before being torn down

This involves both recursion and looping. The base case is when the current index has reached the length of the digit string, at which point the algorithm will print the expression if the total matches the target.
The looping is used to try numbers with multiple digits and will be used as the current index in each call stack frame. The recursion is used to try different operators between the numbers. The current expression and the current value are passed to each frame. Within each frame the algorithm adds(+) or subtracts(-) the latest segment from that calculation to pass into the next frame.

*/

function generateExprs(seq, target) {
  let results = [];

  function calculateExpr(currentExpr, currentIndex, total) {
    if (currentIndex === seq.length && total === target) {
      results.push(currentExpr);
      return;
    }

    // Loop to put operators (+, -) at all positions
    for (let i = currentIndex; i < seq.length; i++) {
      // Ignore numbers with a leading 0
      if (seq[currentIndex] === '0' && i !== currentIndex) {
        break;
      }

      // Grab 1+ chars for processing
      let segment = seq.substring(currentIndex, i + 1);
      let segmentValue = parseInt(segment);

      // If first index, only send the segment value since there is no second operand (and so no need for a + / -)
      if (currentIndex === 0) {
        calculateExpr(currentExpr + segment, i + 1, segmentValue)
        // Try + / - each time
      } else {
        calculateExpr(`${currentExpr} + ${segment}`, i + 1, total + segmentValue);
        calculateExpr(`${currentExpr} - ${segment}`, i + 1, total - segmentValue);
      }
    }
  }

  calculateExpr('', 0, 0);
  return results;
}

console.log(JSON.stringify(generateExprs("123", 6).sort())
  == '["1 + 2 + 3"]') // plus only
console.log(JSON.stringify(generateExprs("125", 7).sort())
  == '["12 - 5"]') // minus only
console.log(JSON.stringify(generateExprs("1236", 0).sort())
  == '["1 + 2 + 3 - 6"]') // mix
console.log(JSON.stringify(generateExprs("1235",  - 3).sort())
  == '["1 - 2 + 3 - 5"]') // mix
console.log(JSON.stringify(generateExprs("12036", 0).sort())
  == '["1 + 2 + 0 + 3 - 6","1 + 2 - 0 + 3 - 6"]')
console.log(JSON.stringify(generateExprs("12036", 18).sort())
  == '["1 + 20 + 3 - 6"]')
console.log(JSON.stringify(generateExprs("1010", 9).sort())
  == '["10 - 1 + 0","10 - 1 - 0"]')
console.log(JSON.stringify(generateExprs("420", 420).sort())
  == '["420"]')
console.log(JSON.stringify(generateExprs("1210", 2).sort())
  == '["1 + 2 - 1 + 0","1 + 2 - 1 - 0","12 - 10"]')