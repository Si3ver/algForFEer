// https://mp.weixin.qq.com/s/va_23rCJhnr2LA9ILncNeg

// O(n)
const isBalanced = (str) => {
  const map = new Map([
    ["}", "{"],
    ["]", "["],
    [")", "("]
  ])
  let stack = [], lefts = [...map.values()]

  for (let i = 0; i < str.length; ++i){
    let node = str[i]
    if (lefts.includes(node)) {
      stack.push(node)
    } else if (map.has(node)) {
      if (stack.length === 0 || stack[stack.length - 1] !== map.get(node)) {
        return false;
      }
      stack.pop()
    }
  }
  return stack.length === 0
}

console.log(isBalanced("{{}}{}{}"))    // true
console.log(isBalanced("{}{{}"))       // false
console.log(isBalanced("(foo { bar (baz) [boo] })xx")) // true
console.log(isBalanced("foo { bar { baz }"))        // false
console.log(isBalanced("foo { (bar [baz] })"))      // false
