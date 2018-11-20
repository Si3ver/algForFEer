/* 面试题，实现一个 stringify函数，能去除key、value前的$符号
如 obj = {"$$a":123, "b":["$cd", "$$679", 452]}

*/

const myStringify = (obj) => (JSON.stringify(obj).replace(/"\$+/g, "\""))

let obj = { "$$a": 123, "b": ["$cd", "$$679", 452] }
console.log(myStringify(obj))
