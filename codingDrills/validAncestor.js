/*
'''
Valid Ancestor

Given a binary tree of numbers, and two numbers, A and B, determine if A is an ancestor of B.


EXAMPLE(S)
  3
1   2
A=3 and B=1 returns true
A=3 and B=2 returns true
A=2 and B=3 returns false

Recursive approach:

  Base Cases:
    if A or B is null => return false
    if A is root, and B is root.left or root.right => return true
  Recursive Case:
    else
       return MAINFUNC(root.left, B) || MAINFUNC(root.right, B);

  3
1   2
   4 5
A=3 and B=5 returns true
A=2 and B=5 returns true
A=5 and B=2 returns false



FUNCTION SIGNATURE
function validAncestor(root, ancestor, descendent) {
def validAncestor(root: TreeNode, ancestor: int, descendent: int) -> bool:
'''
*/
class TreeNode{
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function validAncestor(root, ancestor, descendent) {
  if (!root) return false;
  if (ancestor === descendent) return false;

  if (root.value === ancestor) {
    return hasTarget(root.left, descendent) || hasTarget(root.right, descendent);
  }
  return validAncestor(root.left, ancestor, descendent) || validAncestor(root.right, ancestor, descendent);
}

function hasTarget(root, target) {
  if (!root) {
    return false;
  }
  if (root.value === target) {
    return true;
  }
  return hasTarget(root.left, target) || hasTarget(root.right, target);
}

/*
//   0
// 1   2
//    3 4
validAncestor(tree, 3, 4) returns false
            input         line
              0         hasTarget(1, 3) = false || hasTarget(2, 3)
              1         hasTarget(null, 3) = false || hasTarget(null, 3) = false = RETURNS false
              2         hasTarget(3,3) = true || hasTarget(4,2) = false = RETURN true
              3         RETURN true
*/
//    1
//  3   2
//     5 9
let tree = new TreeNode(1,
  new TreeNode(3, null, null),
  new TreeNode(2,
     new TreeNode(5, null, null),
     new TreeNode(9, null, null)
  )
)
console.log(validAncestor(tree, 2, 2) == false)
console.log(validAncestor(tree, 1, 2) == true)
console.log(validAncestor(tree, 1, 7) == false)
console.log(validAncestor(tree, 1, 9) == true)

//   0
// 1   2
//    3 4
tree = new TreeNode(0,
  new TreeNode(1, null, null),
  new TreeNode(2,
     new TreeNode(3),
     new TreeNode(4)
  )
)
console.log(validAncestor(tree, 3, 4) == false)
