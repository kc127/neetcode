/*
'''
Formation is trying to assign a group of Fellows algorithms of varying difficulty levels. The algorithm difficulty should feel fair to all Fellows based on each Fellow's algorithmic skill level.

We are given an array of integers representing the skill level of each Fellow, and we are asked to return an array of integers representing the difficulty of an algorithm to assign each Fellow respectively.

The minimum difficulty is 1.

When a Fellow has a higher skill level than an adjacent Fellow they must be given a more difficult problem than their neighbor.

When a *adjacent* fellow has the same skill level, they must be given a problem at the same difficulty level.

Return the array of difficulties representing the MINIMUM difficulty we can give each Fellow.

Assumptions:
1. Input array contains integers, greater than 0.



EXAMPLE(S)
fellows = [10, 20, 60, 70, 50, 10, 20, 50]
          [1,  2,  3,  4,  2,  1,   2,  3]
assignAlgorithms(fellows) ->

fellows = [10, 11] should return [1, 2]

Approaches:

Daria:
iterate through fellows
  if increasing, add 1 to position in result array
  if decreasing, decrease by 1
fellows = [10, 20, 60, 70, 50, 10, 20]
          [1,  1,  1,  1,  1,  1,   1]

Hongyu:
fellows = [10, 20, 60, 70, 50, 10, 20]
          [1,  2,  3,  4,  3,  2,   3]

fellows = [10, 20, 60, 70, 50, 20]
          [1,  2,  3,  4,  2,   1]

real      [1,  2,  3,  4,  2,  1,   2]
          [10 ,20,60,,70,50,]

   in plain english:
  - keep track of max and min skill level
  - create an output array of size input array and fill it with 1
  - OUTER LOOP: traverse the input array
      - if next skill > curr skill value
            output[next] = output[curr]+1
        elif next skill < curr skill value
            output[next] = output[curr]-1
        elif next skill == curr skill value
            output[next] = output[curr]+1
  - find the max index(es)
  - decrement sections of subarrays between max indexes to have the lowest output value in each subarray be 1
O(n)


Verbal Solution
This requires two passes, once in each direction. The first pass is to set the relative values, and the second time is to fix the value if it turns out the new value is larger than what's already at the index.
Iterate from left to right. Starting with the value 1, increment the current value by 1 every time the value in the fellows array increases, and reset to 1 every time it decreases.
Repeat the procedure starting from the right. This time, only overwrite values when the new value is larger than the value already at that index.
This procedure works because each pass computes the minimum value that works looking in each direction and then takes the larger of the two, which by definition will satisfy both.

Solution:
function assignAlgorithms(fellows) {
  if (fellows.length <= 0)
    return null

  if (fellows.length == 1)
    return [1]

  let minDiff = [1]

  let i = 0
  while (i + 1 < fellows.length) {
    if (fellows[i] < fellows[i + 1])
      minDiff.push(minDiff[i] + 1)
    else if (fellows[i] > fellows[i + 1])
      minDiff.push(1)
    else
      minDiff.push(minDiff[i])

    i += 1
  }

  i = fellows.length - 1
  while (i > 0) {
    if (fellows[i - 1] > fellows[i] && minDiff[i - 1] <= minDiff[i])
      minDiff[i - 1] = minDiff[i] + 1
    else if (fellows[i - 1] == fellows[i])
      minDiff[i - 1] = Math.max(minDiff[i], minDiff[i - 1])

    i -= 1
  }

  return minDiff
}

console.log(assignAlgorithms([10,20,60,70,50,10,20]).toString() == "1,2,3,4,2,1,2")
console.log(assignAlgorithms([]) == null || assignAlgorithms([]).toString() == "")
console.log(assignAlgorithms([100]).toString() == "1")
console.log(assignAlgorithms([11,22]).toString() == "1,2")
console.log(assignAlgorithms([22,11]).toString() == "2,1")
console.log(assignAlgorithms([20,20]).toString() == "1,1")
console.log(assignAlgorithms([20,20,5]).toString() == "2,2,1")
console.log(assignAlgorithms([5,20,20]).toString() == "1,2,2")
console.log(assignAlgorithms([19,29,39]).toString() == "1,2,3")
console.log(assignAlgorithms([37,27,17]).toString() == "3,2,1")
console.log(assignAlgorithms([10,20,100,70,100,10,20]).toString() == "1,2,3,1,2,1,2")
console.log(assignAlgorithms([32,22,12,22,32]).toString() == "3,2,1,2,3")
console.log(assignAlgorithms([15,25,35,25,15]).toString() == "1,2,3,2,1")
console.log(assignAlgorithms([15,10,25,25,25,10,15]).toString() == "2,1,2,2,2,1,2")





FUNCTION SIGNATURE
def assignAlgorithms(fellows: list[int]) -> list[int]:
'''
*/


// Thoroughly understand the problem
// Identify possible solution(s)
// Choose a solution
// Build it
// Test it

function assignAlgorithms(fellows) {
  if (fellows.length <= 0)
    return null

  if (fellows.length == 1)
    return [1]

  let minDiff = [1]

  let i = 0
  while (i + 1 < fellows.length) {
    if (fellows[i] < fellows[i + 1])
      minDiff.push(minDiff[i] + 1)
    else if (fellows[i] > fellows[i + 1])
      minDiff.push(1)
    else
      minDiff.push(minDiff[i])

    i += 1
  }

  i = fellows.length - 1
  while (i > 0) {
    if (fellows[i - 1] > fellows[i] && minDiff[i - 1] <= minDiff[i])
      minDiff[i - 1] = minDiff[i] + 1
    else if (fellows[i - 1] == fellows[i])
      minDiff[i - 1] = Math.max(minDiff[i], minDiff[i - 1])

    i -= 1
  }

  return minDiff
}

console.log(assignAlgorithms([10,20,60,70,50,10,20]).toString() == "1,2,3,4,2,1,2")
console.log(assignAlgorithms([10,20,60,70,50,10,20,50]))
// console.log(assignAlgorithms([]) == null || assignAlgorithms([]).toString() == "")
// console.log(assignAlgorithms([100]).toString() == "1")
// console.log(assignAlgorithms([11,22]).toString() == "1,2")
// console.log(assignAlgorithms([22,11]).toString() == "2,1")
// console.log(assignAlgorithms([20,20]).toString() == "1,1")
// console.log(assignAlgorithms([20,20,5]).toString() == "2,2,1")
// console.log(assignAlgorithms([5,20,20]).toString() == "1,2,2")
// console.log(assignAlgorithms([19,29,39]).toString() == "1,2,3")
// console.log(assignAlgorithms([37,27,17]).toString() == "3,2,1")
// console.log(assignAlgorithms([10,20,100,70,100,10,20]).toString() == "1,2,3,1,2,1,2")
// console.log(assignAlgorithms([32,22,12,22,32]).toString() == "3,2,1,2,3")
// console.log(assignAlgorithms([15,25,35,25,15]).toString() == "1,2,3,2,1")
// console.log(assignAlgorithms([15,10,25,25,25,10,15]).toString() == "2,1,2,2,2,1,2")