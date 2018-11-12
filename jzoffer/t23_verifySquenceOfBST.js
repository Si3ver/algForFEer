// 2018-11-12 二叉树的后序遍历序列
function VerifySquenceOfBST(sequence) {
  if (sequence == null || sequence.length <= 0) {
    return false;
  }
  return VerifyHelp(sequence);
}

function VerifyHelp(sequence) {
  if (sequence.length === 0)  return true;
  var root = sequence.pop(),
      left = [];
  while (sequence.length && sequence[0]<root)
    left.push(sequence.shift());
  for (var i = 0; i < sequence.length; ++i) {
    if (sequence[i] < root)
      return false;
  }
  return VerifyHelp(left) && VerifyHelp(sequence);
}

console.log(VerifySquenceOfBST([5, 7, 6, 9, 11, 10, 8]));
console.log(VerifySquenceOfBST([7, 4, 6, 5]));
