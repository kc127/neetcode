
'''
Given a binary search tree where all nodes have integer values, return the floor and ceiling of a target number.

The floor is the largest element that is smaller than or equal to the target, and the ceil is the smallest element that is greater than or equal to the number.


EXAMPLE(S)
  3
1   5

tree = TreeNode(3,
         TreeNode(1),
         TreeNode(5))

target: 4 returns [3, 5]
target: 2 returns [1, 3]

            100
    50
40       55

target = 49, floor = 40, ceil = 50
target = 50, floor = 50, ceil = 50

            25
target = 22, floor = null, ceil = 25
target = 27, floor = 25, ceil = null
target = 25, floor = ceil = 25


Questions:
- what if the target is not in the tree?
    - return ceiling and floor
- if there's only one node and its the target-> return that node
- if target is in the tree
    - the ceiling and floor are equal to the target

Approach:
- if node is null
    return
- if node value === target
    - return [target, target]
- if node value > target
    check left tree
- if node value < target
    check right tree

FUNCTION SIGNATURE
function findFloorAndCeil(node, target):
'''


# Anulika

def findFloorAndCeil(node, target):
    #result = [None, None]
    def search(head, res =  [None, None]):
        if not head:
            return res

        if head.value > target:
            res[1] = head.value #the ceiling
            return res

        elif head.value < target:
            result[0] = head.value #the floor
            return search(head.right)
        elif head.value == target:
            return [target, target]



    return search(node)



class TreeNode:
  def __init__(self, value = 0, left = None, right = None):
    self.value = value
    self.left = left
    self.right = right
targetb = 37

floor
ceil

  #                30
#        15              45
#    10     17       35      55
#  4  11  16  19   32  37  50  70

tree = TreeNode(30,
         TreeNode(15,
           TreeNode(10,
             TreeNode(4),
             TreeNode(11)),
           TreeNode(17,
             TreeNode(16),
             TreeNode(19))),
         TreeNode(45,
           TreeNode(35,
             TreeNode(32),
             TreeNode(37)),
           TreeNode(55,
             TreeNode(50),
             TreeNode(70))))

print(findFloorAndCeil(tree, 36) == [35,37])
print(findFloorAndCeil(tree, 1) == [None,4])
print(findFloorAndCeil(tree, 400) == [70, None])
print(findFloorAndCeil(None, 1) == [None,None])
print(findFloorAndCeil(tree, 17) == [17,17])






# Kanchan
'''
                100<
        55                200

target = 85

            input                        line
        MAINFUNC(100, 85)              line 105 = traverse(55, null, 100)
        traverse(55, null, 100)        line 109 = traverse(null, 55, 100)
        traverse(null)                 RETURNS;


function findFloorAndCeil(node, target) {

  let floor = null;
  let ceil = null;

  function traverse(node) {
    if (!node) return;

    // case 1
    if (node.value === target) {
      floor = node.value;
      ceil = node.value;
      return;
    }
    // case 2
    if (target < node.value) {
      ceil = node.value;
      traverse(node.left);
    }
    // case 3
    if (target > node.value) {
      floor = node.value;
      traverse(node.right)
    }
  }

  traverse(node)
  return [floor, ceil]
}

'''






# hongyu
'''
def findFloorAndCeil(node, target):

    if not node: return [None, None]
    floor_ceil = [None, None]

    def dfs(node, target):
        if not node: return
        if node.val == target:
            floor_ceil[0] = node.value
            floor_ceil[1] = node.value
            return
        if node.val > target:
            floor_ceil[1] = node.val
            dfs(node.left, target)
        if node.val < target:
            floor_ceil[0] = node.val
            dfs(node.right, target)

    dfs(node, target)
    return floor_ceil



'''





'''

#levi
function findFloorAndCeiling(node, target) {

  const result = [null, null];
  function helper(node) {
    if(!node) {
      return;
    }
    if(node.value === target) {
      result[0] = target;
      result[1] = target;
      return;
    }
    if(node.value < target) {
      result[0] = node.value;
      helper(node.right);
    }
    if(node.value > target) {
      result[1] = node.value;
      helper(node.left);
    }
  }
  helper(node);
  return result;
}

class TreeNode {
    constructor(value = 0, left = null, right = null) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
const tree = new TreeNode(30,
    new TreeNode(15,
      new TreeNode(10,
        new TreeNode(4),
        new TreeNode(11)
      ),
      new TreeNode(17,
        new TreeNode(16),
        new TreeNode(19)
      )
    ),
    new TreeNode(45,
      new TreeNode(35,
        new TreeNode(32),
        new TreeNode(37)
      ),
      new TreeNode(55,
        new TreeNode(50),
        new TreeNode(70)
      )
    )
  )

  console.log(findFloorAndCeil(tree, 36).toString() === [35, 37].toString())
  console.log(findFloorAndCeil(tree, 1).toString() === [null, 4].toString())
  console.log(findFloorAndCeil(tree, 400).toString() === [70, null].toString())
  console.log(findFloorAndCeil(null, 1).toString() === [null, null].toString())
  console.log(findFloorAndCeil(tree, 17).toString() === [17, 17].toString())
#

def findFloorAndCeil(node, target):

    '''