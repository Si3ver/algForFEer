// 0, 1, 1, 2, 3, 5, 8, 13, 21, 3 ...
// 递归写法
let fib1 = (n) => {
  if (n === 0 || n === 1){
    return n;
  }
  return fib1(n-1) + fib1(n-2);
}

let fib2 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  let pprev = 0, prev = 1, cur = 1;
  for(let i = 2; i < n; ++i){
    pprev = prev;
    prev = cur;
    cur = pprev + prev;
  }
  return cur;
}

let ret = [];
for(let i = 0; i < 100; ++i){
  ret.push(fib2(i));
}
console.log(ret);
