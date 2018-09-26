// 用两个栈实现一个队列

var arr1 = [], arr2 = [];
function push(node)
{
    arr1.push(node);
}
function pop()
{
    if(arr2.length === 0){
        while(arr1.length > 0){
            var item = arr1.pop();
            arr2.push(item);
        }
    }
    if(arr2.length > 0){
        return arr2.pop();
    }
}