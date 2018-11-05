// t3  从尾到头打印链表
// 利用栈 or 递归 or js的unshift方法~ 递归相率低，其他两种相同。
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  var arr = [], p = head;
  while (p != null) {
    arr.unshift(p.val);
    p = p.next;
  }
  return arr;
}
