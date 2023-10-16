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