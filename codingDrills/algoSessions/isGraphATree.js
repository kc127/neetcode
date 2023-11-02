/*
'''
Given an adjacency list of a directed graph, return "BINARY TREE" if it's a binary tree, "TREE" if it's any other type of tree, or "GRAPH" if it's neither.


EXAMPLE(S)
     1
   /   \
 2      3
/
4

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [],
        4: []
    }
) -> BINARY TREE

--------------

     1        5
   /   \
 2     3
/
4

possibleRoots starts with [1,2,3,4,5]
start at 1 = [2,3,4,5]
go to node 2= [3,4,5]
go to node 3= [4,5]
go to node 4= [5]
done traversing
possibleRoots = [5]

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [],
        4: [],
        5: [],
    }
) -> GRAPH

keys set = [1, 5]

--------------

     1
   /   \
 2     3
   \  /
     4

input:
classify(
    {
        1: [2, 3],
        2: [4],
        3: [4],
        4: [],
    }
) -> GRAPH




      1
   /  |   \
 2     3   5
/
4

input:
classify(
    {
        1: [2, 3, 5],
        2: [4],
        3: [],
        4: []
    }
) -> TREE


1
input:
classify(
    {
        1: [],
    }
) -> Binary Tree


1
|
2
input:
classify(
    {
        1: [2],
    }
) -> Binary Tree

THINGS WE KNOW/CHECK FOR
- if there is a node with more than two children, it cannot be a binary tree
- if there is an unconnected node or there is more than one root node, it is a graph
- if there is a cycle, it is a graph

APPROACH

- Detect Graph
    create a keys set
    traverse the values of the adj list,
      if the value is present in the keys set, delete it
    return GRAPH if the keys set size is greater than 1
- Detect Cycle
    Maintain a visited set as we do BFS traversal on the adjacency list

- Detect Tree
    traverse through adjacency list
    if there is a node with more than two children (array length is greater than 2), return TREE
    else return BINARY TREE

Approach combined:

- Detect Graph
    create a keys set
    traverse the adj list,
      if the value is present in the keys set, delete it
    return GRAPH if the keys set size is greater than 1

set possibleRoots = /* initialize with all keys //
set visitedNodes

- Traversal through the adj list
    - if the node isn't present in the visitedNodes
        add the node to visitedNodes
      else
        cycle detected (meaning we've already visited node), return GRAPH immediately
    - if the node is in the possibleRoots set,
        delete it
    - if node has more than 2 children, we know NOT binary tree. Store as boolean var

    return GRAPH if possibleRoots size is greater than 0
    If completed traversal, and boolean is true
      - return TREE
    ELSE
      - return binary tree


FUNCTION SIGNATURE
function classify(adjList) {
def classify(adjList: dict[int, list[str]]) -> str:
'''
*/

function classify(adjList) {
  let possibleRoots = new Set(Object.keys(adjList));
  let visitedNodes = new Set();
  let isBinary = true;

  let queue = [...Object.keys(adjList)[0]];

  while(queue.length > 0) {
    let key = queue.shift().toString();

    if (!visitedNodes.has(key))  {
      visitedNodes.add(key)
    } else {
      return 'GRAPH';
    }

    if (possibleRoots.has(key)) possibleRoots.delete(key);
    if (adjList[key].length > 2) isBinary = false;

    queue.push(...adjList[key]);
  }

  if (possibleRoots.size > 0) return 'GRAPH';
  return isBinary ? 'BINARY TREE' : 'TREE';
}

// Time and Space: O(n) where n is all keys and all values / O(k+v)

//TEST

let adj1 = {
  1: [2, 3, 5],
  2: [4],
  3: [],
  4: [],
  5: []
}
console.log(classify(adj1), 'expect tree');

let adj2 = {
  1: [2, 3],
  2: [4],
  3: [],
  4: []
}
console.log(classify(adj2), " expect BINARY TREE");


let adj3 = {
  2: [4],
  1: [2, 3],
  3: [],
  4: []
}
console.log("should be binary tree")
console.log(classify(adj3), 'expect BINARY TREE');

let adj4 = {
  1:[]
}

console.log(classify(adj4), " expect BINARY TREE");


let adj5 = {
  1:[2],
  2:[]
}

console.log(classify(adj2), " expect BINARY TREE");


let adj6 = {
  1: [2, 3],
  2: [4],
  3: [4],
  4: [],
}
console.log(classify(adj6), "expected Graph");
