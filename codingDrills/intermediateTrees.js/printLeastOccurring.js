/*
'''
Find Least Occurring Node

Given a binary tree with node values represented as integers, find and return the least occurring tree node value (eg: 3).

You can assume there will always be a valid answer (no duplicate frequencies or invalid arrangements).

[x] EXPLORE
[ ] BRAINSTORM
PLAN
IMPLEMENT
VERIFY

EXAMPLE(S)
      1
  2       _
2   _   _   _
should return Node(1)

      1
  1       1
1   1   1   1
should return Node(1)

  9
_   _
should return Node(9)

        1
    2        3
          2      3
                    3
should return Node (1)

Brainstorm:

  Idea 1: Object to keep track of frequencies + DFS Traversal
          Time =  O(n) where n represents all the nodes in the tree
          Space = O(n) because of the object

          O(1) space ?? Is it even possible ?

  Idea 2: Iterative BFS/DFS + Object


Plan:
  use a hashmap to store frequencies;
  leastFrequent -> null

  traverse tree DFS
    increment frequency in hashmap

  iterate over hashmap looking for smallest frequency
    if leastFrequent is null
      leastFrequent = node
    if node frequency < leastFrequent
      leastFrequent = node

  return leastFrequent

FUNCTION SIGNATURE
function findLeastOccurringNode(root) {
'''
*/
function findLeastOccurringNode(root) {
  let freqMap = {};
  let leastFreqNodeValue = null;

  function dfs(node) {
    if (!node) return;
    freqMap[node.value] = (freqMap[node.val] || 0) + 1;
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  for (let node in freqMap) {
    if (leastFreqNodeValue === null) leastFreqNodeValue = node;
    if (freqMap[node] < freqMap[leastFreqNodeValue]) leastFreqNodeValue = node;
  }
  return leastFreqNodeValue;
}

/* official solution */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findLeastOccurringNode(root) {
  const frequencies = new Map();

  function dfs(node) {
    if (!node) return;

    frequencies.set(node.val, (frequencies.get(node.val) || 0) + 1);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  let resultVal;
  let currentMin = Infinity;

  for (const [nodeVal, currentFrequency] of frequencies) {
    if (currentFrequency < currentMin) {
      resultVal = nodeVal;
      currentMin = currentFrequency;
    }
  }

  return resultVal;
}

class Node{
  constructor(value, left=null, right=null){
  this.value = value;
  this.left = left;
  this.right = right;
  }
}

const test1 = new Node(9);

const test2 = new Node(1,
  new Node(2,
    new Node(2)))


const test3 = new Node(1,
  new Node(1,
    new Node(1),
    new Node(1)),
  new Node(1,
    new Node(1),
    new Node(1)))


console.log(findLeastOccurringNode(test1), "---> 9")
console.log(findLeastOccurringNode(test2), "---> 1")
console.log(findLeastOccurringNode(test3), "---> 1")
