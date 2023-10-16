/*
'''
❓ PROMPT
Given a starting node in a graph and a target, traverse the graph using DFS and return true if a node with the target value exists, and false otherwise

assumptions/edge cases/observations:
1. cycles: YES!
2. starting node null or one node : YES!
3. Directed: YES because no guarantee of going back up to the parent
4. Can duplicate targets be present: YES, return any one
5. If target not in the graph: return false


DFS (visited set + recursion)

      create a visited set to store already seen nodes
      BASE CASE: if node is target => return TRUE
      add curr node to visited set
      for each child of node's children
        if child not in visited
          recurse on child node

BFS (visited set + iterative (queue: FIFO))

      create a visited set
      create a queue
      while queue is not empty
          remove first node and set as curr node
          if curr node is target => return TRUE

          add curr node to visited
          for each child of curr node's children
            if child not in visited
                add to queue

        return false


Example(s)
  1
 / \
2   3
node.hasPathTo(3) == true
node.hasPathTo(4) == false

12
|
18
| \
1  4 - 3
   |
   9
node.hasPathTo(9) === true
node.hasPathTo(14) === false


  12
node.hasPathTo(12) === false

null
node.hasPathTo(12) === false


hasPathTo(target) { // Alternatively, if it's written inside the Node class

*/

class GraphNode{
  constructor(value = 0, children = []) {
    this.children = children;
    this.value = value;
  }

  hasPathToDFS(target) {
    let visited = new Set();

    function hasPath(node, target) {
      if(node.value === target) {
        return true;
      }
      visited.add(node);

      for (let child of node.children) {
        if (!visited.has(child) && hasPath(child, target)) {
          return true;
        }
      }
      return false;
    }
    return hasPath(this, target);
  }

  hasPathToBFS(target) {
    let visited = new Set();
    let queue = [this];

    while (queue.length) {
      let curr = queue.shift();

      if (curr.value === target) {
        return true;
      }

      visited.add(curr);
      for (let child of curr.children) {
        if (!visited.has(child)) {
          queue.push(child);
        }
      }
    }
    return false;
  }
}

let node = new GraphNode(1, [new GraphNode(2), new GraphNode(3)])
console.log(node.hasPathToBFS(3) === true)
console.log(node.hasPathToBFS(4) === false)

node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(1), new GraphNode(4, [new GraphNode(3), new GraphNode(9)])])
])
console.log(node.hasPathToBFS(9) === true)
console.log(node.hasPathToBFS(14) === false)
console.log(node.hasPathToBFS(0) === false)
console.log(node.hasPathToBFS(12) === true)

node = new GraphNode(1)
console.log(node.hasPathToBFS(1) === true)
console.log(node.hasPathToBFS(2) === false)

node = new GraphNode(1, [new GraphNode(2), new GraphNode(3)])
let cycleNode = new GraphNode(5, [node])
node.children.push(cycleNode)
console.log(node.hasPathToBFS(1) === true)
console.log(node.hasPathToBFS(2) === true)
console.log(node.hasPathToBFS(5) === true)
console.log(node.hasPathToBFS(4) === false)

node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(5), new GraphNode(5, [new GraphNode(5), new GraphNode(5)])])
])
console.log(node.hasPathToBFS(12) === true)
console.log(node.hasPathToBFS(5) === true)
console.log(node.hasPathToBFS(4) === false)

let cycleNode1 = new GraphNode(3)
let cycleNode2 = new GraphNode(2)
cycleNode1.children.push(cycleNode2)
cycleNode2.children.push(cycleNode1)
node = new GraphNode(12, [
  new GraphNode(18, [new GraphNode(5), cycleNode1, new GraphNode(5, [
    new GraphNode(5), cycleNode2, new GraphNode(5)])])])
console.log(node.hasPathToBFS(12) === true)
console.log(node.hasPathToBFS(2) === true)
console.log(node.hasPathToBFS(3) === true)
console.log(node.hasPathToBFS(5) === true)
console.log(node.hasPathToBFS(4) === false)
