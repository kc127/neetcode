/*
'''
Today, you will implementing the "paint bucket" question.

Source: https://leetcode.com/problems/flood-fill/


An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.


EXAMPLE(S)

Input: image = [
      [1,1,1],
      [1,1,0],
      [1,0,1]],
sr = 1, sc = 1, color = 2
Output: [
[2,2,2],
[2,2,0],
[2,0,1]
]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:
Input: image = [
        [0,0,0],
        [0,0,0]],
sr = 0, sc = 0, color = 0
Output: [[0,0,0],[0,0,0]]
Explanation: The starting pixel is already colored 0, so no changes are made to the image.

FUNCTION SIGNATURE
func floodFill(image: inout [[Int]], location: (Int, Int), color: Int)
'''

assumptions:
1. can have multiple colors
2. goal: move outwards from starting position and change color to the given color if the color is same as initial color
3. grid is rectangular

approach:
BFS

*/

const floodFill = (graph, sr, sc, color) => {
  const initialColor = graph[sr][sc]
  const queue = [[sr, sc]]
  const visited = new Set()
  const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let i = 0

  while( i < queue.length) {
    const [x, y] = queue[i]
    i++

    if(visited.has(`${x}&${y}`)) continue
    visited.add(`${x}&${y}`)

    if(graph[x][y] === initialColor) graph[x][y] = color

    for(let [dx, dy] of neighbors){
      const newX = x + dx
      const newY = y + dy

      if(inBound(graph, newX, newY) && graph[newX][newY] === initialColor) queue.push([newX, newY])
    }
  }

  return graph
}

const inBound = (graph, x, y) => {
  return x >= 0 && x < graph.length && y >= 0 && y < graph[0].length
}

// time: col * row
// space: col * row

let image = [
  [1,1,1],
  [1,1,0],
  [1,0,1]]
let sr = 1, sc = 1, color = 2

console.log(floodFill(image, sr, sc, color))

// Output: [
//   [2,2,2],
//   [2,2,0],
//   [2,0,1]
//   ]

image = [
  [0,0,0],
  [0,0,0]],
sr = 0, sc = 0, color = 0

console.log(floodFill(image, sr, sc, color))


/* official solution */

function floodFill(image, sr, sc, newColor) {
  // First define the direction vectors
  const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  // Make a copy of the image since we will be modifying the colors in place
  const modifiedImage = image.map(row => row.slice());

  // Define the helper function which will be the one actually modifying the image
  function floodFillHelper(sr, sc) {
      // Store the old color in a temporary variable
      const oldColor = modifiedImage[sr][sc];
      // Change the cell at the coordinate to the new color
      modifiedImage[sr][sc] = newColor;
      // Iterate through all directions, checking for boundary conditions
      for (const dir of dirs) {
          const new_sr = sr + dir[0];
          const new_sc = sc + dir[1];
          // If condition for boundary condition checks
          if (
              new_sr >= 0 &&
              new_sr < modifiedImage.length &&
              new_sc >= 0 &&
              new_sc < modifiedImage[0].length
          ) {
              // If there is a color match, call the helper recursively on that cell
              if (modifiedImage[new_sr][new_sc] === oldColor) {
                  floodFillHelper(new_sr, new_sc);
              }
          }
      }
  }

  // Driver code
  if (modifiedImage[sr][sc] === newColor) return modifiedImage; // No need to change color
  floodFillHelper(sr, sc); // Call the helper
  return modifiedImage; // Return the modified image
}