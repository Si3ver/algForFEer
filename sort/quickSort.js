// 一、递归写法
Array.prototype.quickSort1 = function(){
    function partition(arr, left, right){
        if(left < right){
            var x = arr[right], i = left - 1, tmp;
            console.log(x, i);
            for(var j = left; j <= right; ++j){
                if(arr[j] <= x){
                    ++i;
                    tmp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
            }
            partition(arr, left, i-1);
            partition(arr, i+1, right);
        }
        return arr;
    }
    return partition(this, 0, this.length-1);
};
// 二、非递归写法
Array.prototype.quickSort2 = function(){
    // 待补充
    return this;
};

console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].quickSort1());
console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].quickSort2());
