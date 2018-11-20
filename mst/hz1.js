// 请写出一个函数 initArray ，接受两个参数 m 和 n，返回一个数组，它的长度是 m，每个值都是 n。
// 要求：不能用for循环

// 解法一: 使用ES6API， Array.fill()
const initArray1 = (m, n) => (new Array(m).fill(n, 0, m))

let a = initArray1(3, 8)
console.log(a)

// 解法二: 使用递归
const initArray2 = (m, n) => {
  function push_n_multitimes(n, times) {
    if (times > 0) {
      arr.push(n)
      push_n_multitimes(n, times-1)
    } else {
      return
    }
  }
  let arr = []
  push_n_multitimes(n, m)
  return arr
}

let b = initArray2(3, 8)
console.log(b)
