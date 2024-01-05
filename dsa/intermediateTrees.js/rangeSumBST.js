var rangeSumBST = function(root, low, high) {
  let sum = 0;

  var binarySearch = function (node) {
      if (!node) {
          return;
      }
      if ((node.val > low  || node.val === low) && (node.val < high || node.val === high)) {
          sum += node.val;
      }
      binarySearch(node.left);
      binarySearch(node.right);
  }
  binarySearch(root);
  return sum;
};