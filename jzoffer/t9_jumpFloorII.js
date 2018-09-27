// 变态跳台阶
// 解析： 实际上是隔板问题，共有n-1个空隙，每个空隙有放和不放两种选择，故总次数为 2^(n-1)次，用移位速度更快。
function jumpFloorII(number)
{
    return 1<<(--number);
}