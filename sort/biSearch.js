Array.prototype.biSearch = function(target){
    var len = this.length, lo = 0, hi = len-1;
    
    while(lo <= hi){
        var mid = Math.floor((lo + hi)/2);
        if(target === this[mid]){
            return mid;
        }else if(target > this[mid]){
            lo = mid + 1;
        }else{
            hi = mid - 1;
        }
    }
    console.log('不会运行到这行哒！！！');
};

console.log([ 2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50 ].biSearch(47));
