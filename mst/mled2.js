function fn1(brr) {
  brr = [];
}

function fn2(crr) {
  crr[1] = 100;
}

var arr = [1, 2, 3];
fn1(arr);
console.log(arr);
fn2(arr);
console.log(arr);
