// 调整数组的顺序，使奇数在前偶数在后，并保持数组的稳定性

function swap(arr, idx1, idx2)
{
    var tmp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = tmp;
}

function reOrderArray(arr)
{
    if(!(arr instanceof Array)){
        return false;
    }
    var len = arr.length;
    for(var i = 0; i < len-1; ++i){
        for(var j = 0; j < len-1; ++j){
            if(arr[j] % 2 === 0 && arr[j+1] % 2 === 1){
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

console.log(reOrderArray([213,324,43,574,865,345,234,124,7245,845,4578,325]));
console.log(reOrderArray([1,2,3,4,5,6,7,8,9]));
