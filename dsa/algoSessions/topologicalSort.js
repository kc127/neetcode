vertex_list = [
  "Prepare kitchen", "Mix flour", "Mix wet ingredients", "Combine", "Put in oven", "Clean kitchen"
]
edge_list = [
  ("Prepare kitchen", "Mix wet ingredients"),
  ("Prepare kitchen", "Mix flour"),
  ("Mix flour", "Combine"),
  ("Mix wet ingredients", "Combine"),
  ("Combine", "Put in oven"),
  ("Combine", "Clean kitchen"),
]

// getTraversal(vertex_list, edge_list) -> "Prepare Kitchen" -> ....
// getPossibleSources(adjList) -> [node1, node2]

["Prepare Kitchen" -> "Mix Flour" -> "Combine" -> "Put in Oven" -> "Clean Kitchen" -> "Mix wet ingredients"]

["Put in oven", "Clean kitchen", "Combine", "Mix flour", "Mix wet ingredients", "Prepare kitchen"]


//     Combine
//   /         \
// Put in oven   Clean kitchen

// Kanchan
function getTraversal(vertex_list, edge_list) {

  function createAdjacencyList() {
    let adjList = {};
    for (let [source, dest] of edge_list) {
      if (adjList[source] === undefined) {
        adjList[source] = [dest];
      } else {
        adjList[source].push(dest);
      }
    }
  }

  function getPossibleSources(adjList) {
    let possibleSources = []
    let allVertices = Object.keys(adjList);
    let allValues = Object.values(adjList);

    let neighbors = new Set();
    for (let values of allValues) {
      neighbors.add([...values]);
    }

    for (let vertex of allVertices) {
      if (neighbors.has(vertex)) {
        continue;
      }
      possibleSources.push(vertex);
    }

    return possibleSources;
  }

  let adjList = createAdjacencyList();
  let allSources = getPossibleSources(adjList);

  let adjList = createAdjacencyList();

  let result = [];
  let visited = new Set();

  function findPathDFS(node, target) {

    function hasPath(node) {
      if (!adjList[node] || adjList[node].length === 0) {
        result.unshift(node);
        return;
      }
      if (node === target) {
        return;
      }

      visited.add(node);
      for (let neighbor of adjList[node]) {
        if (!visited.has(neighbor)) {
          hasPath(neighbor);
        }
      }
      result.unshift(node);
    }
    hasPath(node);
  }

  findPathDFS(node, target);
  return result;
}




////////////////
function getAdjacencyList(vertexList, edgeList) {
  const adjacencyList = vertexList.reduce((acc, vertex) => {
    acc[vertex] = []
    return acc
  }, {})

  for (let edge of edgeList) {
    adjacencyList[edge[0]].push(edge[1])
  }

  return adjacencyList
}

function getPossibleSources(adjacencyList) {
  const allVerticesWithIncomingEdges = Object.values(adjacencyList)
    .reduce((acc, vertices) => {
      for (let vertex of vertices) acc.add(vertex)
      return acc
    }, new Set())

  return Object.keys(adjacencyList)
    .filter(vertex => !allVerticesWithIncomingEdges.has(vertex))
}

function getTraversal(vertexList, edgeList) {
  const adjacencyList  = getAdjacencyList(vertexList, edgeList)
  const possibleSources = getPossibleSources(adjacencyList)
  const result = []

  function dfs(vertex) {
    for (let neighbor of adjacencyList[vertex]) dfs(neighbor)
    result.push(vertex)
  }

  dfs(possibleSources[0])

  return result
}


/////////////////////////////////////

const edgesAsAdjList = (edges) => {
  let graph = {};
  for (let i=0; i<edges.length; ++i) {
    let fromNode = edges[i][0];
    let toNode = edges[i][1];
    if (fromNode in graph) {
      graph[fromNode].push(toNode);
    } else {
      graph[fromNode] = [toNode];
    }
  }
  return graph;
}

const topSort = (edges) => {
  let graph = edgesAsAdjList(edges);
  let incomingNodes = {}
  for (const [source, neighbors] of Object.entries(graph)) {
    for (const neighbor of neighbors) {
      if (neighbor in incomingNodes) {
        incomingNodes[neighbor] += 1
      } else {
        incomingNodes[neighbor] = 1
      }
    }
  }
  let sources = [];
  for (const node of Object.keys(graph)) {
    if (incomingNodes[node] === 0) {
      sources.push(node);
    }
  }
}


