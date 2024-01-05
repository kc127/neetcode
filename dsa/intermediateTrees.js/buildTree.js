/*
'''
Putting Up The Tree

Just like putting up an artificial holiday tree, in this problem, we'll build a tree from a box of parts. In our case, the box of parts will be a list of lists (nested arrays) that represent the edges between nodes.

* The index into the outer array identifies a node of the tree
* The inner array lists the nodes that are children of the current one
* The value at each node should be it's index in the original array
* For starters, you may assume that the tree will be a binary tree, the first index in the list is the left child, the second is the right.
* A null or None indicates a missing child

For example:

[
  0: [1, 2],
  1: [null, null], // or [None, None] for Python folks
  2: [] // assume null if missing
]

This describes a tree that is shaped like this:

   0
 /  \
1    2


As a follow up, extend this code to support N-ary trees, that is, a tree that allows an arbitrary number of children. How does this change the time complexity?


EXAMPLE(S)
     0
   /   \
  1     2
 /
3

input:
buildTree(
    [
      0: [1, 2],
      1: [3],
      2: [],
      3: []
    ]
) -> returns a pointer to the node with the value 0.

Verbal Explanation:
    Create a map of index to nodes.
    Create a set of possible roots.
    Fill this map with new nodes with values, but no child pointers are filled in yet.
    Fill in the set with all of the values
    Iterate through the input lists of lists
    with each list, look up the nodes in the map and fill in edges.
    remove values that appear in the edge lists, as they cannot be roots
    The one remaining value in the set of possible roots will give the key of the node. Use this to look up the root node and return it.

map:
    {
      0: [1, 2],
      1: [3],
      2: [],
      3: []
    }

set:
    [0,1, 2, 3]

for list of lists
    curr list = [1, 2]
    for 1 => [3]

-------------------------

     2
   /   \
  0     3
 /
1



input:
buildTree(
    [
     0:  [1],
     1:  [],
     2:  [0, 3],
     3:  []
    ]


    q = 1, 3
    num_nodes = len(q)

    let treeNode = new TreeNode()
    while q:
      # find parents
      let currChild = q.shift()

      for node, children in enumerate(input):
        for index, child in enumerate(children):
          if child == currChild:
            if index == 0:
              node.left == currChild
            if index == 1:
              node.right == currChild
            q.push(node)
  0
 /
1

 3

q =  3, 0


) -> returns a pointer to the node with the value 2.

in plain english
- initialize num node in result tree as 0
- make queue of nodes whose parents we need to find by looping through adj_lists and adding the empty lists and None lists ([], [None] [None, None])
- find the leaves => empty array is a leaf
                  => record the index of these leaves 1, 3
- find parent of leaves => find the recorded values from above in the input 2d array
                        => add leaf to parent
- stop when the number of nodes in result tree is the length of adj_lists

                  2
                /   \
               0     3
              /
            1

EXPLORE
in: 2d array where the inner arrays are edges of a tree, node index.left = adj_lists[index[0]] and node index.right = adj_lists[index[1]]
out: a pointer to thr root of the tree that adj_lists represents

Assumptions/Observations/Edge Cases:
1. Index is the value of the node

interesting tests:
adj_lists = [] -> None

adj_lists = [[]] ->
    0
  /   \
None  None

adj_lists = [[], [None, 0]] ->
  1
    \
      0

              0       1       2       3      4       5    6   7   8    9       10
adj_lists = [[1, 2], [3, 4], [5, 6], [7, 8],[9, 10], [],  [], [], [], [None], [None, None]]

                      0
                1                 2
          3          4      5           6
      7       8   9     10

BRAINSTORM


PLAN
IMPLEMENT
VERIFY

FUNCTION SIGNATURE
def buildTree(adj_lists) -> Node:
'''
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function buildTree(adjLists) {
  const nodeMap = new Map();
  const possibleRoots = new Set();

  // First, create the nodes with values, no edges. We don't
  // know which node is the root, so they all go into
  // the possible set.
  for (let i = 0; i < adjLists.length; i++) {
    nodeMap.set(i, new Node(i));
    possibleRoots.add(i);
  }
  /*
    nodeMap = {
      0: new Node(0),
      1: new Node(1),
      2: new Node(2),
      3: new Node(3),
      4: new Node(4)
    }

    possibleRoots = [0, 1, 2, 3, 4]
  */
  // Now go through the list again and update the pointers to
  // create the parent/child relationships. Children can't be the root,
  // so they can be removed from the possible root set.
  for (let i = 0; i < adjLists.length; i++) {

    // Fill in the edges
    const [left, right] = adjLists[i];
    const node = nodeMap.get(i);
    node.left = nodeMap.get(left);
    node.right = nodeMap.get(right);

    // Remove left and right from the possible roots set because
    // they cannot be the root.
    possibleRoots.delete(left);
    possibleRoots.delete(right);
  }

  // The one remaining value in the set is the value of the root.
  const rootVal = possibleRoots.values().next().value;
  return nodeMap.get(rootVal);
}