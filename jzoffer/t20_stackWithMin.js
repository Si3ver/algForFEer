// 2018-11-08 包含min函数的栈，调用min时需要保证复杂度为O(1)
// 思路：构造一个辅助栈，存储“当前的”最小元素~

var stack = [],
    stackAsist = [];

function push(node) {
  stack.push(node);
  var lenAsist = stackAsist.length;
  if (lenAsist === 0 || node < stackAsist[lenAsist-1]) {
    stackAsist.push(node);
  } else {
    stackAsist.push(stackAsist[lenAsist - 1]);
  }
}

function pop() {
  if (stack.length === 0) {
    return null;
  }
  stackAsist.pop();
  return stack.pop();
}

function top() {
  if (stack.length === 0) {
    return null;
  }
  return stack[stack.length - 1];
}

function min() {
  if (stack.length === 0) {
    return null;
  }
  return stackAsist[stackAsist.length - 1];
}
