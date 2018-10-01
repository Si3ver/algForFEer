// 原址排序（注意：阮一峰的博客写法开辟了新数组，非原址排序，空间复杂度太高）
function swap(x, y){
    var tmp = y;
    y = x;
    x = tmp;
}
function partition(arr, lIdx, rIdx){
    var i = lIdx, j = rIdx, pivot = arr[lIdx];
    while(i < j){
        while(i < j && arr[j] > pivot) --j;
        if(i < j){
            arr[i++] = arr[j];
        }
        while(i < j && arr[i] < pivot) ++i;
        if(i < j){
            arr[j--] = arr[i];
        }
    }
    arr[i] = pivot;
    return i;
}
// 解法一：递归版
function quickSort1(arr, lIdx, rIdx){
    if(lIdx > rIdx){
        return;
    }
    var pivotIdx = partition(arr, lIdx, rIdx);
    quickSort1(arr, lIdx, pivotIdx-1);
    quickSort1(arr, pivotIdx+1, rIdx);
}
// 解法二：非递归版 -> 辅助数据结构 栈 用于存储子数组的左右边界
function quickSort2(arr){
    var stack = [0, arr.length-1];
    while(stack.length > 0){
        var rIdx = stack.pop(), lIdx = stack.pop();
        var pivotIdx = partition(arr, lIdx, rIdx);
        if(pivotIdx + 1 < rIdx){    // 右边下标入栈
            stack.push(pivotIdx+1);
            stack.push(rIdx);
        }
        if(lIdx + 1 < pivotIdx){    // 左边下标入栈
            stack.push(lIdx);
            stack.push(pivotIdx-1);
        }
    }
}

var arr1 = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,27];
quickSort1(arr1, 0, arr1.length-1);
console.log(arr1);

var arr2 = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48,27];
quickSort2(arr2);
console.log(arr2);
