// 非递归写法参考上一题
function jumpFloor(n)
{
    if(n === 1){
        return 1;
    }
    if(n === 2){
        return 2;
    }
    return jumpFloor(n-1)+jumpFloor(n-2);
}
