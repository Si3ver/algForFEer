// 旋转数组的最小数据
// 旋转数组的特点 --- 最小数据是分界点！！！

// 解法一、遍历一趟，时间复杂度为O(n)
// function minNumberInRotateArray(arr)
// {
//     if(!(arr instanceof Array) || arr.length === 0){
//         return false;
//     }
//     var len = arr.length;
//     for(var i = 0; i < len-1; ++i){
//         if(arr[i] > arr[i+1]){
//             return arr[i+1];
//         }
//     }
//     return arr[i+1];
// }
// 解法二、利用二分查找，时间复杂度降低到O(logn)
function minNumberInRotateArray(arr)
{
    if(!(arr instanceof Array) || arr.length === 0){
        return false;
    }
    var len = arr.length, lo = 0, hi = len-1;
    while(lo < hi){
        var mi = lo + Math.floor((hi-lo)/2);
        if(arr[mi] > arr[hi]){    // =>  mid位于左边的大递增子数组 => 左半段排除掉
            lo = mi + 1;
        }else if(arr[mi] < arr[hi]){// => 右半段排除掉，且mid可能是最小
            hi = mi;
        }else{                   // arr[mi] === arr[hi] => => 右半段排除掉，且mid不可能是最小
            hi = hi - 1;
        }
    }
    return arr[lo];
}

var arr = [3,4,5,1,2];
console.log(minNumberInRotateArray(arr));
