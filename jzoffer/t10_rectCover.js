// 矩形覆盖
// 思路，依旧是递推公式 => fib
function rectCover(n)
{
    if(n < 1){
        return 0;
    }else if(n === 1){
        return 1;
    }else if(n === 2){
        return 2;
    }else{
        return rectCover(n-1) + rectCover(n-2);
    }
}