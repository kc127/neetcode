/*
'''
Suppose you're a school headmaster and somebody has drafted a course list for a new program. Each course has an ID associated with it, and they may have prerequisites.

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.


EXAMPLE(S)
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.


FUNCTION SIGNATURE
function courseSchedule(numCourses, prerequisites)
'''
Approach/Brainstorm:
The trick here is to leverage the fact that if you do a depth first search traversal from a node, you can detect cycles if you end up in a node where you started. In computer science terms, this is called a back edge.
Similar to backtracking, we store a set of nodes visited from the start of a DFS call. If we end up in a node we already processed, we have a cycle

O(V + E) runtime
O(V + E) space

*/

function courseSchedule(numCourses, prerequisites) {
  const graph = new Map();

  const indegree = Array(numCourses).fill(0);
  const queue = [];

  const coursesTaken = [];

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indegree[e]++;
  }

  // Push our starting/no-dependency nodes into a queue
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  // Process our course dependencies
  while (queue.length) {
    // Dequeue course
    const course = queue.shift();

    // Push to order
    coursesTaken.push(course);

    // Track indegree edges
    const dependentCourses = graph.get(course);

    if (dependentCourses) {
      for (const dependentCourse of dependentCourses) {
        indegree[dependentCourse]--;
        if (indegree[dependentCourse] === 0) queue.push(dependentCourse);
      }
    }
  }

  // Return results at end
  return numCourses === coursesTaken.length;
};


////
/*
'''
Suppose you're a school headmaster and somebody has drafted a course list for a new program. Each course has an ID associated with it, and they may have prerequisites.

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

Assumptions/Edge Cases/Observations:
1. Possible to have prereqs not equal to numCourses
2. numCourses is at least 1
3. Each elem of prereq array is length 2.
4. Raw input create a Directed Acyclic Graph situation.
5. Prereq array is not in order

EXAMPLE(S)
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false

    invertedAdjList = 0: [1]
                      1: [0]

Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

Input: numCourses = 3, prerequisites = [[1,0]]
Output: false

Input: numCourses = 1, prerequisites = [[1,0]]
Output: true

Input: numCourses = 1, prerequisites = [[1,0], [0,1]]
Output: false

Input: numCourses = 5, prerequisites = [[2,0],[2,1],[3,2],[4,2]]
Output: true

                0       1
                 \     /
                    2
                  /   \
                3       4

    adjList = vertex to neighbors
              0: [2]
              1: [2]
              2: [3, 4]
              3: []
              4: []

    invertedAdjlist
            course: prereq
            (child): (parent)
            0: []
            1: []
            2:[0,1]
            3:[2]
            4:[2]


Approach:
    Detect a cycle

      1. convert the input into Inverted adjacency list
      2. detect the source (a vertex without any incoming edges)
            [0, 1]
      2. do dfs traversal
            for each vertex in the invertedAdjlist
                dfs(vertex)

          dfs:
            if curr vertex is in visited, return false

            add curr vertex to visited

            for each neighbor of vertex's neighbors
                  dfs(neighbor)


FUNCTION SIGNATURE
function courseSchedule(numCourses, prerequisites)
'''
*/


function courseSchedule(numCourses, prerequisites) {
  const graph = new Map();

  const indegree = Array(numCourses).fill(0);
  const queue = [];

  const coursesTaken = [];

  for (const [v, e] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }

    indegree[e]++;
  }
  console.log(graph);
  // Push our starting/no-dependency nodes into a queue
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }
  console.log("queue", queue)
  console.log("indegree", indegree)
  // Process our course dependencies
  while (queue.length) {    // queue = [1]
    // Dequeue course
    const course = queue.shift();   // queue = []

    // Push to order
    coursesTaken.push(course);    // coursesTaken = 0, 1

    // Track indegree edges
    const dependentCourses = graph.get(course);   // []

    if (dependentCourses) {
      for (const dependentCourse of dependentCourses) {
        indegree[dependentCourse]--;
        if (indegree[dependentCourse] === 0) queue.push(dependentCourse);
      }
    }
  }

  // Return results at end
  return numCourses === coursesTaken.length;
};


console.log(courseSchedule(5, [[2,0],[2,1],[3,2],[4,2]]))





 var canFinish = function(numCourses, prerequisites) {
  const graph = new Map();
  for (let i = 0; i < numCourses; i++) {
      graph.set(i, []);
  }

  for (let [course, prereq] of prerequisites) {
      graph.get(course).push(prereq);
  }

  console.log('graph', graph)

  const visited = Array(numCourses).fill(0);

  const dfs = (course) => {
      if (visited[course] === 1) return false;
      if (visited[course] === 2) return true;
      visited[course] = 1;

      for (let prereq of graph.get(course)) {
          if (!dfs(prereq)) return false;
      }

      visited[course] = 2;

      return true;
  }

  for (let course = 0; course < numCourses; course++) {
      if (!dfs(course)) return false;
  }

  return true;
};


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
  // create adj list
  const graph = new Map();

  for (let i = 0; i < numCourses; i++) {
      graph.set(i, []);
  }

  for (let [course, prereq] of prerequisites) {
      graph.get(course).push(prereq);
  }

  const visited = new Set();

  const dfs = (course) => {
      if (visited.has(course)) return false;
      visited.add(course);

      for (let prereq of graph.get(course)) {
          if (!dfs(prereq)) return false;
      }

      visited.delete(course);

      return true;
  }

  for (let [course] of prerequisites) {
      if (!dfs(course)) return false;
  }

  return true;
};