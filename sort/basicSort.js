Array.prototype.bubbleSort = function(){
    var len = this.length;
    for(var i = 0; i < len; ++i){
        for(var j = 0; j < len-i-1; ++j){
            if(this[j] > this[j+1]){
                var tmp = this[j];
                this[j] = this[j+1];
                this[j+1] = tmp;
            }
        }
    }
    return this;
};
Array.prototype.insersionSort = function(){
    var len = this.length;
    for(var i = 1; i < len; ++i){
        var tmp = this[i];
        for(var j = i-1; j >= 0 && this[j] > tmp; --j){
            this[j+1] = this[j];
        }
        this[j+1] = tmp;
    }
    return this;
};
Array.prototype.selectionSort = function(){
    var len = this.length;
    for(var i = 0; i < len; ++i){
        var minIdx = i;
        for(var j = i+1; j < len; ++j){
            if(this[j] < this[minIdx]){
                minIdx = j;
            }
        }
        var tmp = this[i];
        this[i] = this[minIdx];
        this[minIdx] = tmp;
    }
    return this;
};

console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].bubbleSort());
console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].insersionSort());
console.log([3,44,38,5,47,15,36,26,27,2,46,4,19,50,48].selectionSort());
