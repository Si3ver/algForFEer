// 2019年01月05日15:23:02
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [],
    paren_map = { ')': '(', ']': '[', '}': '{' };
  for (let i = 0, len = s.length; i < len; ++i) {
    if (!(s[i] in paren_map)) {
      stack.push(s[i])
    } else if (stack.length === 0 || paren_map[s[i]] !== stack.pop()) {
      return false
    }
  }
  return stack.length === 0
};
