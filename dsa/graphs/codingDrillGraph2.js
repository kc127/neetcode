/*
Concept : Graphs
- data structure with vertex and edges
- vertex -> nodes
- edge -> connection between nodes (pointers)

Building unit : node
the way the nodes are connected differs linked list vs trees vs graphs

Neighbor -> nodes connected to a given node
directed/undirected edge
acyclical/cyclical
DAG -> directed acyclical graph
weight -> weights on edges / cost of edge/time of edge different variations

Graph representation :
Q : Write a representation of a graph node

vertex_list: [1, 2, 3, 4, 5]
edge_list: [(1, 2), (1, 3), (3, 4), (4, 2), (4, 5)]


Directed graphs will be specified always in the question
edge u,v -> u is the source , v is the destination

graph = {
  'A' : ['B','C'],
  'B' : ['D', 'E'],
  'C' : ['F'],
  'D' : [],
  'E' : ['F'],
  'F' : []
}


# top-down = there's an edge from node number N
# left-right = to node number X
graph = [
  #1  2  3  4  5
  [0, 1, 1, 0, 0], # 1
  [0, 0, 0, 0, 0], # 2
  [0, 0, 0, 1, 0], # 3
  [0, 1, 0, 0, 1], # 4
  [0, 0, 0, 0, 0], # 5
]

Travesal algos :

BFS and DFS



BFS :
If the solution isn't far from the root
If we want to gradually expand our search
If there's a dense number of neighbors and connections

DFS :
If the solution is far from the root
If there's a sparse number of neighbors
If we want to go deep down a path

 course 1  course 2
      course 3
course 3 is a pre-req for course 1


          A    B
          \    /
            C
        D         E


DFS :

def dfs(graph):
  visited = set() # Set to keep track of visited nodes.

  def explore(node):
      if node not in visited:
          visited.add(node)
          print(node)
          for neighbor in graph[node]:
              explore(neighbor)

  explore('A')

dfs(graph)




BFS :

def bfs(graph, node):
  visited = set() # Set to keep track of visited nodes.
  queue = []     #Initialize a queue

  visited.add(node)
  queue.append(node)

  while queue:
    s = queue.pop(0)
    print (s, end = " ")

    for neighbor in graph[s]:
      if neighbor not in visited:
        visited.add(neighbor)
        queue.append(neighbor)

bfs(graph, 'A')



Q : There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.

Example 1:

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

Example 2:

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation:
We visit room 0 and pick up key 1,3.
We then visit room 1 and pick up key 0,1,3 .
We then visit room 3 and pick up key 0.

Edge cases/Assumptions/Observations/Counter questions:
DFS and BFS both can be used


Approach :
BFS
DFS


*/




/*
Python

from collections import deque

class Node:
  def __init__(self, value, neighbours = []):
    this.value = value
    this.neighbors = neighbors

def checkrooms(matrix):
  def bfs(matrix, node):
    visited = set()
    deque = []
    visited.add(node)
    deque.append(node)
    while deque:
      s = deque.popleft()
      for neighbor in matrix[s]:
        if neighbor not in visited:
          visited.add(neighbor)
          deque.append(neighbor)
    return visited
rooms_visited = bfs(matrix, 0)
return len(rooms_visited) == len(matrix)
*/

class GraphNode{
  constructor(value, neighbors = []) {
    this.value = value;
    this.neighbors = neighbors;
  }
}


/*
class graphNode {
  int value;
  List<graphNode> neighbors;


}
 */

// BFS
// Time: O(V + E) because V(vertex) is number of rooms and E(edges) is the keys
// Space: O(V) because of the size of the queue and/or set 
function bfs(rooms, node = 0) {
  let visited = new Set();
  let queue = [];
  visited.add(node);
  queue.push(node);

  while (queue.length) {
     let curr = queue.shift();

     for (let neighbor of rooms[curr]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
     }
  }
  return visited.size === rooms.length;
}




// DFS

function dfs(rooms){
  let visited = new Set();

  function traverse(node){
    if(!visited.has(node)){
      visited.add(node);
    }
    for(let neighbor of rooms[node]){
      if(!visited.has(neighbor)){
        traverse(neighbor)
      }
    }
  }
  traverse(0)
  return rooms.length === visited.size
}

console.log("dfs: ",dfs([[1,3],[3,0,1],[2],[0]])) // RETURN FALSE
console.log("dfs: ",dfs([[1],[2],[3],[]])) // RETURN TRUE

// bfs
console.log("bfs:", bfs([[1,3],[3,0,1],[2],[0]])) // return false
console.log("bfs:", bfs([[1],[2],[3],[]])) // return true