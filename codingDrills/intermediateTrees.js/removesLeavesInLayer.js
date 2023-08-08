/*
'''
Question :

Given the root of a binary tree, collect a tree's nodes by level from the
leaves up.

Return an array of arrays representing the values of the leaves at each
iteration.

The result will have the leaves of the tree (no matter the depth from the root) in the first array (index zero), and then the root will be in the last by itself. See the examples below.


EXAMPLE(S)
Input:
    1
   / \
  2   3
 / \
4   5

Output:
[[4, 5, 3], [2], [1]]


Input:
        1
       / \
      2   3
     / \
    4   5
   /
  6



Output:
[[6, 5, 3], [4], [2], [1]]

Edge cases/Assumptions/Observations :
- Tree is never empty
- Order of the leaves in bucket doesn't matter
- values are not unique


Approach :

recursion(node, result)
    if node is None:
        return height of 0

    # for leaf nodes specifically
    if node.left is None and node.right is None :
                if length of result != height:
                     append [node.value] to result
                else
                     append node.value to result[height-1]
        return height of 1


    height = 1 + max(
        recursion(node.left),
        recursion(node.right)
    )

    # add the node to the correct index of the result based on the height
    if length of result != height:
        append [node.value] to result
    else
        append node.value to result[height-1]
    return height


traversal :

   leftSubtree
   rightSubtree
   currentHeight = max(leftSubtree, rightSubtree)+1
   store the current node at currentHeight in the map





FUNCTION SIGNATURE
def findLeaves(root: TreeNode) -> List[List[int]]:

'''

'''
Kanchan:

function findLeaves(root) {
  let heightMap = {};

  function postOrder(node) {
    if (!node) {
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
}

Try to store max height as well in a global variable, once the map is populated,
in the parent function iterate over height range and print the nodes at each height (calculated from leaves)


    if the bucket is not present, we add a bucket in our parent container (the one which stores final answer)
    if len(result) < height:
            result.append([node.value]) #creating new bucket

    otherwise, we add node's value to it's corresponding bucket number
    else:
            result[height-1].append(node.value) #adding stuff to existing bucket

Follow up :
https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
https://leetcode.com/problems/amount-of-time-for-binary-tree-to-be-infected/



'''



class TreeNode:
    def __init__(self, value, left = None, right = None):
        # meow meow
        self.value = value
        self.right = right
        self.left = left


from typing import List
#Ce'Niyah
def findLeavesCeNiyah(root: TreeNode) -> List[List[int]]:
    results={}
    def leaves(root, results):
        if root is None:
            return 0

        if root.left is None and root.right is None:
            leavesdict(root,1, results)

        height = 1 + max(leaves(root.left, results), leaves(root.right,results))

        leavesdict(root,height - 1, results)
    leaves(root, results)
    resultArray = []
    for leaves in results.values():
        resultArray.append(leaves)
    return resultArray

def leavesdict(root,index, results):
    if index in results:
        level_array = results.get(index)
        level_array.append(root.value)
        results[index] = level_array
    else:
        results[index] = [root.value]







#Lan
def findLeavesLan(root):
    def recursion(node, result):
        if node is None:
            return 0

        height = 1 + max(
            recursion(node.left, result),
            recursion(node.right, result)
        )

        # add the node to the correct index of the result based on the height
        # print(f"current_node {node.value} has height of {height}")

        if len(result) < height:
            result.append([node.value]) #creating new bucker
        else:
            result[height-1].append(node.value) #adding stuff to existing bucket
        return height

    result = [] #container of all buckets
    recursion(root, result)
    return result





#Thara
def findLeaves(root: TreeNode):
    resultMap = {}
    maxHeight = float('-inf')
    def findHeights(node: TreeNode):
        if node is None:
            return 0
        height = 1 + max(findHeights(node.left), findHeights(node.right))
        nonlocal maxHeight
        maxHeight = max(maxHeight,height)
        if node.left is None and node.right is None:
            if height in resultMap:
                resultMap[height].append(node.value)
            else:
                resultMap[height] = [node.value]
            return 1
        if height in resultMap:
            resultMap[height].append(node.value)
        else:
            resultMap[height] = [node.value]
        return height
    findHeights(root)
    result = []
    for i in range(1, maxHeight+1):
        result.append(resultMap[i])

    return result





# Vitor
'''
I am very slow :'( Still trying to understand but will do after session

def findLeaves(root: TreeNode) -> List[List[int]]:
    # does not work because of repeats will have to give each node a unique value then remove
    q = []
    q.append(root)
    dic = {}
    while q:
        node = q.pop()
        if node.left:
            q.append(q.left)
        if node.right:
            q.append(q.right)


'''

























# Test cases :
root = TreeNode(1,
  TreeNode(2,
    TreeNode(4),
    TreeNode(5)
  ),
  TreeNode(3)
)
print(findLeaves(root) == [[4, 5, 3], [2], [1]])


root = TreeNode(1,
  TreeNode(2),
  TreeNode(3)
)
print(findLeaves(root) == [[2, 3], [1]])


root = TreeNode(1,
  TreeNode(2)
)
print(findLeaves(root) == [[2], [1]])

print(findLeaves(TreeNode(1)) == [[1]])

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