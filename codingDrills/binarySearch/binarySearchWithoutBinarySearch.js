/*
'''
Given a sorted list of integers of length N, get the index of an element *x* in the list without performing any multiplication, division, exponent, or bit-shift operations. If the element is not found, return -1.

It can still be done in O(log N) time, but it doesn't look like a normal binary search!

This problem is very difficult, and problems like this should not come up in most interviews (unless you're interviewing for a position working on device drivers or other low-level areas). Treat this problem not as interview preparation but as a fun challenge to stretch your abilities. Success in this problem requires some creative thinking.

Assumptions/Observations
* input is sorted
* can use addition/substraction

EXAMPLE(S)
findIndex([10, 20, 30], 20) == 1
findIndex([10, 20, 30], 30) == 2
findIndex([10, 20, 30], 5) == -1


FUNCTION SIGNATURE
findIndex(arr: Array<number>, x: number): number:
'''


Brainstorming:
* find middle via linked list motion approach
* use binary search and look at left to see if value is greater then increase / arr[end] < x => increase range / initialize start = 0, end = 1

binary pivot distances: 1, 2, 4, 8, 16 ... upto N/2

binaryPivotArray = [] // linear scan of log n list => O(logn)
N=16

Pseudocode:
    - create an array of powers of 2 from 1 to 2^x < N
      - [1, 2, 4, 8]
             ^
    - currIdx start at 0
    - offset = pop from powers array
    - start by adding offset to currIdx
    - while we haven't found the target
        - update offset(pop from powers array)
        - checking if array[curr] is target
        - if yes return curr
        - if less than, add new offset to curr
        - if greater than, subtract new offset from curr

*/
function createPowersOfTwo(N) {
  let output = [1]
  let prev = output[output.length - 1]
  while (prev + prev < N){
    let next = prev + prev
    output.push(next)
    prev = next
  }
  output.unshift(0);
  return output
}

function findIndex(arr, target) {
  let powersOfTwo = createPowersOfTwo(arr.length);
  console.log(powersOfTwo)
  let midPoint = 0;
  let offset = powersOfTwo.pop();
  midPoint += offset;
  console.log(midPoint)
  while (powersOfTwo.length !== 0 && midPoint < arr.length) {
    offset = powersOfTwo.pop();
    if (arr[midPoint] < target) {
      midPoint += offset;
    } else if(arr[midPoint] > target) {
      midPoint -= offset;
    } else {
      return midPoint
    }
  }
  console.log(midPoint)
  return arr[midPoint] === target ? midPoint : -1;
}

console.log(findIndex([10, 20, 30], 10) == 0)
// console.log(findIndex([10, 20, 30], 20) == 1)
// console.log(findIndex([10, 20, 30], 30) == 2)
// console.log(findIndex([10, 20, 30], 9) == -1)
// console.log(findIndex([10, 20, 30], 31) == -1)
// console.log(findIndex([5], 5) == 0)
// console.log(findIndex([5], 4) == -1)
// console.log(1 <= findIndex([10, 20, 20, 20, 30], 20) <= 3)