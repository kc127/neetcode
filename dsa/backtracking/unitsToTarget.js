function solution(units, target) {
  let results = [];
  let uniqueSet = {};
  function backtrack(result = []) {
      let sum = result.reduce((a, total) => a + total, 0);
      if (sum === target) {
          let charStr = result.sort((a,b) => a - b);
          charStr.join('')
          if (uniqueSet[charStr] === undefined) {
              results.push([...result]);
              uniqueSet[result.join('')] = 1;
          }
          return;
      } else if (sum > target) {
          return;
      }

      for (let i = 0; i < units.length; i++) {
          if (units[i] <= target) {
              result.push(units[i]);
              backtrack(result);
              result.pop();
          }
      }
  }
  backtrack();
  console.log(uniqueSet)
  return results;
}
/*

                                 1
                          1              2
                      1       2
                  1       2


      input                                    line
      [], false                                result = [1], line 14 = backtrack([1], false) =
      [1], false                               result = [1, 1], line 14 = backtrack([1, 1], false) =
      [1,1], false                             result = [1, 1, 1], line 14 = backtrack([1, 1, 1], false) =
      [1, 1, 1], false                         result = [1, 1, 1, 1], line 14 = backtrack([1, 1, 1, 1], false) = return, result = [1,1,1], result = [1, 1, 1, 2], backtrack([1, 1, 1, 2])
      [1, 1, 1, 1], false                      results = [[1, 1, 1, 1], reachedTarget = true, return
*/

class Node {
    constructor(value, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }

  /*

  1. Find the largest value [ find one location  or find the exit ]
  2. Find all the distinct leaf node values [ find a set of locations or find all the dead ends or find all the exits ]
  3. Find the path with the largest root to leaf sum [ find a path - shortest or longest]
  4. Find all the numbers represented by root leaf paths [find all the paths to the dead ends or find all the paths to the exit].

  Backtracking => given a set of choices, make a choice to move forward to get to a point

  */

  /*

  BACKTRACKING:

  */

  function findLeaves(root) {
    let heightMap = {};

    function postOrder(node) {
      if (node === null) {
        return 0;
      }

      let leftSubtree = postOrder(node.left);
      let rightSubtree = postOrder(node.right);
      let currHeight = 1 + Math.max(leftSubtree, rightSubtree);

      if (heightMap[currHeight] === undefined) {
          heightMap[currHeight] = [node.value];
      } else {
          heightMap[currHeight].push(node.value);
      }
      return currHeight;
    }
    postOrder(root);
    return Object.values(heightMap);
    /**
     * this will print values in random order, Try to store max height as well in a global variable, once the map is populated,
  in the parent function iterate over height range and print the nodes at each height (calculated from leaves)
     */
  }

  let tree1 = new Node(1,
                        new Node(2,
                                  new Node(4),
                                  new Node(5)),
                        new Node(3))

  console.log(findLeaves(tree1))

  /*
  '''
  ❓ PROMPT
  Determine if a binary tree is a valid binary search tree.

  A binary search tree is a binary tree where for each node, all values in the left subtree are smaller than the current node, and all values in the right subtree are greater than the current node.

  Example(s)
       10 <--- root
    5      15
  3  7   12  17
  isValidBST(root) == True

       30 <--- root
   18      50
  3  7   33  77
  isValidBST(root) == False
  Explanation: 7 is smaller than 18, even though it's the right child.

       30 <--- root
   18      50
  3  40   33  77
  isValidBST(root) == False
  Explanation: 40 is larger than 30, even though it's in the left subtree.

    3 <--- root
  1   5
  isValidBST(root) == True

      3 <--- root
   1     5
     4
  isValidBST(root) == false

  🔎 EXPLORE
  List your assumptions & discoveries:
  - one node tree or null tree => yes, return false;
  - no duplicates
  - values are integers
  - unbalanced tree

  Insightful & revealing test cases:


  🧠 BRAINSTORM
  What approaches could work?
  Algorithm 1: Recursion (DFS)
  Time: O()
  Space: O()


                          5 <
                  2               6


  if (node.value > node.left.value && node.value < node.right.value)
    return true;
  else
    return false;

  function preorder (root, values = []) {
    if (!root) {
      return 0;
    }
    values.push(root.value);
    preorder(root.left, values);
    preorder(root.right, values);
    return values;
  }


  📆 PLAN
  🛠️ IMPLEMENT
  🧪 VERIFY

  */
  function preorder (root, values = []) {
    if (!root) {
      return 0;
    }
    values.push(root.value);
    preorder(root.left, values);
    preorder(root.right, values);
    return values;
  }

  function inOrder (root, values = []) {
    if (!root) {
      return 0;
    }

    inOrder(root.left, values);
    values.push(root.value);
    inOrder(root.right, values);
    return values;
  }

  function postOrder (root, values = []) {
    if (!root) {
      return 0;
    }

    postOrder(root.left, values);
    values.push(root.value);
    postOrder(root.right, values);
    return values;
  }

  function isValidBST(root, min = Infinity, max = -Infinity) {
    if (!root) return true;

    if (root.left) {

    }
    if (root.right) {

    }

    return isValidBST(root.left) && isValidBST(root.right);
  }


  // console.log(isValidBST(null))
  // console.log(isValidBST(new Node(5)))

  //   5
  // 1
  console.log(isValidBST(new Node(5, new Node(1))))

  //   5
  // 10
  console.log(isValidBST(new Node(5, new Node(10))) === false)

  //  5
  //   10
  console.log(isValidBST(new Node(5, null, new Node(10))))

  //  5
  //   1
  console.log(isValidBST(new Node(5, null, new Node(1))) === false)

  //   5
  // 1  10
  console.log(isValidBST(new Node(5, new Node(1), new Node(10))))

  //   5
  // 10  1
  console.log(isValidBST(new Node(5, new Node(10), new Node(1))) === false)

  //      10
  //   5     15
  // 3   7 12   17
  let root = new Node(
    10,
    new Node(5,
      new Node(3), new Node(7)),
    new Node(15,
      new Node(12), new Node(17))
  )
  console.log(isValidBST(root))

  //      10
  //   5     15
  // 2   16 3   20
  root = new Node(
    10,
    new Node(5,
      new Node(2), new Node(16)),
    new Node(10,
      new Node(3), new Node(20))
  )
  console.log(isValidBST(root) === false)

  //      10
  //   15     20
  // 30  40  1  12
  root = new Node(
    10,
    new Node(15,
      new Node(30), new Node(40)),
    new Node(20,
      new Node(1), new Node(12))
  )
  console.log(isValidBST(root) === false)

  //   10
  // 1    20
  //  4 15
  root = new Node(
    10,
    new Node(1, null,
      new Node(4)),
    new Node(20,
      new Node(15))
  )
  console.log(isValidBST(root))

  //   10
  // 1    20
  //  99 99
  root = new Node(
    10,
    new Node(1, null,
      new Node(99)),
    new Node(20,
      new Node(99))
  )
  console.log(isValidBST(root) === false)
