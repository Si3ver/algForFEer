// 2018-11-12 栈的压入、弹出序列
// tip: idx仅仅用于记录popV下标。
function IsPopOrder(pushV, popV) {
  var stack = [], idx = 0;
  for (var i = 0; i < pushV.length; ++i) {
    stack.push(pushV[i]);
    while (stack.length && stack[stack.length - 1] === popV[idx]) {
      stack.pop();
      ++idx;
    }
  }
  return stack.length === 0;
}
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(IsPopOrder([1, 2, 3, 4, 5], [4, 5, 3, 1, 2]));
