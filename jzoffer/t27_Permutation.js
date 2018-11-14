// 2018-11-14 字符串的全排列
function Permutation(str) {
  var result = [], arr = str.split("");
  if (!arr.length) return [];
  PermutationHelp(result, arr, 0);
  return [...new Set(result)].sort();
}

function PermutationHelp(result, arr, idx) {
  if (idx > arr.length-1){
    result.push(arr.join(""));
  }else{
    for(var i = idx; i < arr.length; ++i) {
      var tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
      PermutationHelp(result, arr, idx+1);
      tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
}

console.log(Permutation("aa"));
console.log(Permutation("ab"));
console.log(Permutation("abb"));
console.log(Permutation("abc"));
