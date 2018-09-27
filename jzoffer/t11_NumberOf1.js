// 二进制中1的个数
// 注意负数左移位时，会补1。
function NumberOf1(n)
{
    if(typeof n !== 'number'){
        return false;
    }
    n = parseInt(n);

    var cnt = 0;
    while(n !== 0){
        ++cnt;
        n = n & (n-1);  // trick: 去掉最后一个1
    }
    return cnt;
}

console.log(NumberOf1(100));
console.log(NumberOf1(10));
console.log(NumberOf1(7));
console.log(NumberOf1(-1));
console.log(NumberOf1(-3));
console.log(NumberOf1(-7));
