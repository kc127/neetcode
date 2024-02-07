#/*
'''
Question :

Given a Binary Tree (BT), convert it to a Doubly Linked List (DLL) in place.
The left and right pointers in nodes are to be used as previous and next pointers, respectively, in the converted DLL.

The order of nodes in DLL must be the same as the in-order traversal of the given Binary Tree. The first node of the in-order traversal (leftmost node in BT) must be the head node of the DLL.

As an example, the tree:
   2
  ↙ ↘
 1   3



starts out with the left and right pointers in the root node set, but the left and right pointers of both children are null since they are the leaf nodes. We're going to re-thread this by updating the pointers so that the nodes are now shaped like a doubly linked list:
null ← 1 ↔ 2 ↔ 3 → null

Now, only the left pointer of the 1 node is null, and the right pointer points to node 2. The right pointer of the 3 node is also still null, but its left pointer points to node 2. The head of the list that should be returned is a pointer to the 1 node.

Note, that the examples here are all binary search trees because the in-order traversal will result in a sorted output list. This makes constructing and checking the code easy, but nothing in this solution should depend on the input being a BST.


EXAMPLE(S)
    3
  ↙  ↘
1      5
 ↘    ↙
  2  4

bt2dll(t) = "1 <-> 2 <-> 3 <-> 4 <-> 5"

      1
  2        3
        4    5

2 -> <-1 -> <-4 -> <- 3 -> <-5
if left node
  the

Edge cases/Assumptions/Observations/Counter questions :

Convert BT to DLL in-place
Approach:

  inOrder(root)
      if root is null return

  inOrder(root.left)
  add root.value to output
  inOrder(root.right)
  inOrder(root, parent, direction)
      // some other base

  inOrder(root.left, root ,true)
  if direction is left
    root.next = parent // we need to be careful about null checks
    parent.prev = root
  else direction is right
    root.prev = parent  // we need to be careful about null checks
    parent.next = root
  inOrder(root.right, root, false)



       1
  2        3

leftSubtree = func(root.left)
rightSubtree = func(root.right)

  leftSubtree.next = root
  root.prev = leftSubtree
  root.next = rightSubtree
  rightSubtree.prev = root;

      1
  2        3
        4    5
ll1: 2 <> 1 <> 4 <> 3 <> 5

Recurisve call returns linked list
traverse left
  if not null attach to before current node
traverse right
  if not null attach to after current node

return first and last node of ll

FUNCTION SIGNATURE
class Node {
  constructor(value, left = null, right = null, next = null, prev = null) {
    this.value = value;
    this.left = left;
    this.right = right;
    this.prev = prev;
    this.next = next;
  }
}

function bt2dll(root,next) {

class Node:
    def init(self, value = 0, left = None, right = None):
        self.left = left
        self.right = right
        self.value = value

def bt2dll(root: Node, next: Node = None) -> Node:
'''
*/

  //      1
  // 2          3

  //  null<-2 <-> 1 <-> 3-> null


  // returns tail of DLL
  function bt2dllTail(root, prev= null){
    if(!root) return null;

    if(root.left){
      prev = bt2dllTail(root.left,prev);
    }

    root.prev = prev;
    if(prev) prev.next = root;

    if(root.right){
      root = bt2dllTail(root.right, root);
    }
    return root;
  }

  // 3<->1<->2

  function bt2dllHead(root, next= null){
    if(!root) return null;

    // process right side first
     if(root.right){
       next = bt2dllHead(root.right, next)
     }

     root.next = next;
     if(next) {
       next.prev = root;
     }
    // process left side

    if(root.left){
       root = bt2dllHead(root.left, root);
    }
    return root;
  }

  // https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/description/
  // https://leetcode.com/discuss/interview-question/algorithms/125012/flatten-a-multi-level-linked-list
  // https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/