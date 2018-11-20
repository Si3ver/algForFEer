var a = 10;
if (!(b in window)){
  a += 2;
  var b = 1;
} else {
  a += 1;
}
console.log(a);   // 11
console.log(b);   // undefined
