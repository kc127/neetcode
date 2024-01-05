/*
Given an array of mines where each mine has an *x* and *y* position and blast radius *1*, determine how many mines will explode given an initial mine by index that will explode.

When a mine explodes, it triggers all unexploded mines that are as for as or closer than its blast radius.

After coming up with a working solution, discuss how this can be optimized further. Accurate pseudo code or explanation is acceptable. Code is ideal.


EXAMPLE(S)
const mines = [
  { x: 1.0, y: 0.0 },
  { x: 1.0, y: 1.0 }, // index 1
  { x: 1.0, y: 2.0 },
  { x: 1.0, y: 3.0 },
  { x: 2.0, y: 2.0 },
  { x: 3.0, y: 0.0 } // index 5
]
(Note: X/Y positions can have decimal values such as 0.5 or 0.25)

4 |
3 |  X
2 |  X  X
1 |  X
0 |__X_____X___
  0  1  2  3


  Example 2:

  const mines = [
    {x: 1:00, y: 2:00},
    {x: 2:00, y: 3:00},
  ]
  mine index = 0
4 |
3 |     X
2 |  X
1 |
0 |__________
  0  1  2  3

Returns 1

Triggering the mine at index 1 will explode 5 mines in total becuase they are within 1 distance radius away:
* x: 1.0, y: 0.0
* x: 1.0, y: 1.0
* x: 1.0, y: 2.0
* x: 1.0, y: 3.0
* x: 2.0, y: 2.0

Trigger the mine at index 5 will explode 1 mine in total because no other mines are within 1 distance radius away.
 * x: 3.0, y: 0.0


FUNCTION SIGNATURE
function getNumExplosions(mines, mineIndex): number
*/

/**
 * 1. Euclidean distance
 *    sqrt((x2 - x1)^2 + (y2 - y1)^2)
 * 2. Mines can be chained
 * 3. It doesn't matter how the mine was triggered in the first place
 * 4. Dynamic programming?
 * 5. Create a mapping between every mine and the mines that it could trigger.
 * 6. Similar to islands problem
 * 7. Create a two-dimensional graph *if they were equally spaced*.
 * 8. BFS/DFS
 * 9. Start with the first mine, look at its four neighbors.
 *
 * main Map
 * sort X
 * sort Y
 *
 * keep track of index for start mine
 * for each mine, do a for loop through the list of mines, and check if its in the blast radius (N^2, N = number of mines)
 *
 * after building the map, track through from the start mine and build a set of all the mines triggered
 * return the size of the set
 *
 *
 *
 *
 * const mines = [
  { x: 1.0, y: 0.0 },
  { x: 1.0, y: 1.0 }, // index 1
  { x: 1.0, y: 2.0 },
  { x: 1.0, y: 3.0 },
  { x: 2.0, y: 2.0 },
  { x: 3.0, y: 0.0 } // index 5
]
  sqrt((x2 - x1)^2 + (y2 - y1)^2)

  blastMap = {
    0: [],

  }
 */

  function getNumExplosions(mines, mineIndex) {
    let blastMap = {}

    for (let i=0; i<mines.length; i++) {
      blastMap[i] = []
      for (let j=0; j<mines.length; j++) {
        if (i === j) continue;
        const [startX,startY] = [mines[i].x, mines[i].y];
        let [curX,curY] = [mines[j].x, mines[j].y];
        if(Math.sqrt((curX - startX)**2 + (curY - startY)**2) <= 1){
          blastMap[i].push(j)
        }
      }
    }

    let explosions = new Set()
    explosions.add(mineIndex)
    let queue = blastMap[mineIndex]
    let x = 0

    while (x < queue.length) {
      if (!explosions.has(queue[x])) {
        queue = queue + blastMap[queue[x]]
      }
      explosions.add(queue[x])
      x++
    }

    while (queue.length > 0) {
      queue.remove(0)
      if (!explosions.has(queue[x])) {
        queue = queue + blastMap[queue[x]]
      }
    }

    return explosions.size;
  }

  const mines = [
    { x: 1.0, y: 0.0 },
    { x: 1.0, y: 1.0 }, // index 1
    { x: 1.0, y: 2.0 },
    { x: 1.0, y: 3.0 },
    { x: 2.0, y: 2.0 },
    { x: 3.0, y: 0.0 } // index 5
  ]

  console.log(getNumExplosions(mines, 1), ' expect 5');