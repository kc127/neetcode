/*

You are given some lists of regions where the first region of each list includes all other regions in that list.

Naturally, if a region x contains another region y then x is bigger than y. Also, by definition, a region x contains itself.

Given two regions: region1 and region2, return the smallest region that contains both of them.

If you are given regions r1, r2, and r3 such that r1 directly includes r3, it is guaranteed there is no r2 such that r2 includes directly  r3.

   r1             r3
["Earth","North America"]

r2
["Mars", "NA"] X

[U]

Assumptions/Observations:
1. Region: a place in input regions with min length 2 internal array size
2. Region 1 and 2 always present in regions


It is guaranteed the smallest region exists.

Example 1:

Input:
regions = [["Earth","North America","South America"],
["North America","United States","Canada"],
["United States","New York","Boston"],
["Canada","Ontario","Quebec"],
["South America","Brazil"]],

region1 = "Quebec",
region2 = "New York"
Output: "North America"

Example 2:

Input: regions = [
  ["Earth", "North America", "South America"],
["North America", "United States", "Canada"],
["United States", "New York", "Boston"],
["Canada", "Ontario", "Quebec"],
["South America", "Brazil"]],
region1 = "Canada", region2 = "South America"
Output: "Earth"

Example 3:

regions = [[United States, West Coast, East Coast],
          [West Coast, California, Arizona]
          [East Coast, New York, Ohio]

region1 = New York
region2 = Ohio
Output: East Coast

Example 4:

regions = [[United States, West Coast, East Coast],
          [West Coast, California, Arizona]
          [East Coast, New York, Ohio]

region1 = New York
region2 = California
Output: United States

Example 5: INVALID!

"If you are given regions r1, r2, and r3 such that r1 directly includes r3, it is guaranteed there is no r2 such that r2 includes directly  r3."

regions = [[NATO, United States, Canada, Mexico]
          [United States, West Coast, East Coast],
          [Earth, United States, Canada]


Approach:
  brute force:
        [["Earth","North America","South America"],
        ["North America","United States","Canada"],
      ["United States","New York","Boston"],
        ["Canada","Ontario","Quebec"],
      ["South America","Brazil"]],


                             Earth
              North America           South America
      US                      CA            Brazil
NY          Boston          ON   Q

r1 = Q
r2 = NY

   1. convert this raw input into a graph (adjList)
        adjlist = {
          key: value
          Earth: [NA, SA]
          NA: [US, CA]
          US: [NY, Boston]
          CA: [ON, Q]
          SA: [Brazil]
        }
        vs inverted adjlist {} with children as key with parent as value
            NA: Earth
            SA: Earth
            US: NA
            CA: NA
            NY: US
            Boson: US
            ON: CA
            Q: CA
            Brazil: SA

    1.1 store the source
   2. traverse the graph to find a common ancestor for r1 and r2
          DFS to traverse
              base case:
                  1. if r1 and r2 are equal
                          return r1

              check if r1 (NA) is in inverted adjlist
                  parents = [NA, Earth]
                   R1 = Earth
               check if r2 (Q) is in inverted adjlist
                  parents = [Q, CA, NA]
                  R2 = NA


  r1 = NA
  r2 = Q


    [["Earth","North America","South America"],
        ["North America","United States","Canada"],
      ["United States","New York","Boston"],
        ["Canada","Ontario","Quebec"],
      ["South America","Brazil"]],
*/
// correct solution
/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
  let graph = new Map();

  for (let region of regions) {
      let parent = region[0];
      for (let i = 1; i < region.length; i++) {
          let child = region[i];
          graph.set(child, parent);
      }
  }

  let parentsOfRegion1 = new Set();
  parentsOfRegion1.add(region1);

  while (graph.get(region1)) {
      parentsOfRegion1.add(graph.get(region1));
      region1 = graph.get(region1);
  }

  while (!parentsOfRegion1.has(region2)) {
      region2 = graph.get(region2);
  }
  return region2;
};


//// incorrect solution
function findSmallestRegion(regions, region1, region2) {
  let graph = {};

  for (let i = 0; i < regions.length; i++) {
    let parent = regions[i][0];
    for (let j = 1; j < regions[i].length; j++) {
      let child = regions[i][j];
      graph[child] = parent;
    }
  }

  let source = "";
  for (let value of Object.values(graph)) {
    if (!Object.keys(graph).has(value)) {
      source = value;
    }
  }

  let parentsOfRegion1 = [];
  let parentsOfRegion2 = [];



  function dfsTraversal(region1, region2) {
    // base cases
    if (region1 === region2) return region1;

    if (graph[region1]) {
      if (graph[region1] === region2) {
        return region2;
      }
      parentsOfRegion1.push(graph[region1]);
      dfsTraversal(graph[region1], region2);
    }

    if (graph[region2]) {
      if (graph[region2] === region1) {
        return region1;
      }
      parentsOfRegion2.push(graph[region2]);
      dfsTraversal(region1, graph[region2]);
    }
  }

  return dfsTraversal(region1, region2);
}