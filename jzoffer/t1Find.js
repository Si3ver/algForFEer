// 二维数组中的查找

function Find(target, array)
{
    if(!(array instanceof Array) || array.length === 0){
        return false;
    }
    var len1 = array.length, len2 = array[0].length;
    var i = 0, j = len2-1;
    while(i < len1 && j >= 0){
        var item = array[i][j];
        if(item === target){
            return true;
        }else if(item > target){
            --j;
        }else{
            ++i;
        }
    }
    return false;
}

var arr = [[ 1, 2, 8, 9],
           [ 2, 4, 9,12],
           [ 4, 6,10,13],
           [ 6, 8,11,15]];
console.log(Find(6, arr));
