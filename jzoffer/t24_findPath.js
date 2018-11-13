// 2018-11-13 二叉树中和为某一值的路径
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
  var result = [];
  if (root === null)  return result;
  FindPathHelp(root, expectNumber, [], 0, result);
  return result;
}

function FindPathHelp(root, expectNumber, path, currentSum, result) {
  currentSum += root.val;
  path.push(root.val);
  if (!root.left && !root.right && currentSum === expectNumber) {
    result.push(path.slice(0));                 // ！！！注意此处数组拷贝
  }
  if (root.left) {
    FindPathHelp(root.left, expectNumber, path, currentSum, result);
  }
  if (root.right) {
    FindPathHelp(root.right, expectNumber, path, currentSum, result);
  }
  path.pop();
}
