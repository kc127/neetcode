class TreeNode {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function sumNodesWithOddParentQ(root) {

    if(root === null) return 0
    let q = [root];
    let sum = 0;

    while( q.length > 0 ) {

      let curr = q.shift();
      if(curr.val % 2 === 1) {

        if(curr.right !== null) {
          sum += curr.right.val;
        }
        if(curr.left !== null) {
          sum += curr.left.val;
        }
      }

      if(curr.left !== null) q.push(curr.left);
      if(curr.right !== null) q.push(curr.right);
    }

    return sum;
}

function sumNodesWithOddParent(root){
  if (root === null) {
    return 0
  }
  let result = 0

  if (root.val % 2 === 1) {
    result += (!root.left ? 0 : root.left.val) + (!root.right ? 0 : root.right.val)
  }
  result += sumNodesWithOddParent(root.left)
  result += sumNodesWithOddParent(root.right)

  return result
}


let tree1 = new TreeNode(1)
let tree2 = new TreeNode(1, new TreeNode(2), new TreeNode(3))

let root = new TreeNode(1)
let three = new TreeNode(3)
let four = new TreeNode(4)
let one = new TreeNode(1)
let two = new TreeNode(2)
let five = new TreeNode(5)
let six = new TreeNode(6)

root.right = four;
root.left = three;
three.right = two;
three.left = one;
four.right = six;
four.left = five;

// happy cases :

//       1
//     3*  4*
//   1*  2* 5  6
// _  _ _ _ _ _ _ _
//

// 3 + 4 + 1 + 2 = 10


  //         6
  //     7        8
  // 2       7  1    3

  // 2 + 7 = 9

const test1 = new TreeNode(6,
  new TreeNode(7,
    new TreeNode(2, null, null),
    new TreeNode(7, null, null)
  ),
  new TreeNode(8,
    new TreeNode(1, null, null),
    new TreeNode(3, null, null)
  )
);

const test2 = new TreeNode(2,
  new TreeNode(5, null, null),
  new TreeNode(9, null, null)
);

//   2
// 5  9

console.log(sumNodesWithOddParentQ(tree2), ' expect 5');
console.log(sumNodesWithOddParentQ(tree1), ' expect 0');
console.log(sumNodesWithOddParentQ(null), ' expect 0');
console.log(sumNodesWithOddParentQ(root), ' expect 10');
console.log(sumNodesWithOddParentQ(test1), ' expect 9');
console.log(sumNodesWithOddParentQ(test2), ' expect 0');

