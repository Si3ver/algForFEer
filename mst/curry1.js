function add(){

    var _args = [];
    
    return function(){
        if(arguments.length === 0){
            return _args.reduce(function(x, y) {
                return x + y;
            });
        }
        // 每次把参数push到闭包数组_args内
        [].push.apply(_args, [].slice.call(arguments));
        return arguments.callee;
    }
}

var res1 = add(1)(2)();
var res2 = add(1)(2)(3)();
var res3 = add(1)(2)(3)(4)();
console.log(res1.toString(), res2, res3);
