// 从尾到头打印链表

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    // write code here
    var arr = [], p = head;
    while(p != null){
        arr.unshift(p.val);
        p = p.next;
    }
    return arr;
}
