function add(x){

    var sum = 0;
    sum += x;
    
    return function tmp(y){
        if(arguments.length === 0){
            return sum;
        } else {
            sum += y;
            return tmp;
        }
    }
}

var res1 = add(1)(2)();
var res2 = add(1)(2)(3)();
var res3 = add(1)(2)(3)(4)();
console.log(res1.toString(), res2, res3);
