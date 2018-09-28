// 每次步长减半的希尔排序算法实现
Array.prototype.shellSort = function(){
    var gap, i, j;
    for(gap = this.length >> 1; gap > 0; gap >>= 1){
        for(i = gap; i < this.length; ++i){
            var tmp = this[i];
            for(j = i-gap; j >= 0 && this[j] > tmp; j -= gap){
                this[j+gap] = this[j];
            }
            this[j+gap] = tmp;
        }
        console.log(gap, this);
    }
    return this;
}

console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].shellSort());
