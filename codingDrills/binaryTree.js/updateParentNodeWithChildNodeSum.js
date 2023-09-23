/*
Q. Given a binary tree, update each node's value with its sum of child nodes. You must update the nodes by one level at a time starting from the top (root).

Example:
Given

          1
         / \
        2   3
       /
      4
returns

          5                    // 2+3
         / \
        4   3                  // 4
       /
      4

*/

//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function solution(root) {
  let levelsSum = 0;
  let queue = root ? [root] : [];

  while (queue.length) {
      let size = queue.length;


      for (let i = 0; i < size; i++) {
          let curr = queue.shift();
          let levelSum = 0;
          if (curr.left) {
              levelSum += curr.left.value;
              queue.push(curr.left);
          }
          if (curr.right) {
              levelSum += curr.right.value;
              queue.push(curr.right);
          }
          curr.value = levelSum === 0 ? curr.value : levelSum;
      }

  }
  return root;
}