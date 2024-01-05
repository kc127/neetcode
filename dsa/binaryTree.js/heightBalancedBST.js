//
// Binary trees are already defined with this interface:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;

const { isArrayLikeObject } = require("lodash");

// }
function solution(array) {
    if (array.length === 1) return new Tree(array[0]);

    function createBST(left, right) {
       if (left <= right) {
           let mid = left + Math.floor((right - left)/2);
            let root = new Tree(array[mid]);
            root.left = createBST(left, mid - 1);
            root.right = createBST(mid + 1, right);
            return root;
       } else {
           return null;
       }
    }
    return createBST(0, array.length - 1);

}
