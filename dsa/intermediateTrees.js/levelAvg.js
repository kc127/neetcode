/**
 * Q. Given the root of a binary tree, return average values of nodes on each level starting from the root in an array form.

     1
   2  3
returns [1, 2.5]

     5
   2   6
  1 3    8 */
//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
  if (!root) {
      return [];
  }
  let queue = [root];
  let levelAvg = [];

  while (queue.length !== 0) {
      let size = queue.length;
      console.log(queue, size)
      let levelSum = 0;
      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          levelSum += curr.value;
          if (curr.left) queue.push(curr.left);
          if (curr.right) queue.push(curr.right);
      }
      levelAvg.push(levelSum/size);
  }
  return levelAvg;
}
