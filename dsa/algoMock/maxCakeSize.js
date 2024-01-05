
/*
'''
At a large party, we have many cakes of various sizes. We want to give all of the attendees the largest possible slice we can, but also make sure all of the slices are the same size.
The cakes are all long and rectangular like a [Jelly Roll](https://www.kingarthurbaking.com/recipes/jelly-roll-recipe), therefore each cake is represented by a single number indicating it's length.

Given an array of cake sizes and number of attendees, what is the largest piece of cake we can give each person. We want to give each person one whole piece of cake, not two that add up to the given size. Any leftover portions of cake can be used to make cake pops!

Assumptions:
1. Okay to not use a cake from cakes array
2. Every attendee must have the same size cake
3. Cakes array is not sorted
4. Assume that cakes is not empty and there is enough cake for each attendee


EXAMPLE(S)
For cakes [5, 2, 7, 4, 9] and 5 attendees, the largest slice we can cut is 4.
- We can cut one slice of size 4 from the first cake with some leftover.
- We don't use the second cake.
- We can get one slice out of the third and fourth cakes.
- The final cake of size 9, we can cut two slices.
- If we tried to cut slices of size 5, we can only make three from the cakes of length 5, 7, and 9 so 4 is the best we can do.


For cakes [1, 2, 3, 4, 9] and 6 attendees, the largest slice we can cut is 2.
- We can't use the first cake, but can get one slice out of the next 2.
- The cake of size four we can divide in half to get two slices.
- We can get four slices out of the cake of length 9.


cakes: [1,1], 2 attendees
- return 1


Approach:

  idea 1: brute force
    largestPossibleCake
    totalSlices = 0
    sort the cakes array  [1, 3, 3, 4, 8] attendees = 2      // O(nlogn)
    iterate from smallest to largest                       ^
      FOR: iterate through the sorted cakes array
        smallest cake = 1
                        2

        divide the existing cake slice by smallest cake
        add the quotient to totalSlices

        check if totalSlices === attendees
            if NOT: move on to the next slice,

            if YES:
                  update largestPossibleCake Size
                  increment smallest cake by 1 as long as smallest cake size is less or equal to largest cake size
                  repeat above steps


[1, 2, 3, 4, 1000000000], 5

[9, 9, 9, 9], 4

[1, 3, 3, 4, 8]
             ^
currentSlice = 3
maxSlice = 3
currentAmount = 4

FUNCTION SIGNATURE
function maxSliceSize(cakes, attendees)
def max_slice_size(cakes, attendees):
'''

*/
// Start: 4:32PM EST
/*
  time complexity: O(maxCakeSize * cakes.length) -> O(N * C) -> N^2 -> N || N log something || logN
  space complexity: O(1)
*/
function maxSliceSize(cakes, attendees) {
  let largestCakeSize = 0;
  const maxCakeSize = Math.max(...cakes)

  for (let i = 1; i <= maxCakeSize; i++) {
    let totalSlicesSoFar = 0;
    for (let cake of cakes) {
      let totalSlices = Math.floor(cake/i);
      totalSlicesSoFar += totalSlices;
      if (totalSlicesSoFar >= attendees) {
        largestCakeSize = i;
        break;
      }
    }

  }
  return largestCakeSize;
}

console.log(maxSliceSize([5, 2, 7, 4, 9], 5), " expect 4");
console.log(maxSliceSize([1, 2, 3, 4, 9], 6), " expect 2");
console.log(maxSliceSize([1, 1], 2), " expect 1");
console.log(maxSliceSize([1, 2, 3, 4, 100], 5), " expect 20");
console.log(maxSliceSize([9, 9, 9, 9], 5), " expect 4");

function computePossibleSlices(cakes, cakeSize) {
  let possibleSlices = 0;
  for (let cake of cakes) {
    possibleSlices += Math.floor(cake/cakeSize);
  }
  return possibleSlices;
}

function maxSliceSizeOptimal(cakes, attendees) {
  let largestSliceSize = 0;
  let maxCakeSize = Math.max(...cakes);
  let min = 0;
  while (min < maxCakeSize) {
    let midCakeSize = min + Math.ceil((maxCakeSize - min)/2);
    let canMake = computePossibleSlices(cakes, midCakeSize);
    if (canMake >= attendees) {
      min = midCakeSize;
      largestSliceSize = midCakeSize;
    } else {
      maxCakeSize = midCakeSize - 1;
    }
  }
  return largestSliceSize;
}



console.log(maxSliceSizeOptimal([5, 2, 7, 4, 9], 5), " expect 4");
console.log(maxSliceSizeOptimal([1, 2, 3, 4, 9], 6), " expect 2");
console.log(maxSliceSizeOptimal([1, 1], 2), " expect 1");
console.log(maxSliceSizeOptimal([1, 2, 3, 4, 100], 5), " expect 20");
console.log(maxSliceSizeOptimal([9, 9, 9, 9], 5), " expect 4");


/* official solution */

function howMany(cakes, size) {
  let current = 0;
  for (const c of cakes) {
      current += Math.floor(c / size);
  }
  return current;
}

function maxSliceSize(cakes, attendees) {
  let min = 0;
  let max = Math.max(...cakes);
  let bestSoFar = 0;

  while (min < max) {
      const curSize = min + Math.ceil((max - min) / 2);
      const canMake = howMany(cakes, curSize);
      if (canMake >= attendees) {
          min = curSize;
          bestSoFar = curSize;
      } else {
          max = curSize - 1;
      }
  }

  return bestSoFar;
}