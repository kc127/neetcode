/*
'''
While on a hike, you are standing on the trail, looking up a peak, and wondering if it is the top of the mountain: the true summit. But the highest point is not always in view. It may be obscured by a false summit, a position that is lower than the true summit but stands in the way and obscures the highest point from view. For example:

                              /
            / \             /
          /     \ _ _ _ _ /
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 3 3 3 4 5 6 - elevations

In this case, the person standing at the X is looking up at a peak 6 units away that is 5 units high. So even though there is a higher peak further back, it can't be seen because a false summit is in the way. So for input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 3, 3, 3, 4, 5, 6], the result should be false; you cannot see the true summit, because there is another point in the way, blocking the view.

                    | \
                    |   \
                    |     \
                    |       _ _
                    |
                    |
                    |
            / \     |
          /     \ _ |
        /
    _ /
X /
0 1 1 2 3 4 5 4 3 3 11 10 9 8 7 7 - elevations

The input [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7] will return true because the true summit is tall enough to be seen above everything in the foreground. However, if the value 11 is instead a 9, the true summit will be obscured by the value 1 at the second index. The value 1 then becomes a false summit!

We can think about this from an urban perspective also! Imagine you are standing on a sidewalk somewhere in Manhattan. As you look around you, can you see the top of the tallest building on the island, One World Trade Center? From some positions, it is visible, but from most, it is not. Shorter buildings are standing in the way: Consider this situation where one building obscures a taller one behind it:

                  |
                  |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
             |    |
  Height: 0  8  0  10
Position: 0  1  2  3  4  5  6

The function takes an array of elevations. The first elevation (at index 0) will be zero and is the position of the viewer. From there, the elevations at each position will potentially change and indicate the elevation at that point relative to the viewpoint. Return true if the highest visible point is the true summit.


EXAMPLE(S)
canSeeTrueSummit([0, 1, 2, 3, 4, 5]) == true
                       /
                     /
                  X/
canSeeTrueSummit([0, 2, 3]) == false

canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) == false
                  0  1. 2. 3. 4. 5. 6. 7. 8. 9. 10
canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7]) == true

 slope = rise/run

FUNCTION SIGNATURE
function canSeeTrueSummit(elevations)

- iterate through array
- maximum slope = None
- maximum height = 0
- everytime we encounter a height > maximum height
  - calculate the slope
    - if slope Node
        - maximum slope = slope
    - if slope < maximum slope
        - return false
-return true

'''
*/

function canSeeTrueSummit(elevations) {
  let maxHeight = -Infinity;
  let maxIndex = 0;

  for (let i = 1; i < elevations.length; i++) {
    if(elevations[i] > maxHeight) {
      maxHeight = elevations[i]
      maxIndex = i
    }
  }

  // let maxSlope = maxHeight / maxIndex;

  /*
  a/ b > c /d
  a*d > b*c
  */
  for (let i = 1; i < maxIndex; i++) {
    let currHeight = elevations[i];
    // let currSlope = currHeight / i;
    // if (currSlope > maxSlope) {
    //   return false
    // }
    if (currHeight * maxIndex > i * maxHeight) {
      return false
    }
  }

  return true;
}


let elevations = [0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 11, 10, 9, 8, 7, 7];
console.log(canSeeTrueSummit(elevations));

console.log(canSeeTrueSummit([0, 1, 1, 2, 3, 4, 5, 4, 3, 3, 9, 9, 9, 8, 7, 7]) == false)
console.log(canSeeTrueSummit([0, 2, 3]) == false)

console.log(canSeeTrueSummit([0, 1, 2, 3, 4, 5]) == true)

let arr = []
for (let i = 0; i< 3333333; i++) {
  arr.push(i)
}

console.log(canSeeTrueSummit(arr))