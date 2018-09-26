function Fibonacci(n)
{
    if((typeof n !== 'number') || n < 0){
        return false;
    }
    n = parseInt(n);

    if(n === 0) return 0;
    if(n === 1) return 1;
    var preTwo = 0, preOne = 1, res;
    for(var i = 2; i <= n; ++i){
        res = preTwo+preOne;
        preTwo = preOne;
        preOne = res;
    }
    return res;
}

for(var i = 0; i < 10; ++i){
    console.log(i, Fibonacci(i));
}
