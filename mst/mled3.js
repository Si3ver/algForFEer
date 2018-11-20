function quickSort(arr, left, right){
  if(left > right) return;
  var pivotIdx = partition(arr, left, right);
  quickSort(arr, left, pivotIdx-1);
  quickSort(arr, pivotIdx+1, right);
}

function partition(arr, left, right){
  var pivot = arr[left];
  while(left < right){
    while(left < right && arr[right] >= pivot)  --right;
    if (left < right) arr[left] = arr[right];
    while(left < right && arr[left] <= pivot) ++left;
    if (left < right) arr[right] = arr[left];
  }
  arr[left] = pivot;
  return left;
}


var arr = [100, 400, 300, 500, 23];
quickSort(arr, 0, arr.length-1);
console.log(arr);

// 快速冒泡排序？？？
