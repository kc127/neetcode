/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {

  function construct(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    let root = new TreeNode(preorder[0]);
    let rootIdx = inorder.indexOf(preorder[0]);
    let leftSubtree = inorder.slice(0, rootIdx);
    let rightSubtree = inorder.slice(rootIdx + 1);

    let preorderLeftSubtree = preorder.slice(1,leftSubtree.length + 1);
    let preorderRightSubtree = preorder.slice(leftSubtree.length + 1);

    root.left = construct(preorderLeftSubtree, leftSubtree);
    root.right = construct(preorderRightSubtree, rightSubtree);

    return root;
  }

  return construct(preorder, inorder);
}